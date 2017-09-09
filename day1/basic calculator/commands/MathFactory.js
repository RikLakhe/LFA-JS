"use strict";
exports.__esModule = true;
var AddCommand_1 = require("./AddCommand");
var SubCommand_1 = require("./SubCommand");
var MultCommand_1 = require("./MultCommand");
var DivCommand_1 = require("./DivCommand");
var MathFactory = /** @class */ (function () {
    function MathFactory() {
    }
    MathFactory.get = function (key) {
        if (key === '+') {
            return new AddCommand_1.AddCommand();
        }
        else if (key === '-') {
            return new SubCommand_1.SubCommand();
        }
        else if (key === '*') {
            return new MultCommand_1.MultCommand();
        }
        else if (key === '/') {
            return new DivCommand_1.DivCommand();
        }
        else {
            return null;
        }
    };
    return MathFactory;
}());
exports.MathFactory = MathFactory;
