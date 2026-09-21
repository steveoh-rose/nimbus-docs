import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgCaseStudy = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgCaseStudy" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M12.15 105c-5.13 0-9.28-4.15-9.28-9.26V10.25c0-.1 0-.21.01-.31C3.06 4.89 7.09 1 12.13 1h33.08a14.9 14.9 0 0 1 10.88 4.74l15.1 16.23a14.84 14.84 0 0 1 3.98 10.12v14.07c0 1.1-.9 2-2 2s-2-.9-2-2V32.09c0-2.75-1.03-5.38-2.91-7.4L53.16 8.46C51.12 6.26 48.22 5 45.21 5H12.13c-2.89 0-5.19 2.25-5.25 5.13v85.61c0 2.9 2.36 5.26 5.26 5.26l61.01-.69h.02a2 2 0 0 1 .02 4l-61.03.69z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M41.19 56.06H14.97c-1.1 0-2-.9-2-2s.9-2 2-2H41.2c1.1 0 2 .9 2 2s-.9 2-2 2zm0 12.7H14.97c-1.1 0-2-.9-2-2s.9-2 2-2H41.2c1.1 0 2 .9 2 2s-.9 2-2 2zm0 15.28H14.97c-1.1 0-2-.9-2-2s.9-2 2-2H41.2c1.1 0 2 .9 2 2s-.9 2-2 2zm-3.88-40.68H18.85a5.89 5.89 0 0 1-5.88-5.88V20.67a5.89 5.89 0 0 1 5.88-5.88h18.46a5.89 5.89 0 0 1 5.88 5.88v16.81a5.89 5.89 0 0 1-5.88 5.88M18.85 18.79c-1.04 0-1.88.84-1.88 1.88v16.81c0 1.04.84 1.88 1.88 1.88h18.46c1.04 0 1.88-.84 1.88-1.88V20.67c0-1.04-.84-1.88-1.88-1.88zm54.33 77.79c-6.85 0-13.61-3.14-17.96-9.07-7.27-9.89-5.14-23.85 4.75-31.12 4.79-3.52 10.67-4.97 16.55-4.07s11.06 4.03 14.58 8.82c7.27 9.89 5.14 23.85-4.75 31.12a22.17 22.17 0 0 1-13.16 4.32zm-.05-40.51c-3.76 0-7.54 1.15-10.8 3.54-8.11 5.97-9.86 17.42-3.89 25.53S75.86 95 83.97 89.03s9.86-17.42 3.89-25.53c-3.57-4.86-9.12-7.44-14.74-7.44z" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M73.15 84.08c5.385 0 9.75-4.365 9.75-9.75s-4.365-9.75-9.75-9.75-9.75 4.365-9.75 9.75 4.365 9.75 9.75 9.75" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M98.36 104.31c-1.27 0-2.47-.5-3.37-1.4L84.82 92.74c-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0l10.17 10.17c.2.2.43.23.54.23s.35-.03.54-.23c.2-.2.23-.43.23-.54s-.03-.35-.23-.54L88.73 88.83c-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0l10.17 10.17c.9.9 1.4 2.1 1.4 3.37s-.5 2.47-1.4 3.37-2.1 1.4-3.37 1.4" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 73.315, x2: 73.315, y1: 64.58, y2: 84.08, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgCaseStudy as default };
