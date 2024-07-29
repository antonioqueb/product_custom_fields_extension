/** @odoo-module **/

import { registry } from '@web/core/registry';
import { Component, useState, onWillUpdateProps, onWillStart } from '@odoo/owl';

class ProductTemplateVisibility extends Component {
    setup() {
        this.state = useState({
            isPaperRoll: false,
        });

        onWillStart(async () => {
            this.state.isPaperRoll = this.props.record.data.is_paper_roll;
        });

        onWillUpdateProps((nextProps) => {
            if (nextProps.record.data.is_paper_roll !== this.props.record.data.is_paper_roll) {
                this.state.isPaperRoll = nextProps.record.data.is_paper_roll;
            }
        });

        this.env.bus.on('FIELD_CHANGE', this, this.onFieldChange);
    }

    willUnmount() {
        this.env.bus.off('FIELD_CHANGE', this, this.onFieldChange);
    }

    onFieldChange({ dataPointId, changes }) {
        if (dataPointId === this.props.record.id && 'is_paper_roll' in changes) {
            this.state.isPaperRoll = changes.is_paper_roll;
        }
    }

    get isVisible() {
        return this.state.isPaperRoll;
    }
}

ProductTemplateVisibility.template = `
    <div t-if="state.isPaperRoll">
        <t t-slot="default"/>
    </div>
`;

registry.category('fields').add('product_template_visibility', ProductTemplateVisibility);
