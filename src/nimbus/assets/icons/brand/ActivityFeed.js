import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgActivityFeed = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgActivityFeed" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M96.69 97.51H9.31C4.73 97.51 1 93.78 1 89.2V33.98h104v55.21c0 4.58-3.73 8.31-8.31 8.31zM5 37.98v51.21a4.31 4.31 0 0 0 4.31 4.31h87.38a4.31 4.31 0 0 0 4.31-4.31V37.98zm100-8.7H1V16.8c0-4.58 3.73-8.31 8.31-8.31h87.38c4.58 0 8.31 3.73 8.31 8.31zm-100-4h96V16.8a4.31 4.31 0 0 0-4.31-4.31H9.31A4.31 4.31 0 0 0 5 16.8z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M18.21 22.06a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36M28.47 22.06a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36M38.74 22.06a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36M90.66 86.33H15.53c-1.1 0-2-.9-2-2s.9-2 2-2h75.13c1.1 0 2 .9 2 2s-.9 2-2 2m0-10.38H15.53c-1.1 0-2-.9-2-2s.9-2 2-2h75.13c1.1 0 2 .9 2 2s-.9 2-2 2m0-10.38H50.53c-1.1 0-2-.9-2-2s.9-2 2-2h40.13c1.1 0 2 .9 2 2s-.9 2-2 2m0-10.38H50.53c-1.1 0-2-.9-2-2s.9-2 2-2h40.13c1.1 0 2 .9 2 2s-.9 2-2 2" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M38.74 45.8H19.88A3.88 3.88 0 0 0 16 49.68v10.01a3.88 3.88 0 0 0 3.88 3.88h18.86a3.88 3.88 0 0 0 3.88-3.88V49.68a3.88 3.88 0 0 0-3.88-3.88" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 19.858, x2: 31.462, y1: 48.43, y2: 65.814, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgActivityFeed as default };
