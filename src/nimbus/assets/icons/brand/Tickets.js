import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgTickets = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgTickets" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M105 75.37H1V57.01l1.52-.37a11.06 11.06 0 0 0 8.44-10.76c0-5.11-3.47-9.54-8.44-10.76L1 34.75V16.36h104v18.38l-1.51.38a11.08 11.08 0 0 0-8.37 10.74c0 5.07 3.44 9.5 8.37 10.74l1.51.38v18.39m-100-4h96V60.02a15.07 15.07 0 0 1-9.88-14.16c0-6.38 3.99-11.99 9.88-14.16V20.35H5v11.31c5.94 2.14 9.97 7.76 9.97 14.19S10.94 57.9 5 60.04v11.33" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M32.88 62.75c-.41 0-.83-.13-1.18-.38a2.02 2.02 0 0 1-.8-1.96l1.67-9.73-7.07-6.89c-.54-.53-.74-1.33-.51-2.05.24-.72.86-1.25 1.61-1.36l9.77-1.42 4.37-8.85a2 2 0 0 1 3.58 0l4.37 8.85 9.77 1.42a1.997 1.997 0 0 1 1.1 3.41l-7.07 6.89 1.67 9.73a2 2 0 0 1-.8 1.96c-.62.45-1.43.51-2.11.15l-8.74-4.59-8.74 4.59c-.29.15-.61.23-.93.23zm9.67-9.08c.32 0 .64.08.93.23l6.08 3.2-1.16-6.77c-.11-.65.1-1.31.58-1.77l4.92-4.8-6.8-.99c-.65-.09-1.21-.5-1.51-1.09l-3.04-6.16-3.04 6.16c-.29.59-.85 1-1.51 1.09l-6.8.99 4.92 4.8c.47.46.69 1.12.58 1.77l-1.16 6.77 6.08-3.2c.29-.15.61-.23.93-.23" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M98.56 82.5H7.44c-1.1 0-2-.9-2-2s.9-2 2-2h91.12c1.1 0 2 .9 2 2s-.9 2-2 2m-3.95 7.14H11.39c-1.1 0-2-.9-2-2s.9-2 2-2h83.22c1.1 0 2 .9 2 2s-.9 2-2 2M79.42 33.49a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36M79.42 48.55a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36M79.42 63.6a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 60.158, x2: 24.896, y1: 46.441, y2: 46.441, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgTickets as default };
