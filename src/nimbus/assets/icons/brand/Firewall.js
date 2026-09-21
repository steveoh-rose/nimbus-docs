import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgFirewall = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgFirewall" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M99.86 82.27H72.02c-1.1 0-2-.9-2-2s.9-2 2-2h27.84c.63 0 1.14-.51 1.14-1.14v-62.4c0-.63-.51-1.14-1.14-1.14H6.14c-.63 0-1.14.51-1.14 1.14v62.4c0 .63.51 1.14 1.14 1.14h28.27c1.1 0 2 .9 2 2s-.9 2-2 2H6.14c-2.83 0-5.14-2.3-5.14-5.14v-62.4c0-2.83 2.3-5.14 5.14-5.14h93.72c2.83 0 5.14 2.3 5.14 5.14v62.4c0 2.83-2.3 5.14-5.14 5.14" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "m53 96.48-14.27-4.1-1.19-22.3h30.92l-1.21 22.31zm-10.42-7.16 10.42 3 10.41-2.99.83-15.25H41.76l.81 15.24z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M63.29 73.93c-1.1 0-2-.9-2-2v-5.44c0-2.39-1.94-4.33-4.33-4.33h-7.92c-2.39 0-4.33 1.94-4.33 4.33v5.44c0 1.1-.9 2-2 2s-2-.9-2-2v-5.44c0-4.59 3.74-8.33 8.33-8.33h7.92c4.59 0 8.33 3.74 8.33 8.33v5.44c0 1.1-.9 2-2 2m-7.98 5.56c0-1.28-1.03-2.31-2.31-2.31s-2.31 1.03-2.31 2.31c0 .79.39 1.48.99 1.9v5.42l1.32.43 1.32-.43v-5.42c.6-.42.99-1.11.99-1.9" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M21.6 42.12a7.97 7.97 0 1 0 0-15.94 7.97 7.97 0 0 0 0 15.94" }),
        React.createElement("path", { fill: `url(#${id}:__b)`, d: "M42.53 42.12a7.97 7.97 0 1 0 0-15.94 7.97 7.97 0 0 0 0 15.94" }),
        React.createElement("path", { fill: `url(#${id}:__c)`, d: "M63.47 42.12a7.97 7.97 0 1 0 0-15.94 7.97 7.97 0 0 0 0 15.94" }),
        React.createElement("path", { fill: `url(#${id}:__d)`, d: "M84.4 42.12a7.97 7.97 0 1 0 0-15.94 7.97 7.97 0 0 0 0 15.94" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 27.407, x2: 16.141, y1: 28.691, y2: 39.956, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__b`, x1: 48.337, x2: 37.071, y1: 28.691, y2: 39.956, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__c`, x1: 69.277, x2: 58.011, y1: 28.691, y2: 39.956, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__d`, x1: 90.207, x2: 78.941, y1: 28.691, y2: 39.956, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgFirewall as default };
