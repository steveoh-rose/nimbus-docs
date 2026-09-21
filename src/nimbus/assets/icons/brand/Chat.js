import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgChat = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgChat" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M14.97 89.76a3.31 3.31 0 0 1-3.33-3.32V75.92H8.72C4.46 75.92 1 72.45 1 68.2V17.51c0-4.26 3.47-7.72 7.72-7.72h74.57c4.26 0 7.72 3.47 7.72 7.72v50.68c0 4.26-3.47 7.72-7.72 7.72H30.18L17.31 88.78c-.64.64-1.48.97-2.35.97zM8.72 13.78C6.67 13.78 5 15.45 5 17.5v50.68c0 2.05 1.67 3.72 3.72 3.72h6.92v12.88L28.52 71.9h54.77c2.05 0 3.72-1.67 3.72-3.72V17.51c0-2.05-1.67-3.72-3.72-3.72H8.72z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M94.48 96.22c-.76 0-1.51-.3-2.08-.86l-9-8.99H45.83a6.09 6.09 0 0 1-6.08-6.08v-.89c0-1.1.9-2 2-2s2 .9 2 2v.89c0 1.14.93 2.08 2.08 2.08h39.23l8.36 8.36v-8.36h5.5c1.14 0 2.08-.93 2.08-2.08V44.2c0-1.14-.93-2.08-2.08-2.08h-3.57c-1.1 0-2-.9-2-2s.9-2 2-2h3.57A6.09 6.09 0 0 1 105 44.2v36.08a6.09 6.09 0 0 1-6.08 6.08h-1.5v6.92c0 1.19-.71 2.26-1.82 2.72-.37.15-.75.23-1.13.23z" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M23.47 50.18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15" }),
        React.createElement("path", { fill: `url(#${id}:__b)`, d: "M46.01 50.18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15" }),
        React.createElement("path", { fill: `url(#${id}:__c)`, d: "M68.55 50.18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 28.935, x2: 18.333, y1: 37.542, y2: 48.144, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__b`, x1: 51.475, x2: 40.873, y1: 37.542, y2: 48.144, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__c`, x1: 74.015, x2: 63.413, y1: 37.542, y2: 48.144, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgChat as default };
