import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgCareer = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgCareer" }, props),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M81.54 35.43c-1.1 0-2-.9-2-2V21.82c0-.8-.65-1.44-1.45-1.44H27.91c-.8 0-1.44.65-1.44 1.44v11.61c0 1.1-.9 2-2 2s-2-.9-2-2V21.82c0-3 2.44-5.44 5.44-5.44H78.1c3 0 5.45 2.44 5.45 5.44v11.61c0 1.1-.9 2-2 2z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M103 89.62c-1.1 0-2-.9-2-2V74.63c0-.8-.65-1.45-1.44-1.45H6.44c-.8 0-1.44.65-1.44 1.45v12.99c0 1.1-.9 2-2 2s-2-.9-2-2V74.63c0-3 2.44-5.45 5.44-5.45h93.12c3 0 5.44 2.44 5.44 5.45v12.99c0 1.1-.9 2-2 2m-10.11-27c-1.1 0-2-.9-2-2V47.3c0-.8-.65-1.44-1.44-1.44H16.13c-.8 0-1.44.65-1.44 1.44v13.32c0 1.1-.9 2-2 2s-2-.9-2-2V47.3c0-3 2.44-5.44 5.44-5.44h73.32c3 0 5.44 2.44 5.44 5.44v13.32c0 1.1-.9 2-2 2" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 83.534, x2: 22.47, y1: 26.223, y2: 26.223, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgCareer as default };
