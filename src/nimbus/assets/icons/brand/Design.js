import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgDesign = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgDesign" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M58.45 25.74h28.89v4H58.45zm-39.17 0h28.9v4h-28.9z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M94.43 36.83c-5.01 0-9.09-4.08-9.09-9.09s4.08-9.09 9.09-9.09 9.09 4.08 9.09 9.09-4.08 9.09-9.09 9.09m0-14.18c-2.81 0-5.09 2.28-5.09 5.09s2.28 5.09 5.09 5.09 5.09-2.28 5.09-5.09-2.28-5.09-5.09-5.09M12.19 36.83c-5.01 0-9.09-4.08-9.09-9.09s4.08-9.09 9.09-9.09 9.09 4.08 9.09 9.09-4.08 9.09-9.09 9.09m0-14.18c-2.81 0-5.09 2.28-5.09 5.09s2.28 5.09 5.09 5.09 5.09-2.28 5.09-5.09-2.28-5.09-5.09-5.09m86.62 48.92h-4c0-20.86-15.57-38.69-36.21-41.46l.53-3.96c22.62 3.04 39.68 22.56 39.68 45.42m-89.66 2c-1.1 0-2-.9-2-2 0-22.44 16.7-41.92 38.85-45.3 1.09-.17 2.11.58 2.28 1.68a2 2 0 0 1-1.67 2.28C26.4 33.32 11.15 51.09 11.15 71.58c0 1.1-.9 2-2 2z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M17.38 85.95H1V69.57h16.38zM5 81.95h8.38v-8.38H5zm100 5.4H88.62V70.97H105zm-12.38-4H101v-8.38h-8.38zM61.17 35.93H44.79V19.55h16.38zm-12.38-4h8.38v-8.38h-8.38z" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "m72.13 76.31-19.15-6.84-19.15 6.84 19.15-50.39zM52.98 65.23l12.33 4.4-12.33-32.45-12.33 32.45z" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 66.465, x2: 32.139, y1: 69.018, y2: 42.928, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgDesign as default };
