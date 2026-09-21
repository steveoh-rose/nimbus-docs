import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgEfficiency = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgEfficiency" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M49.59 103.41c-25.92 0-47-21.08-47-47s21.09-47 47-47c1.1 0 2 .9 2 2s-.9 2-2 2c-23.71 0-43 19.29-43 43s19.29 43 43 43 43-19.29 43-43c0-1.1.9-2 2-2s2 .9 2 2c0 25.92-21.08 47-47 47" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M101.41 63.89c-.51 0-1.02-.2-1.41-.59l-5.4-5.4-5.4 5.4c-.78.78-2.05.78-2.83 0s-.78-2.05 0-2.83l6.81-6.81c.78-.78 2.05-.78 2.83 0l6.81 6.81a2.005 2.005 0 0 1-1.41 3.42" }),
        React.createElement("path", { fill: `url(#${id}:__b)`, d: "M43.96 20.22a2.004 2.004 0 0 1-1.41-3.42l5.4-5.4-5.4-5.4c-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0l6.81 6.81a1.984 1.984 0 0 1 0 2.82l-6.81 6.81c-.39.39-.9.59-1.41.59z" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 103.401, x2: 85.785, y1: 58.663, y2: 58.663, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__b`, x1: 52.776, x2: 41.964, y1: 11.696, y2: 11.696, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgEfficiency as default };
