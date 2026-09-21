import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgConnection = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgConnection" }, props),
        React.createElement("g", { clipPath: "url(#__ID_PLACEHOLDER____a)" },
            React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M53.14 55H7.91c-1.1 0-2-.9-2-2s.9-2 2-2h45.23c1.1 0 2 .9 2 2s-.9 2-2 2" }),
            React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M53.29 100.22c-1.1 0-2-.9-2-2V7.78c0-1.1.9-2 2-2s2 .9 2 2v90.44c0 1.1-.9 2-2 2m44.8-45.35H62.68c-1.1 0-2-.9-2-2s.9-2 2-2h35.41c1.1 0 2 .9 2 2s-.9 2-2 2" }),
            React.createElement("path", { fill: `url(#${id}:__b)`, d: "M98.09 60.5a7.63 7.63 0 1 0 0-15.26 7.63 7.63 0 0 0 0 15.26" }),
            React.createElement("path", { fill: `url(#${id}:__c)`, d: "M7.91 60.5a7.63 7.63 0 1 0 0-15.26 7.63 7.63 0 0 0 0 15.26" }),
            React.createElement("path", { fill: `url(#${id}:__d)`, d: "M53.29 15.41a7.63 7.63 0 1 0 0-15.26 7.63 7.63 0 0 0 0 15.26" }),
            React.createElement("path", { fill: `url(#${id}:__e)`, d: "M53.29 105.85a7.63 7.63 0 1 0 0-15.26 7.63 7.63 0 0 0 0 15.26" })),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__b`, x1: 103.649, x2: 92.864, y1: 47.643, y2: 58.429, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__c`, x1: 13.469, x2: 2.684, y1: 47.643, y2: 58.429, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__d`, x1: 58.849, x2: 48.064, y1: 2.553, y2: 13.339, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__e`, x1: 58.849, x2: 48.064, y1: 92.993, y2: 103.779, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("clipPath", { id: `${id}:__a` },
                React.createElement("path", { fill: "#fff", d: "M0 0h106v106H0z" })))));
};

export { SvgConnection as default };
