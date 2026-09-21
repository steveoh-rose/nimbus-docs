import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgBars = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgBars" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M17.55 105c-1.1 0-2-.9-2-2V68.28c0-1.1.9-2 2-2s2 .9 2 2V103c0 1.1-.9 2-2 2m17.72 0c-1.1 0-2-.9-2-2V56.17c0-1.1.9-2 2-2s2 .9 2 2V103c0 1.1-.9 2-2 2M53 105c-1.1 0-2-.9-2-2V42.67c0-1.1.9-2 2-2s2 .9 2 2V103c0 1.1-.9 2-2 2m17.73 0c-1.1 0-2-.9-2-2V26.38c0-1.1.9-2 2-2s2 .9 2 2V103c0 1.1-.9 2-2 2" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M88.45 105c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2s2 .9 2 2v100c0 1.1-.9 2-2 2" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 88.484, x2: 88.484, y1: 1, y2: 105, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgBars as default };
