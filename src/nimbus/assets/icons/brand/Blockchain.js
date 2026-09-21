import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgBlockchain = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgBlockchain" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M40.26 46.22H7.04c-3.31 0-6-2.69-6-6V7c0-3.31 2.69-6 6-6h33.22c3.31 0 6 2.69 6 6v33.22c0 3.31-2.69 6-6 6M7.04 5c-1.1 0-2 .9-2 2v33.22c0 1.1.9 2 2 2h33.22c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm91.92 41.22H65.74c-3.31 0-6-2.69-6-6V7c0-3.31 2.69-6 6-6h33.22c3.31 0 6 2.69 6 6v33.22c0 3.31-2.69 6-6 6M65.74 5c-1.1 0-2 .9-2 2v33.22c0 1.1.9 2 2 2h33.22c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM40.26 105H7.04c-3.31 0-6-2.69-6-6V65.78c0-3.31 2.69-6 6-6h33.22c3.31 0 6 2.69 6 6V99c0 3.31-2.69 6-6 6M7.04 63.78c-1.1 0-2 .9-2 2V99c0 1.1.9 2 2 2h33.22c1.1 0 2-.9 2-2V65.78c0-1.1-.9-2-2-2zM98.96 105H65.74c-3.31 0-6-2.69-6-6V65.78c0-3.31 2.69-6 6-6h33.22c3.31 0 6 2.69 6 6V99c0 3.31-2.69 6-6 6M65.74 63.78c-1.1 0-2 .9-2 2V99c0 1.1.9 2 2 2h33.22c1.1 0 2-.9 2-2V65.78c0-1.1-.9-2-2-2z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M61.74 25.61H29.07c-1.1 0-2-.9-2-2s.9-2 2-2h32.67c1.1 0 2 .9 2 2s-.9 2-2 2m20.61 38.17c-1.1 0-2-.9-2-2V29.03c0-1.1.9-2 2-2s2 .9 2 2v32.75c0 1.1-.9 2-2 2m-5.42 20.61H44.26c-1.1 0-2-.9-2-2s.9-2 2-2h32.67c1.1 0 2 .9 2 2s-.9 2-2 2m-53.28-5.42c-1.1 0-2-.9-2-2V44.22c0-1.1.9-2 2-2s2 .9 2 2v32.75c0 1.1-.9 2-2 2" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M82.35 31.24a7.63 7.63 0 1 0 0-15.26 7.63 7.63 0 0 0 0 15.26" }),
        React.createElement("path", { fill: `url(#${id}:__b)`, d: "M27.66 31.24a7.63 7.63 0 1 0 0-15.26 7.63 7.63 0 0 0 0 15.26" }),
        React.createElement("path", { fill: `url(#${id}:__c)`, d: "M23.65 87.94a7.63 7.63 0 1 0 0-15.26 7.63 7.63 0 0 0 0 15.26" }),
        React.createElement("path", { fill: `url(#${id}:__d)`, d: "M82.35 87.94a7.63 7.63 0 1 0 0-15.26 7.63 7.63 0 0 0 0 15.26" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 87.909, x2: 77.124, y1: 18.383, y2: 29.169, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__b`, x1: 33.219, x2: 22.434, y1: 18.383, y2: 29.169, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__c`, x1: 29.209, x2: 18.424, y1: 75.083, y2: 85.869, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__d`, x1: 87.909, x2: 77.124, y1: 75.083, y2: 85.869, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgBlockchain as default };
