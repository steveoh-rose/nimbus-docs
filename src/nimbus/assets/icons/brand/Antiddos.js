import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgAntiddos = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgAntiddos" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M53 105.43 12.49 81.49 9.23 20.44 53 .71l43.77 19.73-3.32 61.1L53 105.44zm-36.45-26.4L53 100.57l36.4-21.5 3.04-56L53 5.29 13.56 23.07z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M53.03 91.3 13.49 67.92a2.1 2.1 0 0 1-.74-2.86 2.1 2.1 0 0 1 2.86-.74l37.42 22.11 37.36-22.07c1-.59 2.28-.26 2.86.74.59.99.26 2.28-.74 2.86L53.02 91.29z" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "m57.64 44.51 5.12-18.48c.23-.84-.4-1.67-1.27-1.67H51.48c-.68 0-1.24.51-1.31 1.19l-1.95 19.18c-.08.78.53 1.45 1.31 1.45h2.45c.84 0 1.46.77 1.29 1.59L49.4 66.42c-.17.82.46 1.59 1.29 1.59h1.25c.44 0 .86-.22 1.1-.59l12.7-19.18c.58-.88-.05-2.05-1.1-2.05h-5.72c-.87 0-1.5-.83-1.27-1.67z" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 50.785, x2: 72.323, y1: 30.821, y2: 39.578, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgAntiddos as default };
