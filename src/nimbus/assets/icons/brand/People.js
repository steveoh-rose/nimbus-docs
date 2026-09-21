import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgPeople = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgPeople" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M53 105C24.33 105 1 81.67 1 53S24.33 1 53 1s52 23.33 52 52-23.33 52-52 52M53 5C26.53 5 5 26.53 5 53s21.53 48 48 48 48-21.53 48-48S79.47 5 53 5" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M75.69 99.57c-1.1 0-2-.9-2-2V80.42c0-7.2-5.86-13.06-13.06-13.06H45.18c-7.2 0-13.06 5.86-13.06 13.06v17.06c0 1.1-.9 2-2 2s-2-.9-2-2V80.42c0-9.41 7.65-17.06 17.06-17.06h15.45c9.41 0 17.06 7.65 17.06 17.06v17.15c0 1.1-.9 2-2 2" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M37 37.12c-1.1 0-2-.9-2-2s.9-2 2-2c12.97 0 20.71-6.78 20.78-6.85l1.28-1.14 1.33 1.09s3.8 3.04 9.28 3.43c1.1.08 1.93 1.04 1.85 2.14a1.984 1.984 0 0 1-2.14 1.85c-4.71-.34-8.34-2.22-10.19-3.39-2.9 2.13-10.65 6.87-22.2 6.87z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M53.26 60.28C43.19 60.28 35 52.09 35 42.02v-10.8C35 21.17 43.17 13 53.22 13s18.31 8.17 18.31 18.22v10.8c0 10.07-8.19 18.26-18.26 18.26zm-.04-43.29C45.38 16.99 39 23.37 39 31.21v10.8c0 7.87 6.4 14.26 14.26 14.26s14.26-6.4 14.26-14.26V31.22C67.52 23.38 61.1 17 53.21 17z" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 71.516, x2: 35, y1: 31.325, y2: 31.325, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgPeople as default };
