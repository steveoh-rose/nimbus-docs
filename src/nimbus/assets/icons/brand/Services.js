import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgServices = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgServices" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M24.44 65.33c-.34 0-.68-.09-1-.27L4.12 53.9c-.62-.36-1-1.02-1-1.73V19.39c0-.71.38-1.37 1-1.73L32.51 1.27c.62-.36 1.38-.36 2 0L62.9 17.66c.62.36 1 1.02 1 1.73v32.78c0 1.1-.9 2-2 2s-2-.9-2-2V20.55L33.51 5.31 7.12 20.55v30.47L25.45 61.6c.96.55 1.28 1.78.73 2.73-.37.64-1.04 1-1.73 1z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M72.49 71.07c-.35 0-.69-.09-1-.27L44.27 55.08a1.997 1.997 0 0 1 .484-3.66 2 2 0 0 1 1.516.2l26.22 15.14 26.39-15.24V21.05L72.49 5.81 54.43 16.23c-.96.55-2.18.22-2.73-.73-.55-.96-.22-2.18.73-2.73l19.06-11c.62-.36 1.38-.36 2 0l28.39 16.39c.62.36 1 1.02 1 1.73v32.79c0 .71-.38 1.37-1 1.73L73.49 70.8c-.31.18-.65.27-1 .27" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M53 105c-.35 0-.69-.09-1-.27L23.61 88.34c-.62-.36-1-1.02-1-1.73V53.83c0-.71.38-1.37 1-1.73L52 35.71c.96-.55 2.18-.22 2.73.73.55.96.22 2.18-.73 2.73L26.61 54.98v30.47L53 100.69l26.39-15.24V64.6c0-1.1.9-2 2-2s2 .9 2 2v22c0 .71-.38 1.37-1 1.73L54 104.72c-.31.18-.65.27-1 .27z" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M63.91 53.92V41.34l-10.88-6.28-10.89 6.28v12.58l10.89 6.28z" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 63.904, x2: 42.14, y1: 48.049, y2: 48.049, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgServices as default };
