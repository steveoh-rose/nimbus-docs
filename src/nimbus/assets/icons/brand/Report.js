import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgReport = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgReport" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "m17.56 92.4-5.13-13.79 1.3-.88a9.75 9.75 0 0 0 3.67-11.48 9.75 9.75 0 0 0-10.28-6.29l-1.56.18-5.13-13.8 17.52-6.52c1.04-.39 2.19.14 2.57 1.18.39 1.04-.14 2.19-1.18 2.57L5.57 48.69l2.68 7.19c5.7 0 10.86 3.52 12.88 8.97 2.03 5.45.42 11.49-3.9 15.21l2.68 7.19 80.51-29.95-2.69-7.22a13.75 13.75 0 0 1-12.81-8.96 13.74 13.74 0 0 1 3.84-15.15l-2.69-7.22-31.75 11.81c-1.04.39-2.19-.14-2.57-1.18-.39-1.04.14-2.19 1.18-2.57l35.5-13.21 5.13 13.8-1.28.88a9.763 9.763 0 0 0 6.6 17.74l1.55-.17 5.13 13.8z" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M37.44 51.94c-1.1 0-2-.9-2-2V39.57H25.07c-1.1 0-2-.9-2-2s.9-2 2-2h10.37V25.2c0-1.1.9-2 2-2s2 .9 2 2v10.37h10.37c1.1 0 2 .9 2 2s-.9 2-2 2H39.44v10.37c0 1.1-.9 2-2 2" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M37.44 59.02c-11.47 0-20.79-9.33-20.79-20.79s9.33-20.79 20.79-20.79 20.79 9.33 20.79 20.79-9.33 20.79-20.79 20.79m0-37.59c-9.26 0-16.79 7.53-16.79 16.79s7.53 16.79 16.79 16.79 16.79-7.53 16.79-16.79-7.53-16.79-16.79-16.79M70.44 35.26a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36M74.99 47.5a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36M79.54 59.74a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 51.803, x2: 23.07, y1: 38.049, y2: 38.049, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgReport as default };
