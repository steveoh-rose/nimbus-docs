import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgTraining = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgTraining" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], fillRule: "evenodd", d: "M94.87 68.659c0 1.1.9 2 2 2s2-.9 2-2v-23.48a5.9 5.9 0 0 0-3.38-5.32l-44.62-20.96c-.99-.47-2.13-.46-3.12 0l-43.64 20.5c-1.3.61-2.11 1.88-2.11 3.32s.81 2.71 2.11 3.32l11.79 5.538v26.67c0 8.71 14.553 15.54 33.125 15.54s33.125-6.83 33.125-15.54V51.84l7.41-3.481a2 2 0 1 0-1.7-3.62l-37.55 17.64c-.64.3-1.37.3-2.01 0L6.45 42.719l42.86-20.13 44.48 20.89c.66.31 1.08.97 1.08 1.7zM78.141 53.723 52.01 65.999c-1.72.81-3.69.81-5.41 0L19.91 53.46v24.786c0 5.46 11.956 11.54 29.115 11.54 17.16 0 29.116-6.08 29.116-11.54V53.723", clipRule: "evenodd" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M96.87 75.788a7.13 7.13 0 1 0 0-14.26 7.13 7.13 0 0 0 0 14.26" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 102.065, x2: 91.987, y1: 63.774, y2: 73.853, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgTraining as default };
