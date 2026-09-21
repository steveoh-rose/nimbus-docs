import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgRemoteService = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgRemoteService" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M75.45 83.63c-2.39 0-4.68-1.32-5.83-3.51l-9.71-18.45c-.12.6-.31 1.18-.57 1.75A7.63 7.63 0 0 1 55 67.41c-1.93.71-4.03.62-5.89-.24l-6.38-2.96a8.34 8.34 0 0 0-6.41-.27 12.3 12.3 0 0 1-9.47-.39l-2.52-1.17c-2.94-1.36-8.57-4.66-11.31-7.41-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0c2.07 2.08 7.01 5.15 10.15 6.6l2.52 1.17c2.03.94 4.31 1.04 6.41.26a12.3 12.3 0 0 1 9.47.39l6.38 2.96c.9.42 1.9.46 2.83.12s1.67-1.02 2.09-1.92.46-1.9.12-2.83a3.69 3.69 0 0 0-1.92-2.09l-16.08-7.45c-1-.46-1.44-1.65-.97-2.66.46-1 1.65-1.44 2.66-.97l21.26 9.85c.4.18.72.49.93.88l11.47 21.79a2.58 2.58 0 0 0 2.98 1.28c.7-.2 1.26-.66 1.59-1.31s.37-1.37.12-2.05L67.5 47.91a11.56 11.56 0 0 0-6.03-6.55L22.1 23.13c-1-.46-1.44-1.65-.97-2.66.46-1 1.65-1.44 2.66-.97l39.35 18.24c3.79 1.76 6.67 4.88 8.1 8.8L81.6 74.79c.63 1.71.51 3.62-.31 5.25a6.63 6.63 0 0 1-4.06 3.34c-.59.17-1.19.25-1.78.25" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M14.31 87.62c-1.1 0-2-.9-2-2V5.46c0-1.1.9-2 2-2s2 .9 2 2v80.16c0 1.1-.9 2-2 2" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M31.46 102.54H3.25c-1.1 0-2-.89-2-1.99L1 41.92c0-1.1.89-2 1.99-2.01 1.1 0 2 .89 2 1.99l.25 56.64h26.22c1.1 0 2 .9 2 2s-.9 2-2 2" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M14.31 50.05H3.25c-1.1 0-2-.9-2-2s.9-2 2-2h11.06c1.1 0 2 .9 2 2s-.9 2-2 2" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M94.29 101.19c-1.1 0-2-.9-2-2 0-4.33-3.52-7.85-7.85-7.85H63.57c-4.33 0-7.85 3.52-7.85 7.85 0 1.1-.9 2-2 2s-2-.9-2-2c0-6.53 5.32-11.85 11.85-11.85h20.87c6.53 0 11.85 5.32 11.85 11.85 0 1.1-.9 2-2 2" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M103 102.54H47.22c-1.1 0-2-.9-2-2s.9-2 2-2H103c1.1 0 2 .9 2 2s-.9 2-2 2" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 96.278, x2: 51.72, y1: 94.496, y2: 94.496, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgRemoteService as default };
