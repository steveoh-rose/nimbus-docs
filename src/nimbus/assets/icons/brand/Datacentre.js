import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgDatacentre = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgDatacentre" }, props),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M26.35 53.42H7.1c-1.1 0-2-.9-2-2s.9-2 2-2h19.25c1.1 0 2 .9 2 2s-.9 2-2 2" }),
        React.createElement("path", { fill: `url(#${id}:__b)`, d: "M98.33 53.42H79.08c-1.1 0-2-.9-2-2s.9-2 2-2h19.25c1.1 0 2 .9 2 2s-.9 2-2 2" }),
        React.createElement("path", { fill: `url(#${id}:__c)`, d: "M23.36 86.95H3.97V16.47h19.39c1.1 0 2 .9 2 2s-.9 2-2 2H7.97v62.48h15.39c1.1 0 2 .9 2 2s-.9 2-2 2" }),
        React.createElement("path", { fill: `url(#${id}:__d)`, d: "M102.03 86.95H79.08c-1.1 0-2-.9-2-2s.9-2 2-2h18.95V20.47H79.08c-1.1 0-2-.9-2-2s.9-2 2-2h22.95z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M76.67 28.67H28.56c-2.32 0-4.21-1.89-4.21-4.21V12.48c0-2.32 1.89-4.21 4.21-4.21h48.11c2.32 0 4.21 1.89 4.21 4.21v11.98c0 2.32-1.89 4.21-4.21 4.21m-48.11-16.4c-.11 0-.21.09-.21.21v11.98c0 .11.09.21.21.21h48.11c.11 0 .21-.09.21-.21V12.48c0-.11-.09-.21-.21-.21zm48.11 49.35H28.56c-2.32 0-4.21-1.89-4.21-4.21V45.43c0-2.32 1.89-4.21 4.21-4.21h48.11c2.32 0 4.21 1.89 4.21 4.21v11.98c0 2.32-1.89 4.21-4.21 4.21m-48.11-16.4c-.11 0-.21.09-.21.21v11.98c0 .11.09.21.21.21h48.11c.11 0 .21-.09.21-.21V45.43c0-.11-.09-.21-.21-.21zm48.31 50.51H28.76c-2.32 0-4.21-1.89-4.21-4.21V79.54c0-2.32 1.89-4.21 4.21-4.21h48.11c2.32 0 4.21 1.89 4.21 4.21v11.98c0 2.32-1.89 4.21-4.21 4.21m-48.11-16.4c-.11 0-.21.09-.21.21v11.98c0 .11.09.21.21.21h48.11c.11 0 .21-.09.21-.21V79.54c0-.11-.09-.21-.21-.21z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M69.89 87.27a1.74 1.74 0 0 1 0-3.48c.96 0 1.74.78 1.74 1.74M52.61 45.22c-1.1 0-2-.9-2-2V26.67c0-1.1.9-2 2-2s2 .9 2 2v16.55c0 1.1-.9 2-2 2m.2 34.11c-1.1 0-2-.9-2-2V59.62c0-1.1.9-2 2-2s2 .9 2 2v17.71c0 1.1-.9 2-2 2M68.73 21.19a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36M68.73 54.27a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M68.73 88.52a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 8.773, x2: 9.718, y1: 52.879, y2: 47.388, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__b`, x1: 77.084, x2: 100.33, y1: 51.487, y2: 51.487, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__c`, x1: 7.35, x2: 35.031, y1: 77.41, y2: 69.009, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__d`, x1: 98.339, x2: 66.989, y1: 76.75, y2: 65.652, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgDatacentre as default };
