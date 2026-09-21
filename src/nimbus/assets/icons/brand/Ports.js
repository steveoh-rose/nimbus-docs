import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgPorts = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgPorts" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M31.09 41.8H1V13.35h30.09V41.8M5 37.8h22.09V17.35H5V37.8m63.04 4H37.95V13.35h30.09V41.8m-26.09-4h22.09V17.35H41.95V37.8m30.77 54.85h-39.2V64.21h39.2zm-35.2-4h31.2V68.21h-31.2zM105 41.8H74.91V13.35H105V41.8m-26.09-4H101V17.35H78.91V37.8" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M53.12 68.2c-1.1 0-2-.9-2-2V39.8c0-1.1.9-2 2-2s2 .9 2 2v26.4c0 1.1-.9 2-2 2" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M61.85 56.52H14.04V40.34c0-1.1.9-2 2-2s2 .9 2 2v12.18h43.81c1.1 0 2 .9 2 2s-.9 2-2 2m30.11 0H77.3c-1.1 0-2-.9-2-2s.9-2 2-2h10.66V40.34c0-1.1.9-2 2-2s2 .9 2 2z" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M77.3 62.15a7.63 7.63 0 1 0 0-15.26 7.63 7.63 0 0 0 0 15.26" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 82.859, x2: 72.074, y1: 49.293, y2: 60.079, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgPorts as default };
