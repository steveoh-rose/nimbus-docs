import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgBrandPartnership = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgBrandPartnership" }, props),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M37.12 63.05a6.18 6.18 0 1 0 0-12.36 6.18 6.18 0 0 0 0 12.36" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M47.73 83.69c-1.1 0-2-.9-2-2v-9.32c0-1.51-1.23-2.74-2.74-2.74H31.27c-1.51 0-2.74 1.23-2.74 2.74v9.32c0 1.1-.9 2-2 2s-2-.9-2-2v-9.32c0-3.72 3.03-6.74 6.74-6.74h11.72c3.72 0 6.74 3.03 6.74 6.74v9.32c0 1.1-.9 2-2 2" }),
        React.createElement("path", { fill: `url(#${id}:__b)`, d: "M68.94 63.44a6.18 6.18 0 1 0 0-12.36 6.18 6.18 0 0 0 0 12.36" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M79.54 84.08c-1.1 0-2-.9-2-2v-9.32c0-1.51-1.23-2.74-2.74-2.74H63.08c-1.51 0-2.74 1.23-2.74 2.74v9.32c0 1.1-.9 2-2 2s-2-.9-2-2v-9.32c0-3.72 3.03-6.74 6.74-6.74H74.8c3.72 0 6.74 3.03 6.74 6.74v9.32c0 1.1-.9 2-2 2" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M97.18 100.86H8.36c-4.19 0-7.59-3.41-7.59-7.59V25.3h41.11c2.54 0 4.9 1.37 6.16 3.58l3.33 5.83c.55.96 1.58 1.56 2.69 1.56h50.71v57c0 4.19-3.41 7.59-7.59 7.59M4.77 29.3v63.97c0 1.98 1.61 3.59 3.59 3.59h88.82c1.98 0 3.59-1.61 3.59-3.59v-53H54.06c-2.54 0-4.9-1.37-6.16-3.58l-3.33-5.83a3.11 3.11 0 0 0-2.69-1.56z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M102.77 32.2H60.13c-2.54 0-4.9-1.37-6.16-3.58l-3.33-5.83a3.11 3.11 0 0 0-2.69-1.56H2.77c-1.1 0-2-.9-2-2s.9-2 2-2h45.18c2.54 0 4.9 1.37 6.16 3.58l3.33 5.83c.55.96 1.58 1.56 2.69 1.56h42.64c1.1 0 2 .9 2 2s-.9 2-2 2" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M102.77 23.8H66.2c-2.54 0-4.9-1.37-6.16-3.58l-3.33-5.83a3.11 3.11 0 0 0-2.69-1.56H2.77c-1.1 0-2-.9-2-2s.9-2 2-2h51.25c2.54 0 4.9 1.37 6.16 3.58l3.33 5.83c.55.96 1.58 1.56 2.69 1.56h36.57c1.1 0 2 .9 2 2s-.9 2-2 2M14.98 38.87a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36M25.25 38.87a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36M35.51 38.87a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 41.623, x2: 32.887, y1: 52.637, y2: 61.372, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__b`, x1: 75.117, x2: 62.76, y1: 57.466, y2: 57.466, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgBrandPartnership as default };
