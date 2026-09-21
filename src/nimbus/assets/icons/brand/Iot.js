import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgIot = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgIot" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M79.89 105H26.11c-5.1 0-9.26-4.15-9.26-9.26V10.26C16.86 5.15 21.01 1 26.11 1h33.08c4.11 0 8.08 1.73 10.88 4.74l15.09 16.23a14.84 14.84 0 0 1 3.98 10.12v63.65c0 5.1-4.15 9.26-9.26 9.26zM26.11 5c-2.9 0-5.26 2.36-5.26 5.26v85.48c0 2.9 2.36 5.26 5.26 5.26h53.77c2.9 0 5.26-2.36 5.26-5.26V32.09c0-2.75-1.03-5.38-2.91-7.4L67.14 8.46c-2.05-2.2-4.95-3.47-7.95-3.47H26.11z" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M73.02 53.85c-.51 0-1.02-.2-1.41-.59-10.18-10.18-26.74-10.18-36.92 0-.78.78-2.05.78-2.83 0s-.78-2.05 0-2.83c11.74-11.74 30.84-11.74 42.57 0a2.003 2.003 0 0 1-1.41 3.42" }),
        React.createElement("path", { fill: `url(#${id}:__b)`, d: "M66.69 62.24c-.51 0-1.02-.2-1.41-.59-6.69-6.69-17.58-6.69-24.27 0-.78.78-2.05.78-2.83 0s-.78-2.05 0-2.83c8.25-8.25 21.68-8.25 29.93 0a2.003 2.003 0 0 1-1.41 3.42z" }),
        React.createElement("path", { fill: `url(#${id}:__c)`, d: "M44.7 70.87a2.004 2.004 0 0 1-1.41-3.42c2.63-2.64 6.14-4.09 9.86-4.09s7.22 1.45 9.86 4.09c.78.78.78 2.05 0 2.83s-2.05.78-2.83 0a9.9 9.9 0 0 0-7.03-2.92c-2.65 0-5.15 1.04-7.03 2.92-.39.39-.9.59-1.41.59z" }),
        React.createElement("path", { fill: `url(#${id}:__d)`, d: "M53.46 89.75a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 75.004, x2: 31.275, y1: 47.941, y2: 47.941, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__b`, x1: 37.6, x2: 68.696, y1: 57.597, y2: 57.597, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__c`, x1: 63.59, x2: 42.704, y1: 67.24, y2: 67.24, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__d`, x1: 58.925, x2: 48.323, y1: 77.112, y2: 87.714, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgIot as default };
