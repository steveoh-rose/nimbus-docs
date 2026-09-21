import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgMobile = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgMobile" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M72.85 105h-39.7c-4.67 0-8.47-3.8-8.47-8.47V9.47c0-4.67 3.8-8.47 8.47-8.47h39.71c4.67 0 8.47 3.8 8.47 8.47v87.06c0 4.67-3.8 8.47-8.47 8.47zM33.15 5c-2.46 0-4.47 2.01-4.47 4.47v87.06c0 2.46 2.01 4.47 4.47 4.47h39.71c2.46 0 4.47-2.01 4.47-4.47V9.47C77.33 7 75.32 5 72.86 5z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M67 11.99H39.91c-1.1 0-2-.9-2-2s.9-2 2-2H67c1.1 0 2 .9 2 2s-.9 2-2 2" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M73.02 53.85c-.51 0-1.02-.2-1.41-.59-4.94-4.93-11.49-7.65-18.46-7.65s-13.52 2.72-18.46 7.65c-.78.78-2.05.78-2.83 0s-.78-2.05 0-2.83c11.74-11.74 30.84-11.74 42.57 0a2.003 2.003 0 0 1-1.41 3.42" }),
        React.createElement("path", { fill: `url(#${id}:__b)`, d: "M66.69 62.24c-.51 0-1.02-.2-1.41-.59-6.69-6.69-17.58-6.69-24.27 0-.78.78-2.05.78-2.83 0s-.78-2.05 0-2.83c8.25-8.25 21.68-8.25 29.93 0a2.003 2.003 0 0 1-1.41 3.42z" }),
        React.createElement("path", { fill: `url(#${id}:__c)`, d: "M44.7 70.87a2.004 2.004 0 0 1-1.41-3.42c5.44-5.44 14.28-5.44 19.72 0 .78.78.78 2.05 0 2.83s-2.05.78-2.83 0c-3.88-3.88-10.19-3.88-14.06 0-.39.39-.9.59-1.41.59z" }),
        React.createElement("path", { fill: `url(#${id}:__d)`, d: "M53.46 89.88a7.63 7.63 0 1 0 0-15.26 7.63 7.63 0 0 0 0 15.26" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 75.004, x2: 31.275, y1: 47.941, y2: 47.941, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__b`, x1: 37.6, x2: 68.696, y1: 57.597, y2: 57.597, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__c`, x1: 63.59, x2: 42.704, y1: 67.245, y2: 67.245, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__d`, x1: 59.019, x2: 48.234, y1: 77.023, y2: 87.809, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgMobile as default };
