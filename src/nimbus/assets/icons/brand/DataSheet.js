import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgDataSheet = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgDataSheet" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M81.42 97.59H31.98c-4.9 0-8.89-3.99-8.89-8.89V9.89c0-4.9 3.99-8.89 8.89-8.89h32.64c2.46 0 4.84 1.03 6.51 2.84l16.81 18.07a8.84 8.84 0 0 1 2.38 6.06V88.7c0 4.9-3.99 8.89-8.89 8.89zM31.98 5a4.89 4.89 0 0 0-4.89 4.89V88.7c0 2.7 2.19 4.89 4.89 4.89h49.44c2.7 0 4.89-2.19 4.89-4.89V27.97c0-1.24-.46-2.42-1.31-3.33L68.2 6.56A4.91 4.91 0 0 0 64.62 5z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M81.14 28.99h-10.5c-4.9 0-8.89-3.99-8.89-8.89V9.78c0-1.1.9-2 2-2s2 .9 2 2v10.31c0 2.7 2.2 4.89 4.89 4.89h10.5c1.1 0 2 .9 2 2s-.9 2-2 2z" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, fillRule: "evenodd", d: "M59.24 54.28h14c0-7.73-6.27-14-14-14zm-5.36 19.36c7.73 0 14-6.27 14-14h-14v-14c-7.73 0-14 6.27-14 14s6.27 14 14 14", clipRule: "evenodd" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M77.9 105H24.58c-4.9 0-8.89-3.99-8.89-8.89V14.35c0-1.1.9-2 2-2s2 .9 2 2v81.76c0 2.7 2.19 4.89 4.89 4.89H77.9c1.1 0 2 .9 2 2s-.9 2-2 2" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 44.715, x2: 68.303, y1: 45.218, y2: 68.806, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgDataSheet as default };
