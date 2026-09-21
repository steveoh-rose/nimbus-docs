import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgCarrier = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgCarrier" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M52.82 96.41c-.45 0-.9-.15-1.27-.45-.85-.7-.98-1.96-.28-2.81L84.95 52.1 56.14 28 5.55 90.34c-.7.86-1.96.99-2.81.29-.86-.7-.99-1.96-.29-2.81l53.15-65.5 34.96 29.25-36.19 44.11c-.4.48-.97.73-1.55.73M89.7 48.16c-.45 0-.91-.15-1.28-.47L60.5 24.33a2 2 0 0 1 .358-3.31 2 2 0 0 1 2.212.24l27.92 23.36a2 2 0 0 1 .25 2.82c-.4.47-.96.72-1.53.72z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M80.34 40.33c-.45 0-.91-.15-1.29-.47a2 2 0 0 1-.25-2.82l16.15-19.23a2 2 0 0 1 3.53 1.108 2 2 0 0 1-.46 1.462L81.87 39.61c-.4.47-.96.71-1.53.71zm-9.49-7.94c-.47 0-.94-.16-1.32-.5-.83-.73-.91-1.99-.18-2.82l5.74-6.54c.73-.83 1.99-.91 2.82-.18s.91 1.99.18 2.82l-5.74 6.54c-.4.45-.95.68-1.5.68" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M79.52 26.96a6.47 6.47 0 0 1-6.46-6.46c0-3.56 2.9-6.46 6.46-6.46s6.46 2.9 6.46 6.46-2.9 6.46-6.46 6.46m0-8.92c-1.36 0-2.46 1.1-2.46 2.46s1.1 2.46 2.46 2.46 2.46-1.1 2.46-2.46-1.1-2.46-2.46-2.46" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M96.49 26.6a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 101.955, x2: 91.353, y1: 13.963, y2: 24.564, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgCarrier as default };
