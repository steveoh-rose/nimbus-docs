import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgHeart = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgHeart" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "m53 101.57-1.03-.62c-1.31-.79-32.33-19.71-45.35-43.44-3.67-5.71-5.61-12.49-5.61-19.6C1 19.63 14.01 4.77 30 4.77c9.55 0 17.76 4.31 23 11.94C58.24 9.08 66.46 4.77 76 4.77c15.99 0 29 14.86 29 33.13 0 7.11-1.94 13.89-5.61 19.6-13.02 23.73-44.04 42.64-45.35 43.44l-1.03.62zM30 8.77C16.22 8.77 5 21.84 5 37.9c0 6.37 1.73 12.42 5.01 17.49l.07.13c11.18 20.44 37.38 37.83 42.91 41.35 5.53-3.52 31.73-20.91 42.91-41.35l.07-.13c3.28-5.08 5.01-11.13 5.01-17.49 0-16.06-11.21-29.13-25-29.13-9.17 0-16.91 4.64-21.24 12.73l-1.76 3.3-1.76-3.3C46.9 13.41 39.16 8.77 29.98 8.77z" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "m43.21 74.89-14.2-39.37-7.58 14.67h-9.3c-1.1 0-2-.9-2-2s.9-2 2-2H19l10.67-20.64 13.52 37.48 5.98-16.84h12.8l8.07-12.47 9.88 20.61 4.81-8.14h9.07c1.1 0 2 .9 2 2s-.9 2-2 2h-6.79l-7.46 12.63-10.04-20.93-5.37 8.3H51.99z" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 95.778, x2: 10.13, y1: 51.042, y2: 51.042, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgHeart as default };
