import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgBandwidth = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgBandwidth" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M103 49.02H3c-1.1 0-2-.9-2-2s.9-2 2-2h94.94L73.69 22.28c-.81-.76-.85-2.02-.09-2.83.75-.81 2.02-.85 2.83-.09l27.94 26.2a1.989 1.989 0 0 1-.246 3.108 2 2 0 0 1-1.124.342zM30.94 87.18c-.49 0-.98-.18-1.37-.54L1.63 60.44A1.994 1.994 0 0 1 3 56.99h100c1.1 0 2 .9 2 2s-.9 2-2 2H8.06l24.25 22.74c.81.76.85 2.02.09 2.83-.39.42-.93.63-1.46.63z" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M30.94 92.81a7.63 7.63 0 1 0 0-15.26 7.63 7.63 0 0 0 0 15.26" }),
        React.createElement("path", { fill: `url(#${id}:__b)`, d: "M75.06 28.45a7.63 7.63 0 1 0 0-15.26 7.63 7.63 0 0 0 0 15.26" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 36.499, x2: 25.714, y1: 79.953, y2: 90.739, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__b`, x1: 80.619, x2: 69.834, y1: 15.593, y2: 26.379, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgBandwidth as default };
