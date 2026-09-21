import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgIx = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgIx" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M53 105C24.33 105 1 81.67 1 53S24.33 1 53 1s52 23.33 52 52-23.33 52-52 52M53 5C26.53 5 5 26.53 5 53s21.53 48 48 48 48-21.53 48-48S79.47 5 53 5" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, fillRule: "evenodd", d: "M82.18 85.8c.39.39.9.59 1.41.59A2.004 2.004 0 0 0 85 82.97L55.03 53 85 23.03c.78-.78.78-2.05 0-2.83s-2.05-.78-2.83 0L52.202 50.172 22.23 20.2c-.78-.78-2.05-.78-2.83 0s-.78 2.05 0 2.83L49.375 53 19.41 82.97a2.003 2.003 0 0 0 1.41 3.42c.51 0 1.02-.2 1.41-.59l29.973-29.973z", clipRule: "evenodd" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M8.92 13.3a4.38 4.38 0 1 0 0-8.76 4.38 4.38 0 0 0 0 8.76M8.92 101.46a4.38 4.38 0 1 0 0-8.76 4.38 4.38 0 0 0 0 8.76M97.08 13.3a4.38 4.38 0 1 0 0-8.76 4.38 4.38 0 0 0 0 8.76M97.08 101.46a4.38 4.38 0 1 0 0-8.76 4.38 4.38 0 0 0 0 8.76" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 85.569, x2: 18.815, y1: 54.115, y2: 54.115, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgIx as default };
