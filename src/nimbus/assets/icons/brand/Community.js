import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgCommunity = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgCommunity" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M80.51 41.28c-.51 0-1.02-.2-1.41-.59L65.88 27.48c-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0l13.22 13.21a2.003 2.003 0 0 1-1.41 3.42zM39.59 82.1c-.51 0-1.02-.2-1.41-.59L24.5 67.84c-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0l13.68 13.67a2.004 2.004 0 0 1-1.41 3.42zM25.92 41.52a2.004 2.004 0 0 1-1.41-3.42l13.44-13.44c.78-.78 2.05-.78 2.83 0s.78 2.05 0 2.83L27.34 40.93c-.39.39-.9.59-1.41.59zM67.07 82.1a2.004 2.004 0 0 1-1.41-3.42L79.1 65.24c.78-.78 2.05-.78 2.83 0s.78 2.05 0 2.83L68.49 81.51c-.39.39-.9.59-1.41.59z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M18.41 70.39C8.81 70.39 1 62.58 1 52.98s7.81-17.41 17.41-17.41 17.41 7.81 17.41 17.41-7.81 17.41-17.41 17.41m0-30.82C11.01 39.57 5 45.59 5 52.98s6.02 13.41 13.41 13.41 13.41-6.02 13.41-13.41-6.02-13.41-13.41-13.41" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M23.38 46.58a4.94 4.94 0 1 0-9.88 0v4.5a4.94 4.94 0 1 0 9.88 0z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M26.23 67.44c-1.1 0-2-.9-2-2v-1.77c0-1.75-1.42-3.17-3.17-3.17h-5.3c-1.75 0-3.17 1.42-3.17 3.17v1.74c0 1.1-.9 2-2 2s-2-.9-2-2v-1.74c0-3.95 3.22-7.17 7.17-7.17h5.3c3.95 0 7.17 3.22 7.17 7.17v1.77c0 1.1-.9 2-2 2m27.1-30.48c-9.6 0-17.41-7.81-17.41-17.41S43.73 2.13 53.33 2.13s17.41 7.81 17.41 17.41-7.81 17.41-17.41 17.41zm0-30.82c-7.39 0-13.41 6.02-13.41 13.41s6.02 13.41 13.41 13.41 13.41-6.02 13.41-13.41S60.72 6.14 53.33 6.14" }),
        React.createElement("path", { fill: `url(#${id}:__b)`, d: "M58.3 13.15a4.94 4.94 0 1 0-9.88 0v4.5a4.94 4.94 0 1 0 9.88 0z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M61.15 34.01c-1.1 0-2-.9-2-2v-1.77c0-1.75-1.42-3.17-3.17-3.17h-5.3c-1.75 0-3.17 1.42-3.17 3.17v1.74c0 1.1-.9 2-2 2s-2-.9-2-2v-1.74c0-3.95 3.22-7.17 7.17-7.17h5.3c3.95 0 7.17 3.22 7.17 7.17v1.77c0 1.1-.9 2-2 2m-7.82 70.48c-9.6 0-17.41-7.81-17.41-17.41s7.81-17.41 17.41-17.41 17.41 7.81 17.41 17.41-7.81 17.41-17.41 17.41m0-30.82c-7.39 0-13.41 6.02-13.41 13.41s6.02 13.41 13.41 13.41 13.41-6.02 13.41-13.41-6.02-13.41-13.41-13.41" }),
        React.createElement("path", { fill: `url(#${id}:__c)`, d: "M58.3 80.69a4.94 4.94 0 1 0-9.88 0v4.5a4.94 4.94 0 1 0 9.88 0z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M61.15 101.55c-1.1 0-2-.9-2-2v-1.77c0-1.75-1.42-3.17-3.17-3.17h-5.3c-1.75 0-3.17 1.42-3.17 3.17v1.74c0 1.1-.9 2-2 2s-2-.9-2-2v-1.74c0-3.95 3.22-7.17 7.17-7.17h5.3c3.95 0 7.17 3.22 7.17 7.17v1.77c0 1.1-.9 2-2 2m26.44-31.16c-9.6 0-17.41-7.81-17.41-17.41s7.81-17.41 17.41-17.41S105 43.38 105 52.98s-7.81 17.41-17.41 17.41m0-30.82c-7.4 0-13.41 6.02-13.41 13.41s6.02 13.41 13.41 13.41S101 60.37 101 52.98s-6.02-13.41-13.41-13.41" }),
        React.createElement("path", { fill: `url(#${id}:__d)`, d: "M87.62 56.02c-2.73 0-4.94-2.21-4.94-4.94v-4.5c0-2.73 2.21-4.94 4.94-4.94s4.94 2.21 4.94 4.36v4.5c0 3.31-2.21 5.52-4.94 5.52" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M95.41 67.44c-1.1 0-2-.9-2-2v-1.77c0-1.75-1.42-3.17-3.17-3.17h-5.3c-1.75 0-3.17 1.42-3.17 3.17v1.74c0 1.1-.9 2-2 2s-2-.9-2-2v-1.74c0-3.95 3.22-7.17 7.17-7.17h5.3c3.95 0 7.17 3.22 7.17 7.17v1.77c0 1.1-.9 2-2 2" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 14.931, x2: 24.421, y1: 43.771, y2: 50.291, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][1] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][0] })),
            React.createElement("linearGradient", { id: `${id}:__b`, x1: 49.851, x2: 59.341, y1: 10.341, y2: 16.861, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][1] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][0] })),
            React.createElement("linearGradient", { id: `${id}:__c`, x1: 49.851, x2: 59.341, y1: 77.881, y2: 84.401, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][1] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][0] })),
            React.createElement("linearGradient", { id: `${id}:__d`, x1: 84.111, x2: 93.601, y1: 43.771, y2: 50.291, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][1] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][0] })))));
};

export { SvgCommunity as default };
