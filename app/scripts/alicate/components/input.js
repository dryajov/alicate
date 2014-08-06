/**
 * Created by dmitriy.ryajov on 7/1/14.
 */
define(
    [
        'alicate/components/component'
    ],
    function makeInput(Component) {
        'use strict';

        /**
         * A module representing an input
         *
         * @module Input
         * @exports alicate/components/input
         * @version 1.0
         */
        return Component.extend({
            defaults: function defaults() {
                var props = Component.prototype.defaults.call(this);

                $.extend(props, {
                    /**
                     * @property {String[]} allowedElements - Elements
                     * this component can attach to
                     */
                    allowedElements: [
                        "input",
                        "textarea"
                    ]
                });

                return props;
            },
            /**
             * Get the value of this html element
             *
             * @returns {*}
             */
            getValue: function getValue() {
                return this.$el.val();
            },
            /**
             * Render the input component
             *
             */
            render: function render() {
                var data;

                this._checkIsValidElement();

                if (this.model) {
                    data = this.getModelData();
                    this.$el.val(data);
                }
                Component.prototype.render.call(this);
            }
        });
    });
