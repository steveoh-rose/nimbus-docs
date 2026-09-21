import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgDevice = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgDevice" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M72.85 105h-39.7c-4.67 0-8.47-3.8-8.47-8.47V9.47c0-4.67 3.8-8.47 8.47-8.47h39.71c4.67 0 8.47 3.8 8.47 8.47v87.06c0 4.67-3.8 8.47-8.47 8.47zM33.15 5c-2.46 0-4.47 2.01-4.47 4.47v87.06c0 2.46 2.01 4.47 4.47 4.47h39.71c2.46 0 4.47-2.01 4.47-4.47V9.47C77.33 7 75.32 5 72.86 5z" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M67 11.99H39.91c-1.1 0-2-.9-2-2s.9-2 2-2H67c1.1 0 2 .9 2 2s-.9 2-2 2" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 68.992, x2: 37.91, y1: 10.057, y2: 10.057, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgDevice as default };
