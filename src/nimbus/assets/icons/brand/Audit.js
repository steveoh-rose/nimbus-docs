import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgAudit = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgAudit" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], fillRule: "evenodd", d: "M84.32 4H21a6 6 0 0 0-6 6v86a6 6 0 0 0 6 6h63.32a6 6 0 0 0 6-6V10a6 6 0 0 0-6-6M21 0c-5.523 0-10 4.477-10 10v86c0 5.523 4.477 10 10 10h63.32c5.523 0 10-4.477 10-10V10c0-5.523-4.477-10-10-10z", clipRule: "evenodd" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, fillRule: "evenodd", d: "M20 21c0-1.105.91-2 2.031-2H82.97C84.09 19 85 19.895 85 21s-.91 2-2.031 2H22.03C20.91 23 20 22.105 20 21", clipRule: "evenodd" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], fillRule: "evenodd", d: "M20 37c0-1.105.91-2 2.031-2H82.97C84.09 35 85 35.895 85 37s-.91 2-2.031 2H22.03C20.91 39 20 38.105 20 37M20 53c0-1.105.91-2 2.031-2H82.97C84.09 51 85 51.895 85 53s-.91 2-2.031 2H22.03C20.91 55 20 54.105 20 53M20 69c0-1.105.91-2 2.031-2H82.97C84.09 67 85 67.895 85 69s-.91 2-2.031 2H22.03C20.91 71 20 70.105 20 69", clipRule: "evenodd" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 83.014, x2: 10.218, y1: 16.695, y2: 73.916, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgAudit as default };
