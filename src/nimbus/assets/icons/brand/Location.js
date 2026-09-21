import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgLocation = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgLocation" }, props),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M53 61.24c-12.58 0-22.81-10.23-22.81-22.81S40.42 15.62 53 15.62s22.81 10.23 22.81 22.81S65.58 61.24 53 61.24m0-41.61c-10.37 0-18.81 8.44-18.81 18.81S42.63 57.25 53 57.25s18.81-8.44 18.81-18.81S63.37 19.63 53 19.63" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M53 102.9c-.53 0-1.05-.21-1.42-.59-.35-.35-8.67-8.8-17.13-20.82-11.46-16.3-17.28-30.62-17.28-42.56C17.17 19.17 33.24 3.1 53 3.1s35.83 16.07 35.83 35.83c0 11.95-5.81 26.26-17.28 42.56-8.46 12.02-16.78 20.47-17.13 20.82-.38.38-.89.59-1.42.59M21.17 38.75v.18C21.17 62.36 46.64 91.18 53 98c6.36-6.83 31.83-35.64 31.83-59.07C84.83 21.38 70.55 7.1 53 7.1S21.27 21.28 21.17 38.75" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 75.798, x2: 30.19, y1: 39.19, y2: 39.19, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgLocation as default };
