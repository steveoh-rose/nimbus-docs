import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgVideo = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgVideo" }, props),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M41.05 66.62v-9.96c0-2.59 2.8-4.2 5.04-2.91l8.63 4.98 8.63 4.98c2.24 1.29 2.24 4.53 0 5.82l-8.63 4.98-8.63 4.98c-2.24 1.29-5.04-.32-5.04-2.91z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M97.18 100.86H8.36c-4.19 0-7.59-3.41-7.59-7.59V25.3h41.11c2.54 0 4.9 1.37 6.16 3.58l3.33 5.83c.55.96 1.58 1.56 2.69 1.56h50.71v57c0 4.19-3.41 7.59-7.59 7.59M4.77 29.3v63.97c0 1.98 1.61 3.59 3.59 3.59h88.82c1.98 0 3.59-1.61 3.59-3.59v-53H54.06c-2.54 0-4.9-1.37-6.16-3.58l-3.33-5.83a3.11 3.11 0 0 0-2.69-1.56z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M102.77 32.2H60.13c-2.54 0-4.9-1.37-6.16-3.57l-3.33-5.83a3.11 3.11 0 0 0-2.69-1.56H2.77c-1.1 0-2-.9-2-2s.9-2 2-2h45.18c2.54 0 4.9 1.37 6.16 3.57l3.33 5.83c.55.96 1.58 1.56 2.69 1.56h42.64c1.1 0 2 .9 2 2s-.9 2-2 2" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M102.77 23.8H66.2c-2.54 0-4.9-1.37-6.16-3.58l-3.33-5.83a3.11 3.11 0 0 0-2.69-1.56H2.77c-1.1 0-2-.9-2-2s.9-2 2-2h51.25c2.54 0 4.9 1.37 6.16 3.58l3.33 5.83c.55.96 1.58 1.56 2.69 1.56h36.57c1.1 0 2 .9 2 2s-.9 2-2 2M14.98 38.87a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36M25.25 38.87a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36M35.51 38.87a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 41.054, x2: 65.03, y1: 67.065, y2: 67.065, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgVideo as default };
