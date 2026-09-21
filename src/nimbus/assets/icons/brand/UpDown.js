import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgUpDown = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgUpDown" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M26.69 103c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2s2 .9 2 2v96c0 1.1-.9 2-2 2m54.25 0c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2s2 .9 2 2v96c0 1.1-.9 2-2 2" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M41.72 22.03c-.51 0-1.02-.2-1.41-.59L26.69 7.83 13.08 21.44c-.78.78-2.05.78-2.83 0s-.78-2.05 0-2.83L26.69 2.17l16.44 16.44a2.004 2.004 0 0 1-1.41 3.42" }),
        React.createElement("path", { fill: `url(#${id}:__b)`, d: "M80.94 103.83 64.5 87.39c-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0l13.61 13.61 13.61-13.61c.78-.78 2.05-.78 2.83 0s.78 2.05 0 2.83z" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 43.707, x2: 9.665, y1: 12.431, y2: 12.431, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__b`, x1: 97.956, x2: 63.915, y1: 94.233, y2: 94.233, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgUpDown as default };
