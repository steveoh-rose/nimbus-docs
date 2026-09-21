import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgSwitch = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgSwitch" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M97.22 68.81H9.24c-4.51 0-8.17-3.67-8.17-8.17V23.66c0-4.51 3.67-8.17 8.17-8.17h87.98c4.51 0 8.17 3.67 8.17 8.17v36.97c0 4.51-3.67 8.17-8.17 8.17zM9.24 19.82c-2.12 0-3.84 1.72-3.84 3.84v36.97c0 2.12 1.72 3.84 3.84 3.84h87.98c2.12 0 3.84-1.72 3.84-3.84V23.66c0-2.12-1.72-3.84-3.84-3.84z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M94.36 77.85H12.1c-2.27 0-4.11-2-4.11-4.46v-5.64c0-1.1.9-2 2-2s2 .9 2 2v5.64c0 .29.13.45.18.48h82.19s.11-.19.11-.48v-5.64c0-1.1.9-2 2-2s2 .9 2 2v5.64c0 2.46-1.84 4.46-4.11 4.46" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, fillRule: "evenodd", d: "M17 49.81h11.16c.83 0 1.5-.67 1.5-1.5v-1.49h2.97c.83 0 1.5-.67 1.5-1.5v-9.34c0-.83-.67-1.5-1.5-1.5h-20.1c-.83 0-1.5.67-1.5 1.5v9.34c0 .83.67 1.5 1.5 1.5h2.97v1.49c0 .83.67 1.5 1.5 1.5", clipRule: "evenodd" }),
        React.createElement("path", { fill: `url(#${id}:__b)`, fillRule: "evenodd", d: "M47.64 49.81H58.8c.83 0 1.5-.67 1.5-1.5v-1.49h2.97c.83 0 1.5-.67 1.5-1.5v-9.34c0-.83-.67-1.5-1.5-1.5h-20.1c-.83 0-1.5.67-1.5 1.5v9.34c0 .83.67 1.5 1.5 1.5h2.97v1.49c0 .83.67 1.5 1.5 1.5", clipRule: "evenodd" }),
        React.createElement("path", { fill: `url(#${id}:__c)`, fillRule: "evenodd", d: "M78.29 49.81h11.16c.83 0 1.5-.67 1.5-1.5v-1.49h2.97c.83 0 1.5-.67 1.5-1.5v-9.34c0-.83-.67-1.5-1.5-1.5h-20.1c-.83 0-1.5.67-1.5 1.5v9.34c0 .83.67 1.5 1.5 1.5h2.97v1.49c0 .83.67 1.5 1.5 1.5", clipRule: "evenodd" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M13.83 60.44a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36M24.1 60.44a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 30.713, x2: 20.726, y1: 47.591, y2: 32.543, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__b`, x1: 61.353, x2: 51.366, y1: 47.591, y2: 32.543, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__c`, x1: 92.003, x2: 82.016, y1: 47.591, y2: 32.543, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgSwitch as default };
