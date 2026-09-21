import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgSupport = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgSupport" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M33.89 54A2.877 2.877 0 0 1 31 51.11v-6.37h-1.29c-3.21 0-5.83-2.61-5.83-5.83V8.18c0-3.21 2.61-5.83 5.83-5.83h49.87c3.21 0 5.83 2.61 5.83 5.83v30.73c0 3.21-2.61 5.83-5.83 5.83H44.34l-8.41 8.41c-.55.55-1.29.85-2.04.85M29.72 6.36c-1.01 0-1.83.82-1.83 1.83v30.73c0 1.01.82 1.83 1.83 1.83h5.29v7.68l7.68-7.68h36.9c1.01 0 1.83-.82 1.83-1.83V8.18c0-1.01-.82-1.83-1.83-1.83H29.72zm-10.33 96.87c-.78 0-1.55-.13-2.31-.4a6.92 6.92 0 0 1-3.97-3.55L1.9 75.97c-1.66-3.46-.2-7.63 3.26-9.29l1.83-.88c3.46-1.66 7.63-.2 9.29 3.26l11.21 23.31c.81 1.68.91 3.57.3 5.32a6.92 6.92 0 0 1-3.55 3.97l-1.83.88c-.96.46-1.98.69-3.01.69zM10 69.1c-.43 0-.87.09-1.28.29l-1.83.88c-1.47.71-2.1 2.48-1.39 3.96l11.21 23.31c.34.71.94 1.25 1.69 1.51s1.55.22 2.27-.13l1.83-.88c.71-.34 1.25-.94 1.51-1.69s.22-1.55-.13-2.27L12.67 70.77a2.97 2.97 0 0 0-2.68-1.68z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M70.68 96.05H26.94c-1.1 0-2-.9-2-2s.9-2 2-2h43.74c3.14 0 6.09-1.22 8.31-3.44l21.46-21.46c.52-.52.79-1.21.76-1.94s-.35-1.4-.91-1.88c-.93-.8-2.31-.84-3.29-.1L76.74 78.71h-24.3v-4h17.87c2.07 0 3.75-1.68 3.75-3.75s-1.68-3.75-3.75-3.75h-7.09c-3.33 0-6.46-1.3-8.82-3.65a8.42 8.42 0 0 0-5.99-2.48h-2.8c-3.17 0-6.29.56-9.26 1.65l-20.97 7.73c-1.03.38-2.19-.15-2.57-1.18-.38-1.04.15-2.19 1.18-2.57l20.97-7.73c3.42-1.26 7-1.9 10.64-1.9h2.8c3.33 0 6.46 1.3 8.82 3.65a8.42 8.42 0 0 0 5.99 2.48h7.09c4.28 0 7.75 3.48 7.75 7.75 0 .65-.08 1.28-.23 1.89l16.75-12.79c2.47-1.88 5.97-1.78 8.32.24a6.64 6.64 0 0 1 2.29 4.76c.07 1.83-.63 3.62-1.93 4.92L81.79 91.44a15.65 15.65 0 0 1-11.13 4.61z" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M42.69 30.12a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15" }),
        React.createElement("path", { fill: `url(#${id}:__b)`, d: "M65.58 30.12a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 48.155, x2: 37.553, y1: 17.483, y2: 28.084, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__b`, x1: 71.045, x2: 60.443, y1: 17.483, y2: 28.084, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgSupport as default };
