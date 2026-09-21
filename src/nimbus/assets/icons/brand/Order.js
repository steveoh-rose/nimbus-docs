import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgOrder = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgOrder" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "m23.25 105.47-11.91-8.66V11c0-5.523 4.477-10 10-10h63.32c5.523 0 10 4.477 10 10v85.82l-11.92 8.66-9.92-7.2-9.91 7.2-9.92-7.2-9.91 7.2-9.91-7.2-9.91 7.2zm49.57-12.15 9.92 7.2 7.92-5.75V11a6 6 0 0 0-6-6H21.34a6 6 0 0 0-6 6v83.78l7.91 5.75 9.91-7.2 9.91 7.2 9.91-7.2 9.92 7.2 9.91-7.2z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M81.26 32.83H22.44c-1.1 0-2-.9-2-2s.9-2 2-2h58.82c1.1 0 2 .9 2 2s-.9 2-2 2m0-12H22.44c-1.1 0-2-.9-2-2s.9-2 2-2h58.82c1.1 0 2 .9 2 2s-.9 2-2 2m0 36.01H22.44c-1.1 0-2-.9-2-2s.9-2 2-2h58.82c1.1 0 2 .9 2 2s-.9 2-2 2M45.24 68.85h-22.8c-1.1 0-2-.9-2-2s.9-2 2-2h22.8c1.1 0 2 .9 2 2s-.9 2-2 2m36.02-24.01H22.44c-1.1 0-2-.9-2-2s.9-2 2-2h58.82c1.1 0 2 .9 2 2s-.9 2-2 2" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M74.22 81.49a7.04 7.04 0 1 0 0-14.08 7.04 7.04 0 0 0 0 14.08" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 79.177, x2: 69.223, y1: 79.452, y2: 69.498, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgOrder as default };
