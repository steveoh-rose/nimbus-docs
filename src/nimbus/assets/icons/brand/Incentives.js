import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgIncentives = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgIncentives" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M19.13 98.4a6.99 6.99 0 0 1-6.29-3.95L1.61 71.1a6.92 6.92 0 0 1-.3-5.32 6.91 6.91 0 0 1 3.55-3.97l1.85-.89c3.46-1.67 7.63-.2 9.29 3.26l11.23 23.36c1.66 3.46.2 7.63-3.26 9.29l-1.85.89c-.97.47-2 .69-3.01.69zm-2.68-5.68a2.98 2.98 0 0 0 3.96 1.39l1.85-.89c1.47-.71 2.1-2.48 1.39-3.96L12.42 65.9a2.98 2.98 0 0 0-3.96-1.39l-1.85.89c-.71.34-1.25.94-1.51 1.69s-.22 1.55.13 2.27l11.23 23.36z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M70.5 91.22H26.69c-1.1 0-2-.9-2-2s.9-2 2-2h43.8c3.14 0 6.1-1.22 8.32-3.45l21.49-21.49c.52-.52.79-1.21.76-1.95s-.35-1.41-.91-1.89c-.93-.8-2.32-.84-3.29-.1L77.1 73.43c-.35.27-.78.41-1.21.41H52.23c-1.1 0-2-.9-2-2s.9-2 2-2h17.89c2.07 0 3.76-1.69 3.76-3.76s-1.69-3.76-3.76-3.76h-7.1c-3.34 0-6.47-1.3-8.83-3.66a8.45 8.45 0 0 0-6-2.49h-2.8c-3.18 0-6.3.56-9.27 1.66l-21 7.74c-1.03.38-2.19-.15-2.57-1.18s.15-2.19 1.18-2.57l21-7.74c3.42-1.26 7.01-1.9 10.66-1.9h2.8c3.34 0 6.47 1.3 8.83 3.66 1.6 1.6 3.74 2.49 6 2.49h7.1c4.28 0 7.76 3.48 7.76 7.76 0 .65-.08 1.29-.23 1.9l16.78-12.81a6.64 6.64 0 0 1 8.33.24 6.67 6.67 0 0 1 2.3 4.77c.07 1.83-.64 3.63-1.93 4.93L81.64 86.61a15.67 15.67 0 0 1-11.15 4.62z" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M73.85 52.15c11.747 0 21.27-9.523 21.27-21.27S85.597 9.61 73.85 9.61s-21.27 9.523-21.27 21.27 9.523 21.27 21.27 21.27" }),
        React.createElement("path", { fill: "#fff", d: "M73.85 41.57c-3.36 0-6.09-2.73-6.09-6.09 0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 1.71 1.39 3.09 3.09 3.09s3.09-1.39 3.09-3.09-1.39-3.09-3.09-3.09c-3.36 0-6.09-2.73-6.09-6.09s2.73-6.09 6.09-6.09 6.09 2.73 6.09 6.09c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5c0-1.71-1.39-3.09-3.09-3.09s-3.09 1.39-3.09 3.09 1.39 3.09 3.09 3.09c3.36 0 6.09 2.73 6.09 6.09s-2.73 6.09-6.09 6.09m0-22.93c-.83 0-1.5-.67-1.5-1.5v-1.89c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v1.89c0 .83-.67 1.5-1.5 1.5m0 29.37c-.83 0-1.5-.67-1.5-1.5v-1.89c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v1.89c0 .83-.67 1.5-1.5 1.5" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 88.828, x2: 58.752, y1: 45.994, y2: 15.918, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgIncentives as default };
