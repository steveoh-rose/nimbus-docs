import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgWebinar = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgWebinar" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M99.49 82.32H6.51c-3.04 0-5.51-2.29-5.51-5.1V14.76c0-2.81 2.47-5.1 5.51-5.1h92.98c3.04 0 5.51 2.29 5.51 5.1v62.47c0 2.81-2.47 5.1-5.51 5.1zM6.51 13.66c-.82 0-1.51.5-1.51 1.1v62.47c0 .6.69 1.1 1.51 1.1h92.98c.82 0 1.51-.5 1.51-1.1V14.76c0-.6-.69-1.1-1.51-1.1z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M103 72.42H3c-1.1 0-2-.9-2-2s.9-2 2-2h100c1.1 0 2 .9 2 2s-.9 2-2 2M77.45 96.34h-48.9c-1.1 0-2-.9-2-2s.9-2 2-2h48.89c1.1 0 2 .9 2 2s-.9 2-2 2z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M41.23 96.34c-1.1 0-2-.9-2-2v-13.2c0-1.1.9-2 2-2s2 .9 2 2v13.2c0 1.1-.9 2-2 2m23.54 0c-1.1 0-2-.9-2-2v-13.2c0-1.1.9-2 2-2s2 .9 2 2v13.2c0 1.1-.9 2-2 2" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M42.53 41.04v-8.7c0-2.26 2.45-3.67 4.4-2.54l7.54 4.35 7.54 4.35c1.96 1.13 1.96 3.95 0 5.08l-7.54 4.35-7.54 4.35c-1.96 1.13-4.4-.28-4.4-2.54z" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 42.533, x2: 63.48, y1: 41.429, y2: 41.429, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgWebinar as default };
