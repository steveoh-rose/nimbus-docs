import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgIndustry = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgIndustry" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], fillRule: "evenodd", d: "M77.238 11h13.53L95.5 49.377V92a2 2 0 1 1-4 0V49.623L87.231 15h-6.468l-4.5 35.5H54.5V39.27l-21.5 11v-8.534l-18 9V92a2 2 0 1 1-4 0V48.264l26-13v8.466l21.5-11V46.5h14.237z", clipRule: "evenodd" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], fillRule: "evenodd", d: "M35 62.5a2 2 0 0 1 2 2v13a2 2 0 1 1-4 0v-13a2 2 0 0 1 2-2M52 62.5a2 2 0 0 1 2 2v13a2 2 0 1 1-4 0v-13a2 2 0 0 1 2-2", clipRule: "evenodd" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, fillRule: "evenodd", d: "M69 62.5a2 2 0 0 1 2 2v13a2 2 0 1 1-4 0v-13a2 2 0 0 1 2-2", clipRule: "evenodd" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 70.457, x2: 65.1, y1: 65.177, y2: 66.438, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgIndustry as default };
