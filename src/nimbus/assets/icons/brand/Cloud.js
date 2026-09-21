import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgCloud = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgCloud" }, props),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M79.04 91.14H48.33a2.02 2.02 0 0 1-2.02-2.02c0-1.11.91-2.02 2.02-2.02h30.71c5.87 0 11.38-2.28 15.51-6.42 4.15-4.14 6.43-9.64 6.43-15.51S98.7 53.8 94.55 49.66a21.7 21.7 0 0 0-10.93-5.94 2.024 2.024 0 0 1-1.56-2.4c.23-1.1 1.3-1.79 2.4-1.56 4.92 1.03 9.4 3.47 12.96 7.04 4.91 4.91 7.61 11.43 7.61 18.37s-2.7 13.47-7.61 18.37c-4.89 4.91-11.42 7.61-18.37 7.61z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M38.2 91.14H21.32C10.1 91.14.98 82.01.98 70.8c0-7.99 4.71-15.28 12-18.56a2.019 2.019 0 1 1 1.66 3.68c-5.84 2.63-9.62 8.47-9.62 14.87 0 8.99 7.31 16.3 16.3 16.3H38.2c1.12 0 2.02.91 2.02 2.02s-.91 2.02-2.02 2.02z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M49.34 91.14H29.46a2.02 2.02 0 0 1-2.02-2.02c0-1.11.91-2.02 2.02-2.02h19.88c9.11 0 17.67-3.55 24.1-9.99 6.44-6.45 9.99-15.01 9.99-24.11 0-3.4-.5-6.77-1.5-10.02a34.15 34.15 0 0 0-8.49-14.1c-6.44-6.44-15-9.99-24.1-9.99-18.8 0-34.1 15.3-34.1 34.1 0 1.12-.91 2.03-2.02 2.03s-2.02-.9-2.02-2.02c-.01-21.03 17.11-38.15 38.14-38.15 10.18 0 19.76 3.97 26.97 11.17 4.4 4.4 7.69 9.86 9.5 15.77 1.11 3.64 1.67 7.4 1.67 11.2 0 10.17-3.97 19.75-11.17 26.96-7.19 7.2-16.77 11.17-26.97 11.17z" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 105.015, x2: 46.31, y1: 66.29, y2: 66.29, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgCloud as default };
