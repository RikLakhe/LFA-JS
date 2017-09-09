"use strict";
exports.__esModule = true;
var MathContext = /** @class */ (function () {
    function MathContext(cmd) {
        this.cmd = cmd;
    }
    MathContext.prototype.doCalculation = function (x, y) {
        console.log(this.cmd.calculate(x, y));
    };
    return MathContext;
}());
exports.MathContext = MathContext;
