import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgLogistics = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgLogistics" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], fillRule: "evenodd", d: "M3 17a2 2 0 0 0-2 2v53.928a2 2 0 0 0 2 2h4.887c.149 7.312 6.123 13.195 13.471 13.195 7.349 0 13.323-5.883 13.472-13.195h36.164c.148 7.312 6.123 13.195 13.471 13.195s13.323-5.883 13.471-13.195h4.887a2 2 0 0 0 2-2v-19.29c0-.386-.111-.763-.32-1.087l-10.9-16.853a2 2 0 0 0-1.68-.913H74.991V19a2 2 0 0 0-2-2zm90.935 57.928h-18.94a9.474 9.474 0 0 0 18.94 0m-72.577 9.195a9.474 9.474 0 0 1-9.47-9.195h18.94a9.474 9.474 0 0 1-9.47 9.195m53.633-45.338v32.143h25.832v-16.7l-9.988-15.443zm-4-2.007V21H5v49.928h65.991v-34.15", clipRule: "evenodd" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M87.907 43.669h-8.031v9.18h13.768z" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 91.776, x2: 85.788, y1: 45.115, y2: 54.097, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgLogistics as default };
