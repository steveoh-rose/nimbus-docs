import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgSaas = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgSaas" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M99.49 88.52H6.51C3.47 88.52 1 86.14 1 83.21V10.19c0-2.93 2.47-5.31 5.51-5.31h92.98c3.04 0 5.51 2.38 5.51 5.31v73.02c0 2.93-2.47 5.31-5.51 5.31M6.51 8.89C5.68 8.89 5 9.48 5 10.2v73.01c0 .72.68 1.31 1.51 1.31h92.98c.83 0 1.51-.59 1.51-1.31V10.19c0-.72-.68-1.31-1.51-1.31H6.51z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M53 101.11c-1.1 0-2-.9-2-2v-50.1c0-1.1.9-2 2-2s2 .9 2 2v50.11c0 1.1-.9 2-2 2z" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M53 58.34c5.479 0 9.92-4.441 9.92-9.92S58.479 38.5 53 38.5s-9.92 4.441-9.92 9.92 4.441 9.92 9.92 9.92" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M13.6 18.45a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36M23.87 18.45a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36M34.14 18.45a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 60.228, x2: 46.206, y1: 41.625, y2: 55.647, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgSaas as default };
