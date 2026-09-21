import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgIdea = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgIdea" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M67.89 81.85H38.57c-1.1 0-2-.9-2-2s.9-2 2-2h29.32c1.1 0 2 .9 2 2s-.9 2-2 2m0 9.75H38.57c-1.1 0-2-.9-2-2s.9-2 2-2h29.32c1.1 0 2 .9 2 2s-.9 2-2 2m0 9.75H38.57c-1.1 0-2-.9-2-2s.9-2 2-2h29.32c1.1 0 2 .9 2 2s-.9 2-2 2" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M32.19 78.09a2 2 0 0 1-1.09-.32c-11.61-7.54-18.54-20.3-18.54-34.16 0-22.46 18.28-40.74 40.75-40.74s40.75 18.28 40.75 40.75c0 13.85-6.93 26.62-18.54 34.16a2.003 2.003 0 0 1-2.18-3.36c10.47-6.8 16.72-18.31 16.72-30.8 0-20.26-16.49-36.75-36.75-36.75S16.56 23.35 16.56 43.62c0 12.49 6.25 24.01 16.72 30.8a2.002 2.002 0 0 1-1.09 3.68z" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "m53.79 43.04 5.12-18.48c.23-.84-.4-1.67-1.27-1.67H47.63c-.68 0-1.24.51-1.31 1.19l-1.95 19.18c-.08.78.53 1.45 1.31 1.45h2.45c.84 0 1.46.77 1.29 1.59l-3.87 18.65c-.17.82.46 1.59 1.29 1.59h1.25c.44 0 .86-.22 1.1-.59l12.7-19.18c.58-.88-.05-2.05-1.1-2.05h-5.72c-.87 0-1.5-.83-1.27-1.67z" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 46.935, x2: 68.473, y1: 29.351, y2: 38.108, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgIdea as default };
