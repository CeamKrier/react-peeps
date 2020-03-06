"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var head_1 = __importDefault(require("./head"));
var z_options_1 = require("./body/z_options");
exports.Body = z_options_1.Body;
var z_options_2 = require("./hair/z_options");
exports.Hair = z_options_2.Hair;
var z_options_3 = require("./accessories/z_options");
exports.Accessories = z_options_3.Accessories;
var z_options_4 = require("./face/z_options");
exports.Face = z_options_4.Face;
var z_options_5 = require("./facialHair/z_options");
exports.FacialHair = z_options_5.FacialHair;
var Peep = function (_a) {
    var style = _a.style, accessory = _a.accessory, body = _a.body, face = _a.face, facialHair = _a.facialHair, hair = _a.hair, viewBox = _a.viewBox;
    var _b = viewBox || { x: 0, y: 0, width: 850, height: 1200 }, x = _b.x, y = _b.y, width = _b.width, height = _b.height;
    return (react_1.default.createElement("svg", { style: style, viewBox: x + " " + y + " " + width + " " + height },
        body && react_1.default.createElement(body),
        react_1.default.createElement(head_1.default, { hair: hair, face: face, facialHair: facialHair, accessory: accessory })));
};
exports.CirclePeep = function (_a) {
    var style = _a.style, accessory = _a.accessory, body = _a.body, face = _a.face, facialHair = _a.facialHair, hair = _a.hair, viewBox = _a.viewBox, circleStyle = _a.circleStyle;
    return (react_1.default.createElement("div", { style: circleStyle }, react_1.default.createElement(Peep, { style: style, accessory: accessory, body: body, face: face, facialHair: facialHair, hair: hair, viewBox: viewBox })));
};
exports.default = Peep;
//# sourceMappingURL=index.js.map