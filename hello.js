/**
 * @module hello
 * @requires montage/core/core
 */
var Montage = require("montage/core/core").Montage;
/**
 * @class Hello
 * @extends Montage
 */
exports.Hello = Montage.specialize(/** @lends Hello# */ {
    constructor: {
        value: function Hello() {
            this.super();
        }
    }
});
