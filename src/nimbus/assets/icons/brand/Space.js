import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgSpace = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgSpace" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M105 105H1V1h104zM5 101h96V5H5z" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, fillRule: "evenodd", d: "M33.85 34.24c.39.39.9.59 1.41.59h.02a2.004 2.004 0 0 0 1.41-3.42L26.32 21.04c-.78-.78-2.05-.78-2.83 0L13.12 31.41c-.78.78-.78 2.05 0 2.83s2.05.78 2.83 0l6.955-6.955V84.18h4V27.295z", clipRule: "evenodd" }),
        React.createElement("path", { fill: `url(#${id}:__b)`, fillRule: "evenodd", d: "M73.36 94.2c.328.22.715.339 1.11.34h.01c.51 0 1.02-.2 1.41-.59l10.37-10.37a1.983 1.983 0 0 0 0-2.82L75.89 70.39c-.78-.78-2.05-.78-2.83 0s-.78 2.05 0 2.83l6.953 6.953H22.935v4h57.072L73.06 91.12a2.004 2.004 0 0 0 .3 3.08", clipRule: "evenodd" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 25.115, x2: 25.115, y1: 20.455, y2: 84.18, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__b`, x1: 77.394, x2: 65.622, y1: 90.96, y2: 60.541, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgSpace as default };
