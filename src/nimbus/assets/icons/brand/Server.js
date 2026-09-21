import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgServer = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgServer" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M99.02 35.1H6.98C3.68 35.1 1 32.42 1 29.12V10.38C1 7.08 3.68 4.4 6.98 4.4h92.04c3.3 0 5.98 2.68 5.98 5.98v18.74c0 3.3-2.68 5.98-5.98 5.98M6.98 8.4C5.89 8.4 5 9.29 5 10.38v18.74c0 1.09.89 1.98 1.98 1.98h92.04c1.09 0 1.98-.89 1.98-1.98V10.38c0-1.09-.89-1.98-1.98-1.98zm92.04 59.95H6.98c-3.3 0-5.98-2.68-5.98-5.98V43.63c0-3.3 2.68-5.98 5.98-5.98h92.04c3.3 0 5.98 2.68 5.98 5.98v18.74c0 3.3-2.68 5.98-5.98 5.98M6.98 41.65c-1.09 0-1.98.89-1.98 1.98v18.74c0 1.09.89 1.98 1.98 1.98h92.04c1.09 0 1.98-.89 1.98-1.98V43.63c0-1.09-.89-1.98-1.98-1.98zm92.04 59.95H6.98c-3.3 0-5.98-2.68-5.98-5.98V76.88c0-3.3 2.68-5.98 5.98-5.98h92.04c3.3 0 5.98 2.68 5.98 5.98v18.74c0 3.3-2.68 5.98-5.98 5.98M6.98 74.9c-1.09 0-1.98.89-1.98 1.98v18.74c0 1.09.89 1.98 1.98 1.98h92.04c1.09 0 1.98-.89 1.98-1.98V76.88c0-1.09-.89-1.98-1.98-1.98z" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M19.98 27.25a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15" }),
        React.createElement("path", { fill: `url(#${id}:__b)`, d: "M19.98 60.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15" }),
        React.createElement("path", { fill: `url(#${id}:__c)`, d: "M19.98 93.75a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 25.445, x2: 14.843, y1: 14.613, y2: 25.214, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__b`, x1: 25.445, x2: 14.843, y1: 47.862, y2: 58.464, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__c`, x1: 25.445, x2: 14.843, y1: 81.112, y2: 91.714, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgServer as default };
