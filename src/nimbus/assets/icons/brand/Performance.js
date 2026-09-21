import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgPerformance = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgPerformance" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M105 75.93H1.02L1 73.91c.01-28.66 23.34-51.98 52-51.98 9.09 0 18.04 2.38 25.89 6.89a58 58 0 0 1 3.18 1.98c.69.47 1.37.95 2.04 1.45.34.25.67.51.99.76.66.52 1.3 1.05 1.93 1.59.32.28.63.55.94.84 5.3 4.82 9.49 10.57 12.43 17.08 3.05 6.74 4.59 13.94 4.59 21.4v2zm-99.96-4h95.92a47.5 47.5 0 0 0-4.2-17.75A47.85 47.85 0 0 0 85.27 38.4c-.29-.27-.57-.52-.86-.77-.58-.5-1.17-.99-1.78-1.47-.3-.23-.61-.47-.92-.7-.61-.45-1.24-.9-1.88-1.33l-.96-.63q-.975-.63-1.98-1.2A48 48 0 0 0 53 25.94c-25.79 0-46.91 20.46-47.96 46z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M26.11 34.63a2.79 2.79 0 1 0 0-5.58 2.79 2.79 0 0 0 0 5.58M79.78 34.63a2.79 2.79 0 1 0 0-5.58 2.79 2.79 0 0 0 0 5.58M8.8 53.73a2.79 2.79 0 1 0 0-5.58 2.79 2.79 0 0 0 0 5.58M97.47 53.73a2.79 2.79 0 1 0 0-5.58 2.79 2.79 0 0 0 0 5.58M53 26.72a2.79 2.79 0 1 0 0-5.58 2.79 2.79 0 0 0 0 5.58M59.43 66.11a2.008 2.008 0 0 1-1.67-3.1l15.44-23.6a2.01 2.01 0 0 1 2.77-.58c.92.6 1.18 1.84.58 2.77L61.11 65.2c-.38.59-1.02.9-1.68.9z" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M53 83.85c5.479 0 9.92-4.441 9.92-9.92s-4.441-9.92-9.92-9.92-9.92 4.441-9.92 9.92 4.441 9.92 9.92 9.92" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 60.228, x2: 46.206, y1: 67.135, y2: 81.157, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgPerformance as default };
