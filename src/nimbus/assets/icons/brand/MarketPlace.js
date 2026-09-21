import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgMarketPlace = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgMarketPlace" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M81.59 35.14c-6.03 0-10.94-4.91-10.94-10.94s4.91-10.94 10.94-10.94 10.94 4.91 10.94 10.94-4.91 10.94-10.94 10.94m0-17.66c-3.71 0-6.72 3.02-6.72 6.72s3.02 6.72 6.72 6.72 6.72-3.02 6.72-6.72-3.02-6.72-6.72-6.72" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M52.43 22.23c5.777 0 10.46-4.683 10.46-10.46S58.207 1.31 52.43 1.31 41.97 5.993 41.97 11.77s4.683 10.46 10.46 10.46" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M52.43 77.84a2.11 2.11 0 0 1-2.11-2.11V30.14a2.11 2.11 0 1 1 4.22 0v45.6c0 1.16-.94 2.11-2.11 2.11zm41.74-13.86c-6.03 0-10.94-4.91-10.94-10.94S88.14 42.1 94.17 42.1s10.94 4.91 10.94 10.94-4.91 10.94-10.94 10.94m0-17.66c-3.71 0-6.72 3.02-6.72 6.72s3.02 6.72 6.72 6.72 6.72-3.02 6.72-6.72-3.02-6.72-6.72-6.72M82.73 91.58c-6.03 0-10.94-4.91-10.94-10.94S76.7 69.7 82.73 69.7s10.94 4.91 10.94 10.94-4.91 10.94-10.94 10.94m0-17.66c-3.71 0-6.72 3.02-6.72 6.72s3.02 6.72 6.72 6.72 6.72-3.02 6.72-6.72-3.02-6.72-6.72-6.72M53 105.26c-6.03 0-10.94-4.91-10.94-10.94S46.97 83.38 53 83.38s10.94 4.91 10.94 10.94-4.91 10.94-10.94 10.94m0-17.66c-3.71 0-6.72 3.02-6.72 6.72s3.02 6.72 6.72 6.72 6.72-3.02 6.72-6.72S56.7 87.6 53 87.6m-29.73 6.22c-6.03 0-10.94-4.91-10.94-10.94s4.91-10.94 10.94-10.94 10.94 4.91 10.94 10.94-4.91 10.94-10.94 10.94m0-17.66c-3.71 0-6.72 3.02-6.72 6.72s3.02 6.72 6.72 6.72 6.72-3.02 6.72-6.72-3.02-6.72-6.72-6.72M11.83 63.88C5.8 63.88.89 58.97.89 52.94S5.8 42 11.83 42s10.94 4.91 10.94 10.94-4.91 10.94-10.94 10.94m0-17.66c-3.71 0-6.72 3.02-6.72 6.72s3.02 6.72 6.72 6.72 6.72-3.02 6.72-6.72-3.02-6.72-6.72-6.72m11.44-11.08c-6.03 0-10.94-4.91-10.94-10.94s4.91-10.94 10.94-10.94 10.94 4.91 10.94 10.94-4.91 10.94-10.94 10.94m0-17.66c-3.71 0-6.72 3.02-6.72 6.72s3.02 6.72 6.72 6.72 6.72-3.02 6.72-6.72-3.02-6.72-6.72-6.72" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 60.051, x2: 45.266, y1: 4.605, y2: 19.39, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgMarketPlace as default };
