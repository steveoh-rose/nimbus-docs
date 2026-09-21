import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgRouter = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgRouter" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M98.84 83.1H14.37c-3.4 0-6.16-2.76-6.16-6.16V57.46c0-3.4 2.76-6.16 6.16-6.16h84.47c3.4 0 6.16 2.76 6.16 6.16v19.48c0 3.4-2.76 6.16-6.16 6.16M14.37 55.3c-1.19 0-2.16.97-2.16 2.16v19.48c0 1.19.97 2.16 2.16 2.16h84.47c1.19 0 2.16-.97 2.16-2.16V57.46c0-1.19-.97-2.16-2.16-2.16z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M96.47 90.64H16.74V79.1h79.73zm-75.73-4h71.73V83.1H20.74zm24.42-41.16a2.004 2.004 0 0 1-1.41-3.42c6.42-6.42 6.42-16.87 0-23.3-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0c7.98 7.98 7.98 20.97 0 28.95-.39.39-.9.59-1.41.59z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M36.84 40.56a2.004 2.004 0 0 1-1.41-3.42c3.71-3.71 3.71-9.75 0-13.45-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0c5.27 5.27 5.27 13.84 0 19.11-.39.39-.9.59-1.41.59zM8.41 45.48c-.51 0-1.02-.2-1.41-.59-7.98-7.97-7.98-20.96 0-28.94.78-.78 2.05-.78 2.83 0s.78 2.05 0 2.83c-6.42 6.42-6.42 16.87 0 23.3a2.004 2.004 0 0 1-1.41 3.42z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M16.74 40.56c-.51 0-1.02-.2-1.41-.59-5.27-5.27-5.27-13.84 0-19.11.78-.78 2.05-.78 2.83 0s.78 2.05 0 2.83c-3.71 3.71-3.71 9.75 0 13.45a2.003 2.003 0 0 1-1.41 3.42zM26.79 55.3c-1.1 0-2-.9-2-2V30.42c0-1.1.9-2 2-2s2 .9 2 2V53.3c0 1.1-.9 2-2 2" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M26.79 38.05a7.63 7.63 0 1 0 0-15.26 7.63 7.63 0 0 0 0 15.26" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M79.57 69.88a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36M89.84 69.88a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 32.349, x2: 21.564, y1: 25.193, y2: 35.979, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgRouter as default };
