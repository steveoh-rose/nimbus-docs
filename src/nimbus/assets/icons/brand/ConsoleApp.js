import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgConsoleApp = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgConsoleApp" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M99.49 82.32H6.51c-3.04 0-5.51-2.29-5.51-5.1V14.76c0-2.81 2.47-5.1 5.51-5.1h92.98c3.04 0 5.51 2.29 5.51 5.1v62.47c0 2.81-2.47 5.1-5.51 5.1zM6.51 13.66c-.82 0-1.51.5-1.51 1.1v62.47c0 .6.69 1.1 1.51 1.1h92.98c.82 0 1.51-.5 1.51-1.1V14.76c0-.6-.69-1.1-1.51-1.1z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M103 72.42H3c-1.1 0-2-.9-2-2s.9-2 2-2h100c1.1 0 2 .9 2 2s-.9 2-2 2M77.45 96.34h-48.9c-1.1 0-2-.9-2-2s.9-2 2-2h48.89c1.1 0 2 .9 2 2s-.9 2-2 2z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M41.23 96.34c-1.1 0-2-.9-2-2v-13.2c0-1.1.9-2 2-2s2 .9 2 2v13.2c0 1.1-.9 2-2 2m23.54 0c-1.1 0-2-.9-2-2v-13.2c0-1.1.9-2 2-2s2 .9 2 2v13.2c0 1.1-.9 2-2 2" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M53.27 55.54c-8.27 0-14.93-6.91-14.53-15.27.34-7.06 5.91-12.99 12.95-13.74 3.77-.4 7.28.65 10.06 2.64 1.36.97 1.56 2.92.43 4.15-.96 1.06-2.55 1.2-3.71.37a8.96 8.96 0 0 0-4.83-1.66c-4.9-.2-9.18 3.78-9.32 8.69s3.92 9.21 8.95 9.21c2.07 0 3.98-.7 5.49-1.88 1.1-.86 2.65-.78 3.66.18 1.22 1.18 1.13 3.17-.21 4.21a14.46 14.46 0 0 1-8.94 3.07" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 59.646, x2: 39.369, y1: 51.33, y2: 34.216, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgConsoleApp as default };
