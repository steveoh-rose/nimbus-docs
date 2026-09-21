import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgPermissions = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgPermissions" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], fillRule: "evenodd", d: "M75.667 30.657q0 .26-.005.52h-46.03a32 32 0 0 1-.005-.52C29.628 15.445 40.395 4 52.648 4s23.02 11.445 23.02 26.657m-50.036.52-.003-.52C25.628 13.726 37.725 0 52.648 0s27.019 13.726 27.019 30.657q0 .26-.004.52h6.631c5.523 0 10 4.477 10 10V96c0 5.523-4.477 10-10 10H19c-5.523 0-10-4.477-10-10V41.177c0-5.523 4.477-10 10-10zm-6.631 4h67.294a6 6 0 0 1 6 6V96a6 6 0 0 1-6 6H19a6 6 0 0 1-6-6V41.177a6 6 0 0 1 6-6", clipRule: "evenodd" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, fillRule: "evenodd", d: "M55.765 71.102a8.316 8.316 0 0 0-3.118-16.024 8.314 8.314 0 0 0-3.118 16.023v9.958h6.236z", clipRule: "evenodd" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 58.705, x2: 42.031, y1: 59.17, y2: 69.841, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgPermissions as default };
