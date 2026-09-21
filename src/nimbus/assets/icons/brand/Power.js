import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgPower = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgPower" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M53 105C24.33 105 1 81.67 1 53S24.33 1 53 1s52 23.33 52 52-23.33 52-52 52M53 5C26.53 5 5 26.53 5 53s21.53 48 48 48 48-21.53 48-48S79.47 5 53 5" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M53 47.16c-1.1 0-2-.9-2-2V19.48c0-1.1.9-2 2-2s2 .9 2 2v25.68c0 1.1-.9 2-2 2" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M53 81.84c-15.81 0-28.68-12.87-28.68-28.68 0-12.48 7.97-23.44 19.84-27.29 1.05-.34 2.18.24 2.52 1.29s-.24 2.18-1.29 2.52a24.61 24.61 0 0 0-17.07 23.48c0 13.61 11.07 24.68 24.68 24.68s24.68-11.07 24.68-24.68c0-10.74-6.86-20.17-17.07-23.48a2.004 2.004 0 0 1-.297-3.688 2 2 0 0 1 1.527-.122c11.87 3.84 19.84 14.81 19.84 27.29 0 15.81-12.87 28.68-28.68 28.68" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 53.034, x2: 53.034, y1: 17.48, y2: 47.16, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgPower as default };
