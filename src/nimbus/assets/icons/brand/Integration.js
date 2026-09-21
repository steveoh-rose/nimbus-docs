import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgIntegration = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgIntegration" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M78 77.48c-14.89 0-27-12.11-27-27 0-12.68-10.32-23-23-23S5 37.8 5 50.48s10.32 23 23 23c8.54 0 16.33-4.69 20.33-12.24.52-.98 1.73-1.35 2.7-.83.98.52 1.35 1.73.83 2.7A26.95 26.95 0 0 1 28 77.47c-14.89 0-27-12.11-27-27s12.11-26.99 27-26.99 27 12.11 27 27c0 12.68 10.32 23 23 23s23-10.32 23-23-10.32-23-23-23c-8.58 0-16.4 4.73-20.39 12.34a1.99 1.99 0 0 1-2.7.84 1.99 1.99 0 0 1-.84-2.7A26.95 26.95 0 0 1 78 23.48c14.89 0 27 12.11 27 27s-12.11 27-27 27" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M78 83.11a7.63 7.63 0 1 0 0-15.26 7.63 7.63 0 0 0 0 15.26" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 83.559, x2: 72.774, y1: 70.253, y2: 81.039, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgIntegration as default };
