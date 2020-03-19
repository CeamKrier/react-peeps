"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var head_1 = __importDefault(require("./head"));
var z_options_1 = require("./pose/bust/z_options");
exports.BustPose = z_options_1.BustPose;
var z_options_2 = require("./pose/sitting/z_options");
exports.SittingPose = z_options_2.SittingPose;
var z_options_3 = require("./pose/standing/z_options");
exports.StandingPose = z_options_3.StandingPose;
var z_options_4 = require("./hair/z_options");
exports.Hair = z_options_4.Hair;
var z_options_5 = require("./accessories/z_options");
exports.Accessories = z_options_5.Accessories;
var z_options_6 = require("./face/z_options");
exports.Face = z_options_6.Face;
var z_options_7 = require("./facialHair/z_options");
exports.FacialHair = z_options_7.FacialHair;
var Peep = function (_a) {
    var style = _a.style, accessory = _a.accessory, body = _a.body, face = _a.face, facialHair = _a.facialHair, hair = _a.hair, viewBox = _a.viewBox;
    var _b = viewBox || {
        x: 0,
        y: 0,
        width: 850,
        height: 1200
    }, x = _b.x, y = _b.y, width = _b.width, height = _b.height;
    return (react_1.default.createElement("svg", { style: style, viewBox: x + " " + y + " " + width + " " + height },
        react_1.default.createElement("g", null,
            body && react_1.default.createElement(body),
            react_1.default.createElement(head_1.default, { hair: hair, face: face, facialHair: facialHair, accessory: accessory }))));
};
exports.CirclePeep = function (_a) {
    var style = _a.style, accessory = _a.accessory, body = _a.body, face = _a.face, facialHair = _a.facialHair, hair = _a.hair, viewBox = _a.viewBox, circleStyle = _a.circleStyle;
    return (react_1.default.createElement("div", { style: circleStyle }, react_1.default.createElement(Peep, {
        style: style,
        accessory: accessory,
        body: body,
        face: face,
        facialHair: facialHair,
        hair: hair,
        viewBox: viewBox
    })));
};
exports.default = Peep;
//# sourceMappingURL=index.js.map