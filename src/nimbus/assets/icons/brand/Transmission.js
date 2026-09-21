import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgTransmission = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgTransmission" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M59.34 52.83c-1.1 0-2-.9-2-2V23.49c0-1.1.9-2 2-2s2 .9 2 2v27.34c0 1.1-.9 2-2 2m12.68 0c-1.1 0-2-.9-2-2V34.75c0-1.1.9-2 2-2s2 .9 2 2v16.08c0 1.1-.9 2-2 2M37.24 38.87a4.05 4.05 0 1 0 0-8.1 4.05 4.05 0 0 0 0 8.1" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M59.34 25.37a4.05 4.05 0 1 0 0-8.1 4.05 4.05 0 0 0 0 8.1M72.02 36.54a4.05 4.05 0 1 0 0-8.1 4.05 4.05 0 0 0 0 8.1M46.66 52.83c-1.1 0-2-.9-2-2V18.48c0-1.1.9-2 2-2s2 .9 2 2v32.35c0 1.1-.9 2-2 2" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M46.66 18.36a7.68 7.68 0 1 0 0-15.36 7.68 7.68 0 0 0 0 15.36" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M75.39 103H30.61c-4.88 0-8.86-3.97-8.86-8.86V62.11h62.49v32.03c0 4.88-3.97 8.86-8.86 8.86zM25.75 66.11v28.03c0 2.68 2.18 4.86 4.86 4.86h44.77c2.68 0 4.86-2.18 4.86-4.86V66.11zm11.49-13.28c-1.1 0-2-.9-2-2V34.82c0-1.1.9-2 2-2s2 .9 2 2v16.01c0 1.1-.9 2-2 2" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M77.91 66.11c-1.1 0-2-.9-2-2v-8.25c0-1.03-.83-1.86-1.86-1.86H31.97c-1.03 0-1.86.83-1.86 1.86v8.25c0 1.1-.9 2-2 2s-2-.9-2-2v-8.25c0-3.23 2.63-5.86 5.86-5.86h42.08c3.23 0 5.86 2.63 5.86 5.86v8.25c0 1.1-.9 2-2 2" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 52.256, x2: 41.4, y1: 5.419, y2: 16.275, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgTransmission as default };
