import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgGraph = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgGraph" }, props),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M3 102.28c-.49 0-.98-.18-1.36-.54-.81-.75-.85-2.02-.1-2.83l30.12-32.39 2.21-.49 23.92 9.61 34.36-54.78c.59-.94 1.82-1.22 2.76-.63s1.22 1.82.63 2.76L60.29 79.2l-2.44.79-24.2-9.72-29.19 31.38c-.39.42-.93.64-1.46.64z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M103 102.28H1V5.72c0-1.1.9-2 2-2s2 .9 2 2v92.56h98c1.1 0 2 .9 2 2s-.9 2-2 2" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 95.824, x2: 1.004, y1: 62.478, y2: 62.478, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgGraph as default };
