"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var index = function (_a) {
    var hair = _a.hair, face = _a.face, facialHair = _a.facialHair, accessory = _a.accessory;
    return (react_1.default.createElement("g", { id: 'Head', transform: 'translate(225 0)' },
        react_1.default.createElement("g", { id: 'HAIR' }, hair && react_1.default.createElement(hair)),
        react_1.default.createElement("g", { id: 'FACE', transform: 'translate(159 186)' }, face && react_1.default.createElement(face)),
        react_1.default.createElement("g", { id: 'FACIAL-HAIR', transform: 'translate(123 338)' }, facialHair && react_1.default.createElement(facialHair)),
        react_1.default.createElement("g", { id: 'ACCESORIES', transform: 'translate(47 241)' }, accessory && react_1.default.createElement(accessory))));
};
exports.default = index;
//# sourceMappingURL=index.js.map