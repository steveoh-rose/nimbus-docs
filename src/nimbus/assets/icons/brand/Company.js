import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgCompany = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgCompany" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M59.83 105c-1.1 0-2-.9-2-2V5h-44.3v98c0 1.1-.9 2-2 2s-2-.9-2-2V1h52.3v102c0 1.1-.9 2-2 2m34.64 0c-1.1 0-2-.9-2-2V45.42H64.73c-1.1 0-2-.9-2-2s.9-2 2-2h31.74V103c0 1.1-.9 2-2 2" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M49.81 18.33H20.4c-1.1 0-2-.9-2-2s.9-2 2-2h29.42c1.1 0 2 .9 2 2s-.9 2-2 2z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M49.81 31.95H20.4c-1.1 0-2-.9-2-2s.9-2 2-2h29.42c1.1 0 2 .9 2 2s-.9 2-2 2zm0 13.61H20.4c-1.1 0-2-.9-2-2s.9-2 2-2h29.42c1.1 0 2 .9 2 2s-.9 2-2 2zm0 13.62H20.4c-1.1 0-2-.9-2-2s.9-2 2-2h29.42c1.1 0 2 .9 2 2s-.9 2-2 2zm38.85 0h-23.1c-1.1 0-2-.9-2-2s.9-2 2-2h23.1c1.1 0 2 .9 2 2s-.9 2-2 2m0 13.61h-23.1c-1.1 0-2-.9-2-2s.9-2 2-2h23.1c1.1 0 2 .9 2 2s-.9 2-2 2m-38.85 0H20.4c-1.1 0-2-.9-2-2s.9-2 2-2h29.42c1.1 0 2 .9 2 2s-.9 2-2 2zM40.71 105c-1.1 0-2-.9-2-2V91.15h-6.06V103c0 1.1-.9 2-2 2s-2-.9-2-2V87.15h14.06V103c0 1.1-.9 2-2 2m41.43 0c-1.1 0-2-.9-2-2V91.15h-6.06V103c0 1.1-.9 2-2 2s-2-.9-2-2V87.15h14.06V103c0 1.1-.9 2-2 2" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 51.811, x2: 18.4, y1: 16.397, y2: 16.397, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgCompany as default };
