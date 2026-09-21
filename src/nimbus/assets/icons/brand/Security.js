import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgSecurity = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgSecurity" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M53 105.08 15.03 94.16l-3.12-58.34h82.18L90.92 94.2zM18.87 91.1 53 100.91l34.08-9.78 2.79-51.32H16.13z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M83.05 39.38c-1.1 0-2-.9-2-2V21.49c0-9.09-7.39-16.48-16.48-16.48H41.44c-9.09 0-16.48 7.4-16.48 16.48v15.89c0 1.1-.9 2-2 2s-2-.9-2-2V21.49C20.95 10.19 30.14 1 41.44 1h23.13c11.29 0 20.48 9.19 20.48 20.48v15.89c0 1.1-.9 2-2 2z" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M59.75 53.67c0-3.73-3.02-6.75-6.75-6.75a6.747 6.747 0 0 0-3.85 12.29v15.84L53 76.31l3.85-1.26V59.21a6.74 6.74 0 0 0 2.9-5.54" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "m53.03 91.84-36.6-10.53a2 2 0 0 1-1.37-2.47c.3-1.06 1.41-1.68 2.47-1.37l35.5 10.21 35.45-10.17c1.06-.3 2.17.31 2.47 1.37s-.31 2.17-1.37 2.47z" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 57.753, x2: 41.99, y1: 72.057, y2: 64.816, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgSecurity as default };
