import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgFilter = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgFilter" }, props),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M72.875 33.125H35.334l15.458 23.408v25.175l6.625-4.416V56.533z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], fillRule: "evenodd", d: "M5.15 7h95.577L65.5 60.103V81.47l-23 18.158V60.133zm7.7 4L46.5 58.867v32.506l15-11.842V58.897L93.273 11z", clipRule: "evenodd" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 54.42, x2: 54.42, y1: 81.708, y2: 33.125, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgFilter as default };
