import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgReliability = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgReliability" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M53 105.32 12.58 81.43 9.32 20.49 53 .81 96.68 20.5l-3.31 60.98-40.36 23.85zM16.46 79.08 53 100.68l36.48-21.56 3.05-56.11L53 5.19 13.46 23.01z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "m53.03 91.19-39.5-23.34a1.99 1.99 0 0 1-.7-2.74c.56-.95 1.79-1.27 2.74-.7l37.46 22.14 37.41-22.1c.95-.56 2.18-.25 2.74.7s.25 2.18-.7 2.74l-39.44 23.3z" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M53 65.55c11.477 0 20.78-9.303 20.78-20.78S64.477 23.99 53 23.99s-20.78 9.304-20.78 20.78S41.524 65.55 53 65.55" }),
        React.createElement("path", { fill: "#fff", d: "m50.69 56.91-8.06-7.07c-.83-.73-.91-1.99-.18-2.82s1.99-.91 2.82-.18l4.67 4.1 10.45-15.19c.63-.91 1.87-1.14 2.78-.51s1.14 1.87.51 2.78l-13 18.9z" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 73.769, x2: 32.22, y1: 45.463, y2: 45.463, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgReliability as default };
