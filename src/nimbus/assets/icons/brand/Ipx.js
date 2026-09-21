import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgIpx = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgIpx" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M40.55 103.01c-.64 0-1.27-.31-1.66-.88-.34-.5-8.34-12.48-12.58-30.58-3.93-16.76-5.18-42.04 11.2-67.36a2.003 2.003 0 1 1 3.36 2.18c-12.51 19.34-16.11 40.92-10.7 64.14 4.06 17.42 11.96 29.28 12.03 29.4a2 2 0 0 1-1.66 3.12zm25.27 0a2.003 2.003 0 0 1-2.002-2.105 2 2 0 0 1 .342-1.015c.08-.12 7.98-11.97 12.04-29.4 5.41-23.22 1.81-44.8-10.7-64.14-.6-.93-.33-2.17.59-2.77.93-.6 2.17-.33 2.77.59 16.38 25.32 15.13 50.61 11.2 67.36-4.25 18.1-12.24 30.08-12.58 30.58-.39.57-1.02.88-1.66.88z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M53 105C24.33 105 1 81.67 1 53S24.33 1 53 1s52 23.33 52 52-23.33 52-52 52M53 5C26.53 5 5 26.53 5 53s21.53 48 48 48 48-21.53 48-48S79.47 5 53 5" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M53 105c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2s2 .9 2 2v100c0 1.1-.9 2-2 2" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M103 55H3c-1.1 0-2-.9-2-2s.9-2 2-2h100c1.1 0 2 .9 2 2s-.9 2-2 2M50.59 36.24c-11.64 0-24.61-2.82-37.53-11.18a2.001 2.001 0 0 1 .673-3.639 2 2 0 0 1 1.507.279c37.5 24.25 75.5-.83 75.88-1.09.92-.62 2.16-.38 2.78.54s.38 2.16-.54 2.78c-.27.18-18.65 12.31-42.76 12.31zm41.64 49.49c-.38 0-.77-.11-1.12-.34-.38-.26-38.44-25.3-75.88-1.09-.93.6-2.17.33-2.77-.59-.6-.93-.33-2.17.59-2.77 39.69-25.67 79.89.86 80.29 1.13.92.62 1.16 1.86.54 2.78-.39.57-1.02.88-1.66.88z" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M53 62.92c5.479 0 9.92-4.441 9.92-9.92s-4.441-9.92-9.92-9.92-9.92 4.441-9.92 9.92 4.441 9.92 9.92 9.92" }),
        React.createElement("path", { fill: `url(#${id}:__b)`, d: "M53.68 21.52a7.63 7.63 0 1 0 0-15.26 7.63 7.63 0 0 0 0 15.26" }),
        React.createElement("path", { fill: `url(#${id}:__c)`, d: "M77.38 84.81a7.63 7.63 0 1 0 0-15.26 7.63 7.63 0 0 0 0 15.26" }),
        React.createElement("path", { fill: `url(#${id}:__d)`, d: "M12.6 60.53a7.63 7.63 0 1 0 0-15.26 7.63 7.63 0 0 0 0 15.26" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 60.228, x2: 46.206, y1: 46.205, y2: 60.227, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__b`, x1: 59.239, x2: 48.454, y1: 8.663, y2: 19.449, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__c`, x1: 82.939, x2: 72.154, y1: 71.953, y2: 82.739, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__d`, x1: 18.159, x2: 7.374, y1: 47.673, y2: 58.459, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgIpx as default };
