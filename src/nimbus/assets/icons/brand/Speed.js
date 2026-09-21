import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgSpeed = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgSpeed" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M42.77 105H31.03l10.38-50H28.98l5.5-54h34.08L54.72 51h23.81zm-6.82-4h4.67l30.46-46H49.46L63.3 5H38.09l-4.68 46h12.92z" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M53.31 11.58h-9.07c-1.1 0-2-.9-2-2s.9-2 2-2h9.07c1.1 0 2 .9 2 2s-.9 2-2 2" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 55.307, x2: 42.24, y1: 9.647, y2: 9.647, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgSpeed as default };
