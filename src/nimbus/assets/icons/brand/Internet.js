import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgInternet = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgInternet" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M53 105C24.33 105 1 81.67 1 53S24.33 1 53 1s52 23.33 52 52-23.33 52-52 52M53 5C26.53 5 5 26.53 5 53s21.53 48 48 48 48-21.53 48-48S79.47 5 53 5" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M11.8 83.34a2.005 2.005 0 0 1-1.81-2.87L47.6 2.26c.48-1 1.67-1.41 2.67-.94 1 .48 1.41 1.67.94 2.67l-37.6 78.22c-.34.72-1.06 1.13-1.8 1.13z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M98.55 75.65c-.51 0-1.03-.2-1.42-.59L31.12 8.78c-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0l66.02 66.29c.78.78.78 2.05 0 2.83-.39.39-.9.58-1.41.58z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M77.53 98.58c-1.08 0-1.97-.86-2-1.95l-2.18-87.8c-.03-1.1.85-2.02 1.95-2.05 1.09-.04 2.02.85 2.05 1.95l2.18 87.8c.03 1.1-.85 2.02-1.95 2.05z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M85.13 93.31c-.14 0-.28-.01-.42-.04L7.56 76.73a1.999 1.999 0 1 1 .83-3.91l77.15 16.53a1.995 1.995 0 0 1-.41 3.95z" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M42.15 25.03a7.63 7.63 0 1 0 0-15.26 7.63 7.63 0 0 0 0 15.26" }),
        React.createElement("path", { fill: `url(#${id}:__b)`, d: "M77.53 60.63a7.63 7.63 0 1 0 0-15.26 7.63 7.63 0 0 0 0 15.26" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 47.709, x2: 36.924, y1: 12.173, y2: 22.959, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__b`, x1: 83.089, x2: 72.304, y1: 47.773, y2: 58.559, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgInternet as default };
