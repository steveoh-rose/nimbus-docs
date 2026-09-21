import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgProduct = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgProduct" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], fillRule: "evenodd", d: "M88 12H18a6 6 0 0 0-6 6v70a6 6 0 0 0 6 6h70a6 6 0 0 0 6-6V18a6 6 0 0 0-6-6M18 8C12.477 8 8 12.477 8 18v70c0 5.523 4.477 10 10 10h70c5.523 0 10-4.477 10-10V18c0-5.523-4.477-10-10-10z", clipRule: "evenodd" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M41 12h24v32l-12-8-12 8z" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 61.743, x2: 40.032, y1: 17.04, y2: 33.324, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgProduct as default };
