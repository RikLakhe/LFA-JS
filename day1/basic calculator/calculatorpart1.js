"use strict";
exports.__esModule = true;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };
    Calculator.prototype.sub = function (x, y) {
        return x - y;
    };
    Calculator.prototype.mult = function (x, y) {
        return x * y;
    };
    Calculator.prototype.div = function (x, y) {
        if (x === 0 || y === 0) {
            return null;
        }
        else if (x < y) {
            return y / x;
        }
        else {
            return x / y;
        }
    };
    return Calculator;
}());
exports.Calculator = Calculator;
