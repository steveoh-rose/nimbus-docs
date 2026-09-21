import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgSearch = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgSearch" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], fillRule: "evenodd", d: "M64.832 58.887a2 2 0 0 1 2.677.137l19.758 19.758a6 6 0 0 1-8.486 8.485L59.024 67.508a2 2 0 0 1 0-2.828l5.656-5.656zm-1.566 7.207L81.61 84.44a2 2 0 0 0 2.829-2.83L66.094 63.267z", clipRule: "evenodd" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], fillRule: "evenodd", d: "M22.213 22.213c11.716-11.716 30.71-11.716 42.427 0 11.715 11.716 11.715 30.711 0 42.427s-30.711 11.716-42.427 0-11.716-30.711 0-42.427m39.599 2.83c-10.154-10.154-26.616-10.154-36.77 0s-10.154 26.615 0 36.769 26.616 10.153 36.77 0c10.153-10.154 10.153-26.616 0-36.77", clipRule: "evenodd" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M25.173 32.825A21.11 21.11 0 0 1 45.72 22.442l.516.063.2.038a2 2 0 0 1-.529 3.943l-.203-.017-.418-.05a17.11 17.11 0 0 0-18.817 14.73 2 2 0 0 1-3.964-.532 21.1 21.1 0 0 1 2.668-7.792" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 44.512, x2: 30.304, y1: 25.556, y2: 43.16, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgSearch as default };
