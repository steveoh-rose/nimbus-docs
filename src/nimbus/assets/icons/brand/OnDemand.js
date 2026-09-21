import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgOnDemand = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgOnDemand" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M53.12 71.06c-13.36 0-24.23-10.87-24.23-24.23L28.65 1h48.46l.24 45.82c0 13.37-10.87 24.24-24.23 24.24M32.67 5l.22 41.82c0 11.16 9.07 20.24 20.23 20.24s20.23-9.07 20.23-20.23L73.13 5z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M47.66 44.72c.79 0 1.62.01 2.46.02.93.01 1.89.03 2.87.03q1.47 0 2.88-.03c.85-.01 1.67-.02 2.46-.02 1.35 0 4.52 0 5.88.75.3.17 1.01.56 1.01 3.08 0 6.74-5.48 12.22-12.22 12.22s-12.22-5.48-12.22-12.22c0-2.52.71-2.91 1.01-3.08 1.36-.75 4.53-.75 5.88-.75m10.67-4c-1.67 0-3.47.05-5.34.05s-3.66-.05-5.34-.05c-6.34 0-10.89.74-10.89 7.83 0 8.96 7.26 16.22 16.22 16.22s16.22-7.26 16.22-16.22c0-7.09-4.55-7.83-10.89-7.83z" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M91.72 96.33H14.28v-6.15c0-6.32 5.14-11.46 11.46-11.46h54.52c6.32 0 11.46 5.14 11.46 11.46zm-73.45-4h69.45v-2.15c0-4.12-3.35-7.46-7.46-7.46H25.74c-4.12 0-7.46 3.35-7.46 7.46v2.15z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M102.23 105H3.77v-2c0-5.88 4.79-10.67 10.67-10.67h77.12c5.88 0 10.67 4.79 10.67 10.67zm-94.16-4h89.86a6.685 6.685 0 0 0-6.37-4.67H14.44c-2.98 0-5.51 1.97-6.37 4.67" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 91.7, x2: 14.28, y1: 87.819, y2: 87.819, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgOnDemand as default };
