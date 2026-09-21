import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgLead = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgLead" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M67.69 83.06H38.32v-20.4L10.2 20.16h85.6L67.68 62.65v20.4zm-25.37-4h21.37V61.45l24.67-37.29H17.64l24.67 37.29v17.61z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M61.41 24.16H44.73v-2c0-4.6 3.74-8.34 8.34-8.34s8.34 3.74 8.34 8.34zm-12.19-4h7.7a4.339 4.339 0 0 0-7.7 0m24.84-1.4c-4.6 0-8.34-3.74-8.34-8.34s3.74-8.34 8.34-8.34 8.34 3.74 8.34 8.34-3.74 8.34-8.34 8.34m0-12.68c-2.39 0-4.34 1.95-4.34 4.34s1.95 4.34 4.34 4.34 4.34-1.95 4.34-4.34-1.95-4.34-4.34-4.34M32.08 18.76c-4.6 0-8.34-3.74-8.34-8.34s3.74-8.34 8.34-8.34 8.34 3.74 8.34 8.34-3.74 8.34-8.34 8.34m0-12.68c-2.39 0-4.34 1.95-4.34 4.34s1.95 4.34 4.34 4.34 4.34-1.95 4.34-4.34-1.95-4.34-4.34-4.34m21.36 58.46c-1.1 0-2-.9-2-2v-8.69c0-1.09-.89-1.98-1.98-1.98h-2.3a6.185 6.185 0 1 1 0-12.37h11.88a2.86 2.86 0 1 0 0-5.72H42.98c-1.1 0-2-.9-2-2s.9-2 2-2h16.06c3.78 0 6.86 3.08 6.86 6.86s-3.08 6.86-6.86 6.86H47.16c-1.2 0-2.18.98-2.18 2.19s.98 2.18 2.18 2.18h2.3c3.3 0 5.98 2.68 5.98 5.98v8.69c0 1.1-.9 2-2 2" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "m53.44 65.37-5.84-5.84c-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0l3.01 3.01 3.01-3.01c.78-.78 2.05-.78 2.83 0s.78 2.05 0 2.83z" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M53 104.07a8.24 8.24 0 1 0 0-16.48 8.24 8.24 0 0 0 0 16.48" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 59.004, x2: 47.356, y1: 90.186, y2: 101.833, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgLead as default };
