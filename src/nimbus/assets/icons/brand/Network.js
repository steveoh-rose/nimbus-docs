import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgNetwork = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgNetwork" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M53 105C24.33 105 1 81.67 1 53S24.33 1 53 1s52 23.33 52 52c0 13.41-5.11 26.15-14.39 35.88-.76.8-2.03.83-2.83.07s-.83-2.03-.07-2.83C96.28 77.14 101 65.38 101 53c0-26.47-21.53-48-48-48S5 26.53 5 53s21.53 48 48 48c9.54 0 18.76-2.8 26.67-8.11a2 2 0 0 1 2.78.55 2 2 0 0 1-.55 2.78c-8.57 5.75-18.56 8.78-28.89 8.78z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M98.33 33.92H37.76c-1.1 0-2-.9-2-2s.9-2 2-2h60.57c1.1 0 2 .9 2 2s-.9 2-2 2M75.84 55H3c-1.1 0-2-.9-2-2s.9-2 2-2h72.84c1.1 0 2 .9 2 2s-.9 2-2 2M34.76 77.03H8.87c-1.1 0-2-.9-2-2s.9-2 2-2h25.88c1.1 0 2 .9 2 2s-.9 2-2 2zm61.97 0H57.02c-1.1 0-2-.9-2-2s.9-2 2-2h39.71c1.1 0 2 .9 2 2s-.9 2-2 2" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M37.76 41.11a7.63 7.63 0 1 0 0-15.26 7.63 7.63 0 0 0 0 15.26" }),
        React.createElement("path", { fill: `url(#${id}:__b)`, d: "M57.02 81.56a7.63 7.63 0 1 0 0-15.26 7.63 7.63 0 0 0 0 15.26" }),
        React.createElement("path", { fill: `url(#${id}:__c)`, d: "M80.23 103a7.63 7.63 0 1 0 0-15.26 7.63 7.63 0 0 0 0 15.26" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 43.319, x2: 32.534, y1: 28.253, y2: 39.039, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__b`, x1: 62.579, x2: 51.794, y1: 68.703, y2: 79.489, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__c`, x1: 85.789, x2: 75.004, y1: 90.143, y2: 100.929, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgNetwork as default };
