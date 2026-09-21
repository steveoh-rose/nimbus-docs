import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgCages = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgCages" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M102.76 104.49c-1.1 0-2-.9-2-2V3.51c0-1.1.9-2 2-2s2 .9 2 2v98.98c0 1.1-.9 2-2 2m-99.76 0c-1.1 0-2-.9-2-2V3.51c0-1.1.9-2 2-2s2 .9 2 2v98.98c0 1.1-.9 2-2 2m85.89-70.37H16.87c-3.95 0-7.16-3.21-7.16-7.16V11.12c0-3.95 3.21-7.16 7.16-7.16h72.02c3.95 0 7.16 3.21 7.16 7.16v15.83c0 3.95-3.21 7.16-7.16 7.16zM16.87 7.96c-1.74 0-3.16 1.42-3.16 3.16v15.83c0 1.74 1.42 3.16 3.16 3.16h72.02c1.74 0 3.16-1.42 3.16-3.16V11.12c0-1.74-1.42-3.16-3.16-3.16zm70.98 61.01H17.91c-2.45 0-8.2 0-8.2-5.8V47.01c0-4.52 3.68-8.2 8.2-8.2h69.94c4.52 0 8.2 3.68 8.2 8.2v13.76c0 4.52-3.68 8.2-8.2 8.2M17.91 42.81c-2.31 0-4.2 1.88-4.2 4.2v16.16c0 1.04 0 1.8 4.2 1.8h69.94c2.31 0 4.2-1.88 4.2-4.2V47.01c0-2.31-1.88-4.2-4.2-4.2zm70.98 61.01H16.87c-3.95 0-7.16-3.21-7.16-7.16V80.83c0-3.95 3.21-7.16 7.16-7.16h72.02c3.95 0 7.16 3.21 7.16 7.16v15.83c0 3.95-3.21 7.16-7.16 7.16M16.87 77.67c-1.74 0-3.16 1.42-3.16 3.16v15.83c0 1.74 1.42 3.16 3.16 3.16h72.02c1.74 0 3.16-1.42 3.16-3.16V80.83c0-1.74-1.42-3.16-3.16-3.16z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M3 17.04h8.71v4H3zm91.29 0H103v4h-8.71zM3 52.5h8.71v4H3zM94.29 51H103v4h-8.71zM3 86.76h8.71v4H3zm91.29 0H103v4h-8.71z" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M52.88 21.04H25.17c-1.1 0-2-.9-2-2s.9-2 2-2h27.71c1.1 0 2 .9 2 2s-.9 2-2 2" }),
        React.createElement("path", { fill: `url(#${id}:__b)`, d: "M52.88 55.89H25.17c-1.1 0-2-.9-2-2s.9-2 2-2h27.71c1.1 0 2 .9 2 2s-.9 2-2 2" }),
        React.createElement("path", { fill: `url(#${id}:__c)`, d: "M52.88 90.75H25.17c-1.1 0-2-.9-2-2s.9-2 2-2h27.71c1.1 0 2 .9 2 2s-.9 2-2 2" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M68.91 21.72a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36M79.17 21.72a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36M68.91 56.57a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36M79.17 56.57a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36M68.91 91.43a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36M79.17 91.43a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 54.872, x2: 23.17, y1: 19.107, y2: 19.107, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__b`, x1: 54.872, x2: 23.17, y1: 53.957, y2: 53.957, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__c`, x1: 54.872, x2: 23.17, y1: 88.817, y2: 88.817, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgCages as default };
