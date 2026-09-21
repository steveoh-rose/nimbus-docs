import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgMaintenance = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgMaintenance" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M13.75 104.76c-3.27 0-6.53-1.24-9.02-3.73C2.32 98.6 1 95.4 1 92.01S2.32 85.42 4.72 83l11.33-11.16 25.46-25.28c-1.6-3.95-2.4-8.11-2.4-12.39 0-18.16 14.78-32.93 32.94-32.93 4.7 0 9.23.96 13.46 2.86.6.27 1.03.82 1.15 1.46.12.65-.09 1.31-.55 1.78L73.26 20.19a8.7 8.7 0 0 0-2.56 6.18c0 2.33.91 4.53 2.56 6.18 3.41 3.41 8.95 3.41 12.36 0l13.01-13.01a1.998 1.998 0 0 1 3.22.55c2.1 4.39 3.16 9.13 3.16 14.08 0 18.17-14.78 32.95-32.95 32.95-3.8 0-9.54-1.67-12.69-2.68l-36.61 36.59a12.7 12.7 0 0 1-9.02 3.73zm58.3-99.52c-15.95 0-28.93 12.98-28.93 28.93 0 4.18.87 8.23 2.6 12.03.35.76.18 1.66-.41 2.25L18.88 74.69 7.56 85.84a8.76 8.76 0 0 0-2.54 6.18c0 2.33.91 4.53 2.56 6.2 3.41 3.41 8.96 3.41 12.37 0L57.4 60.74c.38-.38.88-.59 1.41-.59.22 0 .52.07.73.14 4.06 1.37 9.48 2.83 12.5 2.83 15.96 0 28.95-12.99 28.95-28.95 0-3.37-.56-6.61-1.66-9.69l-10.9 10.9c-4.97 4.97-13.05 4.97-18.02 0a12.66 12.66 0 0 1-3.73-9.01c0-3.4 1.33-6.6 3.73-9.01L81.09 6.68a29 29 0 0 0-9.06-1.44z" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M21.12 87.11a2.004 2.004 0 0 1-1.41-3.42l18.74-18.74c.78-.78 2.05-.78 2.83 0s.78 2.05 0 2.83L22.54 86.52c-.39.39-.9.59-1.41.59z" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 19.128, x2: 41.865, y1: 76.117, y2: 76.117, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgMaintenance as default };
