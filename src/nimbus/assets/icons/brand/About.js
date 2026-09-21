import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgAbout = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgAbout" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M53 105C24.33 105 1 81.67 1 53S24.33 1 53 1s52 23.33 52 52-23.33 52-52 52M53 5C26.53 5 5 26.53 5 53s21.53 48 48 48 48-21.53 48-48S79.47 5 53 5" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M53 29.86a7.63 7.63 0 1 0 0-15.26 7.63 7.63 0 0 0 0 15.26" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M53 90.77c-4.52 0-8.19-3.68-8.19-8.19v-38.1c0-4.52 3.68-8.19 8.19-8.19s8.19 3.68 8.19 8.19v38.1c0 4.52-3.68 8.19-8.19 8.19m0-50.48c-2.31 0-4.19 1.88-4.19 4.19v38.1c0 2.31 1.88 4.19 4.19 4.19s4.19-1.88 4.19-4.19v-38.1c0-2.31-1.88-4.19-4.19-4.19" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 58.559, x2: 47.774, y1: 17.003, y2: 27.789, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgAbout as default };
