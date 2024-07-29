/** @odoo-module **/

import { registry } from '@web/core/registry';
import { Component, useState, onWillUpdateProps, onMounted, onWillUnmount } from '@odoo/owl';

class ProductTemplateVisibility extends Component {
    setup() {
        this.state = useState({
            isPaperRoll: this.props.record.data.is_paper_roll,
        });

        onMounted(() => {
            this.env.bus.on('FIELD_CHANGE', this, this.onFieldChange);
        });

        onWillUnmount(() => {
            this.env.bus.off('FIELD_CHANGE', this, this.onFieldChange);
        });
    }

    onFieldChange({ dataPointId, changes }) {
        if (dataPointId === this.props.record.id && 'is_paper_roll' in changes) {
            this.state.isPaperRoll = changes.is_paper_roll;
        }
    }
}

ProductTemplateVisibility.template = 'product_template_visibility.Template';

registry.category('fields').add('product_template_visibility', ProductTemplateVisibility);
