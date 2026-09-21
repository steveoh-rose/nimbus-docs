import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgToggle = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgToggle" }, props),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M79.28 69.8c9.278 0 16.8-7.522 16.8-16.8s-7.522-16.8-16.8-16.8-16.8 7.522-16.8 16.8 7.522 16.8 16.8 16.8" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M79.32 78.84h-52.6C9.03 78.13 1 64.95 1 53c0-11.94 8.02-25.12 25.64-25.84h52.64C96.97 27.87 105 41.05 105 53c0 11.94-8.02 25.12-25.64 25.84zm-52.6-47.68C16.3 31.58 5 38.6 5 53s11.3 21.42 21.8 21.84h52.44C89.73 74.4 101 67.38 101 53c0-14.4-11.3-21.42-21.8-21.84z" }),
        React.createElement("path", { fill: "#fff", d: "M76.74 62.46c-.33 0-.65-.12-.9-.34l-6.04-5.3c-.57-.5-.62-1.36-.13-1.93.5-.57 1.36-.62 1.93-.13l4.89 4.29 10.26-14.92A1.366 1.366 0 1 1 89 45.68L77.87 61.86c-.22.32-.57.53-.96.58-.06 0-.11.01-.17.01z" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 96.071, x2: 62.48, y1: 53.56, y2: 53.56, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgToggle as default };
