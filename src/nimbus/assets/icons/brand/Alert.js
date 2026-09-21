import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgAlert = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgAlert" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M84.43 85.76c-1.1 0-2-.9-2-2v-40.7c0-16.23-13.2-29.43-29.43-29.43s-29.43 13.2-29.43 29.43v40.69c0 1.1-.9 2-2 2s-2-.9-2-2V43.06c0-18.43 15-33.43 33.43-33.43s33.43 15 33.43 33.43v40.69c0 1.1-.9 2-2 2z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M90.5 85.76h-75c-1.1 0-2-.9-2-2s.9-2 2-2h75c1.1 0 2 .9 2 2s-.9 2-2 2M53 13.64c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2s2 .9 2 2v8.64c0 1.1-.9 2-2 2" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M53 103a7.44 7.44 0 1 0 0-14.88A7.44 7.44 0 0 0 53 103" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M69.42 45.35c-1.1 0-2-.9-2-2 0-7.89-6.42-14.31-14.31-14.31-1.1 0-2-.9-2-2s.9-2 2-2c10.1 0 18.31 8.21 18.31 18.31 0 1.1-.9 2-2 2" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 58.421, x2: 47.904, y1: 90.464, y2: 100.98, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgAlert as default };
