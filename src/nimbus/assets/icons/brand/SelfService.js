import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgSelfService = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgSelfService" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M66.95 105h-27.9c-10.16 0-18.42-8.26-18.42-18.42V62.9c0-5.16 4.2-9.37 9.37-9.37h2.13V9.16c0-4.5 3.66-8.16 8.16-8.16s8.16 3.66 8.16 8.16v32.71c0 1.1-.9 2-2 2s-2-.9-2-2V9.16c0-2.29-1.86-4.16-4.16-4.16s-4.16 1.86-4.16 4.16v48.37H30c-2.96 0-5.37 2.41-5.37 5.37v23.68c0 7.95 6.47 14.42 14.42 14.42h27.9c7.95 0 14.42-6.47 14.42-14.42V54.96c0-1.1.9-2 2-2s2 .9 2 2v31.62c0 10.16-8.26 18.42-18.42 18.42" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M58.75 65.22c-1.1 0-2-.9-2-2V39.14c0-2.29-1.86-4.16-4.16-4.16s-4.16 1.86-4.16 4.16v24.08c0 1.1-.9 2-2 2s-2-.9-2-2V39.14c0-4.5 3.66-8.16 8.16-8.16s8.16 3.66 8.16 8.16v24.08c0 1.1-.9 2-2 2" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M71.06 65.22c-1.1 0-2-.9-2-2V44.61c0-2.29-1.86-4.16-4.16-4.16s-4.16 1.86-4.16 4.16v18.61c0 1.1-.9 2-2 2s-2-.9-2-2V44.61c0-4.5 3.66-8.16 8.16-8.16s8.16 3.66 8.16 8.16v18.61c0 1.1-.9 2-2 2" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M83.37 86.74c-1.1 0-2-.9-2-2V52.03c0-2.29-1.86-4.16-4.16-4.16s-4.16 1.86-4.16 4.16v11.19c0 1.1-.9 2-2 2s-2-.9-2-2V52.03c0-4.5 3.66-8.16 8.16-8.16s8.16 3.66 8.16 8.16v32.72c0 1.1-.9 2-2 2zM34.13 65.22c-1.1 0-2-.9-2-2v-7.69c0-1.1.9-2 2-2s2 .9 2 2v7.69c0 1.1-.9 2-2 2" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M40.3 6c1.85 0 3.35 1.5 3.35 3.35v4.58h-6.7V9.35C36.95 7.5 38.45 6 40.3 6" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 42.659, x2: 37.131, y1: 12.782, y2: 8.112, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgSelfService as default };
