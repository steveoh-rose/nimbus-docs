import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgDatacentreBlocked = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgDatacentreBlocked" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M82.57 29.57H30.24c-2.32 0-4.21-1.89-4.21-4.21V13.31c0-2.32 1.89-4.21 4.21-4.21h52.33c2.32 0 4.21 1.89 4.21 4.21v12.05c0 2.32-1.89 4.21-4.21 4.21M30.24 13.1c-.11 0-.21.09-.21.21v12.05c0 .11.09.21.21.21h52.33c.11 0 .21-.09.21-.21V13.31c0-.11-.09-.21-.21-.21zm52.33 49.55H30.24c-2.32 0-4.21-1.89-4.21-4.21V46.39c0-2.32 1.89-4.21 4.21-4.21h52.33c2.32 0 4.21 1.89 4.21 4.21v12.05c0 2.32-1.89 4.21-4.21 4.21M30.24 46.19c-.11 0-.21.09-.21.21v12.05c0 .11.09.21.21.21h52.33c.11 0 .21-.09.21-.21V46.4c0-.11-.09-.21-.21-.21zM82.76 96.9H30.44c-2.32 0-4.21-1.89-4.21-4.21V80.64c0-2.32 1.89-4.21 4.21-4.21h52.33c2.32 0 4.21 1.89 4.21 4.21v12.05c0 2.32-1.89 4.21-4.21 4.21zM30.43 80.43c-.11 0-.21.09-.21.21v12.05c0 .11.09.21.21.21h52.33c.11 0 .21-.09.21-.21V80.64c0-.11-.09-.21-.21-.21H30.43" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M54.4 46.19c-1.1 0-2-.9-2-2V27.57c0-1.1.9-2 2-2s2 .9 2 2v16.62c0 1.1-.9 2-2 2m.2 34.24c-1.1 0-2-.9-2-2V60.65c0-1.1.9-2 2-2s2 .9 2 2v17.78c0 1.1-.9 2-2 2m46.83-26.01H84.97c-1.1 0-2-.9-2-2s.9-2 2-2h12.46V21.33H84.97c-1.1 0-2-.9-2-2s.9-2 2-2h16.46zm-76.4 0H8.57V17.33h16.46c1.1 0 2 .9 2 2s-.9 2-2 2H12.57v29.09h12.46c1.1 0 2 .9 2 2s-.9 2-2 2" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M25.03 88.09H8.57V53c0-1.1.9-2 2-2s2 .9 2 2v31.09h12.46c1.1 0 2 .9 2 2s-.9 2-2 2m76.4 0H84.97c-1.1 0-2-.9-2-2s.9-2 2-2h12.46V55H84.97c-1.1 0-2-.9-2-2s.9-2 2-2h16.46z" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M10.57 77.51a7.97 7.97 0 1 0 0-15.94 7.97 7.97 0 0 0 0 15.94" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M74.63 22.01a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36M74.63 55.1a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36M74.63 89.35a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 16.377, x2: 5.111, y1: 64.081, y2: 75.346, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgDatacentreBlocked as default };
