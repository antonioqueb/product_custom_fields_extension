/** @odoo-module **/

import { registry } from '@web/core/registry';
import { Component, useState, onWillUpdateProps } from '@odoo/owl';

class ProductTemplateVisibility extends Component {
    setup() {
        this.state = useState({
            isPaperRoll: this.props.record.data.is_paper_roll,
        });

        onWillUpdateProps((nextProps) => {
            if (nextProps.record.data.is_paper_roll !== this.props.record.data.is_paper_roll) {
                this.state.isPaperRoll = nextProps.record.data.is_paper_roll;
            }
        });
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
