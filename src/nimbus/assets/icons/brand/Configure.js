import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgConfigure = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgConfigure" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M102.5 23.45H6.1c-1.1 0-2-.9-2-2s.9-2 2-2h96.4c1.1 0 2 .9 2 2s-.9 2-2 2m0 31.55H6.1c-1.1 0-2-.9-2-2s.9-2 2-2h96.4c1.1 0 2 .9 2 2s-.9 2-2 2m0 31.55H6.1c-1.1 0-2-.9-2-2s.9-2 2-2h96.4c1.1 0 2 .9 2 2s-.9 2-2 2" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M10.05 29.08a7.63 7.63 0 1 0 0-15.26 7.63 7.63 0 0 0 0 15.26" }),
        React.createElement("path", { fill: `url(#${id}:__b)`, d: "M78.63 60.63a7.63 7.63 0 1 0 0-15.26 7.63 7.63 0 0 0 0 15.26" }),
        React.createElement("path", { fill: `url(#${id}:__c)`, d: "M32.63 92.1a7.55 7.55 0 1 0 0-15.1 7.55 7.55 0 0 0 0 15.1" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 15.609, x2: 4.824, y1: 16.223, y2: 27.009, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__b`, x1: 84.189, x2: 73.404, y1: 47.773, y2: 58.559, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__c`, x1: 38.131, x2: 27.459, y1: 79.378, y2: 90.05, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgConfigure as default };
