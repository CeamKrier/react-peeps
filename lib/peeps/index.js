"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var head_1 = __importDefault(require("./head"));
var pose_1 = __importDefault(require("./pose"));
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
    var style = _a.style, accessory = _a.accessory, body = _a.body, face = _a.face, facialHair = _a.facialHair, hair = _a.hair, viewBox = _a.viewBox, circleStyle = _a.circleStyle, strokeColor = _a.strokeColor, backgroundColor = _a.backgroundColor;
    var _b = viewBox || {
        x: 0,
        y: 0,
        width: 850,
        height: 1200
    }, x = _b.x, y = _b.y, width = _b.width, height = _b.height;
    var adjustStrokeColor = function () {
        return typeof strokeColor === 'object'
            ? 'url(#strokeGradient)'
            : strokeColor;
    };
    var adjustBackgroundColor = function () {
        return typeof backgroundColor === 'object'
            ? 'url(#backgroundGradient)'
            : backgroundColor;
    };
    var mainContent = (react_1.default.createElement("svg", { style: style, viewBox: x + " " + y + " " + width + " " + height },
        typeof strokeColor === 'object' && (react_1.default.createElement("defs", null,
            react_1.default.createElement("linearGradient", { id: 'strokeGradient', x1: '0%', y1: '0%', x2: '50%', y2: '100%', gradientTransform: "rotate(" + (strokeColor.degree || 0) + ")" },
                react_1.default.createElement("stop", { offset: '0%', "stop-color": strokeColor.firstColor }),
                react_1.default.createElement("stop", { offset: '100%', "stop-color": strokeColor.secondColor })))),
        typeof backgroundColor === 'object' && (react_1.default.createElement("defs", null,
            react_1.default.createElement("linearGradient", { id: 'backgroundGradient', x1: '0%', y1: '0%', x2: '50%', y2: '100%', gradientTransform: "rotate(" + (backgroundColor.degree || 0) + ")" },
                react_1.default.createElement("stop", { offset: '0%', "stop-color": backgroundColor.firstColor }),
                react_1.default.createElement("stop", { offset: '100%', "stop-color": backgroundColor.secondColor })))),
        react_1.default.createElement("g", null,
            body &&
                react_1.default.createElement(pose_1.default, {
                    piece: body,
                    strokeColor: adjustStrokeColor(),
                    backgroundColor: adjustBackgroundColor()
                }),
            react_1.default.createElement(head_1.default, {
                hairPiece: hair,
                facePiece: face,
                facialHairPiece: facialHair,
                accessoryPiece: accessory,
                strokeColor: adjustStrokeColor(),
                backgroundColor: adjustBackgroundColor()
            }))));
    return circleStyle ? (react_1.default.createElement("div", { style: circleStyle }, mainContent)) : (mainContent);
};
exports.default = Peep;
//# sourceMappingURL=index.js.map