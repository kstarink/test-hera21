/**
 * @module ui/hello.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Hello
 * @extends Component
 */
exports.Hello = Component.specialize(/** @lends Hello# */ {
    constructor: {
        value: function Hello() {
            this.super();
        }
    }
});
