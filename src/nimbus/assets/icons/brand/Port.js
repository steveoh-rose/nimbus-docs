import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgPort = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgPort" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M94.26 95.33H11.74C6.37 95.33 2 90.96 2 85.59V19.41c0-5.37 4.37-9.74 9.74-9.74h82.52c5.37 0 9.74 4.37 9.74 9.74v66.18c0 5.37-4.37 9.74-9.74 9.74M11.74 13.67C8.57 13.67 6 16.25 6 19.41v66.18c0 3.17 2.58 5.74 5.74 5.74h82.52c3.17 0 5.74-2.58 5.74-5.74V19.41c0-3.17-2.58-5.74-5.74-5.74z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M71.03 83.78H34.97c-2.64 0-4.79-2.15-4.79-4.79V66.43c0-.44-.35-.79-.79-.79h-9.63c-2.64 0-4.79-2.15-4.79-4.79V26.01c0-2.64 2.15-4.79 4.79-4.79h66.47c2.64 0 4.79 2.15 4.79 4.79v34.84c0 2.64-2.15 4.79-4.79 4.79H76.6c-.44 0-.79.35-.79.79v12.56c0 2.64-2.15 4.79-4.79 4.79zM19.77 25.22c-.44 0-.79.35-.79.79v34.84c0 .44.35.79.79.79h9.63c2.64 0 4.79 2.15 4.79 4.79v12.56c0 .44.35.79.79.79h36.05c.44 0 .79-.35.79-.79V66.43c0-2.64 2.15-4.79 4.79-4.79h9.63c.44 0 .79-.35.79-.79V26.01c0-.44-.35-.79-.79-.79z" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M78.56 44.28c-1.1 0-2-.9-2-2V31.82c0-1.1.9-2 2-2s2 .9 2 2v10.46c0 1.1-.9 2-2 2" }),
        React.createElement("path", { fill: `url(#${id}:__b)`, d: "M61.52 44.28c-1.1 0-2-.9-2-2V31.82c0-1.1.9-2 2-2s2 .9 2 2v10.46c0 1.1-.9 2-2 2" }),
        React.createElement("path", { fill: `url(#${id}:__c)`, d: "M44.48 44.28c-1.1 0-2-.9-2-2V31.82c0-1.1.9-2 2-2s2 .9 2 2v10.46c0 1.1-.9 2-2 2" }),
        React.createElement("path", { fill: `url(#${id}:__d)`, d: "M27.44 44.28c-1.1 0-2-.9-2-2V31.82c0-1.1.9-2 2-2s2 .9 2 2v10.46c0 1.1-.9 2-2 2" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 78.594, x2: 78.594, y1: 29.82, y2: 44.28, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__b`, x1: 61.554, x2: 61.554, y1: 29.82, y2: 44.28, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__c`, x1: 44.514, x2: 44.514, y1: 29.82, y2: 44.28, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__d`, x1: 27.474, x2: 27.474, y1: 29.82, y2: 44.28, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgPort as default };
