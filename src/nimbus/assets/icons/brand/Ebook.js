import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgEbook = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgEbook" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M77.06 96.6c-1.13 0-2.27-.09-3.4-.26-12.14-1.85-20.5-13.23-18.65-25.36 1.85-12.14 13.23-20.51 25.36-18.65 5.88.9 11.06 4.03 14.58 8.82s4.97 10.67 4.07 16.54c-.9 5.88-4.03 11.06-8.82 14.58a22.1 22.1 0 0 1-13.14 4.33M77 56.07c-8.86 0-16.67 6.48-18.04 15.51-1.52 9.95 5.35 19.29 15.3 20.81 4.82.74 9.64-.45 13.57-3.34s6.5-7.14 7.23-11.96c1.52-9.96-5.35-19.29-15.3-20.81q-1.395-.21-2.76-.21" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, fillRule: "evenodd", d: "M77.26 86.434q-.124.016-.25.016c-.398 0-.785-.118-1.11-.338a2 2 0 0 1-.383-.335L68.1 78.36c-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0l4.08 4.08V64.22c0-1.1.9-2 2-2s2 .9 2 2v15.39l4.08-4.08c.78-.78 2.05-.78 2.83 0s.78 2.05 0 2.83l-7.415 7.415a2 2 0 0 1-1.245.66", clipRule: "evenodd" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M77.01 48.16c-1.1 0-2-.9-2-2V18.8H15.19c-4.67 0-8.46-3.99-8.46-8.9S10.52 1 15.19 1h61.83c1.1 0 2 .9 2 2s-.9 2-2 2H15.19c-2.46 0-4.46 2.2-4.46 4.9s2 4.9 4.46 4.9h63.83v31.37c0 1.1-.9 2-2 2z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M77.01 105H15.19c-4.67 0-8.46-3.99-8.46-8.9V9.9c0-1.1.9-2 2-2s2 .9 2 2v86.2c0 2.7 2 4.9 4.46 4.9h61.83c1.1 0 2 .9 2 2s-.9 2-2 2z" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 83.696, x2: 67.062, y1: 82.944, y2: 69.907, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgEbook as default };
