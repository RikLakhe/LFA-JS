"use strict";
exports.__esModule = true;
var DivCommand = /** @class */ (function () {
    function DivCommand() {
    }
    DivCommand.prototype.calculate = function (x, y) {
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
    return DivCommand;
}());
exports.DivCommand = DivCommand;
