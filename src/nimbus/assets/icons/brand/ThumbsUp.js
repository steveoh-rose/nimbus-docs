import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgThumbsUp = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgThumbsUp" }, props),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M19.84 102.85H9.11c-3.37 0-6.11-2.74-6.11-6.11V45.81c0-3.37 2.74-6.11 6.11-6.11h10.73c3.37 0 6.11 2.74 6.11 6.11v50.94c0 3.37-2.74 6.11-6.11 6.11zM9.11 43.71c-1.16 0-2.11.94-2.11 2.11v50.94c0 1.16.94 2.11 2.11 2.11h10.73c1.16 0 2.11-.94 2.11-2.11V45.81c0-1.16-.94-2.11-2.11-2.11H9.11z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M89.76 73.61H73.58c-1.1 0-2-.9-2-2s.9-2 2-2h16.18a5.16 5.16 0 1 0 0-10.32h-9.22c-1.1 0-2-.9-2-2s.9-2 2-2h9.22c5.05 0 9.16 4.11 9.16 9.16s-4.11 9.16-9.16 9.16" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M94.73 59.29H78.55c-1.1 0-2-.9-2-2s.9-2 2-2h16.18a5.16 5.16 0 1 0 0-10.32H57.04c-1.91 0-3.66-.96-4.69-2.58a5.52 5.52 0 0 1-.34-5.34l9.44-21.11c1.29-2.74.81-5.91-1.2-8.12l-.15-.16c-.48-.52-1.14-.81-1.84-.79-.71.01-1.35.32-1.81.86L29 41.9a2 2 0 0 1-3.547-1.03 2 2 0 0 1 .427-1.47l27.5-34.21a6.42 6.42 0 0 1 4.82-2.31c1.84-.02 3.62.73 4.87 2.1l.15.16c3.1 3.41 3.83 8.3 1.88 12.47l-9.44 21.11c-.34.73-.06 1.31.08 1.53s.54.72 1.31.72h37.7c5.05 0 9.16 4.11 9.16 9.16s-4.11 9.16-9.16 9.16zm-7.97 28.64H70.58c-1.1 0-2-.9-2-2s.9-2 2-2h16.18a5.16 5.16 0 0 0 0-10.32H78.6c-1.1 0-2-.9-2-2s.9-2 2-2h8.16c5.05 0 9.16 4.11 9.16 9.16s-4.11 9.16-9.16 9.16" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M83.48 102.24H29.44c-1.1 0-2-.9-2-2s.9-2 2-2h54.03c2.85 0 5.16-2.32 5.16-5.16s-2.32-5.16-5.16-5.16h-7.83c-1.1 0-2-.9-2-2s.9-2 2-2h7.83c5.05 0 9.16 4.11 9.16 9.16s-4.11 9.16-9.16 9.16z" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 22.555, x2: -6.111, y1: 93.719, y2: 83.303, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgThumbsUp as default };
