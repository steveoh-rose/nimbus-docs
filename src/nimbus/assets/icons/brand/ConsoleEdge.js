import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgConsoleEdge = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgConsoleEdge" }, props),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M78.75 99.64H48.38a1.92 1.92 0 0 1 0-3.84h30.37c5.82 0 11.29-2.26 15.39-6.37 4.11-4.1 6.38-9.57 6.38-15.39s-2.26-11.28-6.38-15.39a21.57 21.57 0 0 0-10.85-5.9 1.934 1.934 0 0 1-1.49-2.28 1.927 1.927 0 0 1 2.28-1.49c4.85 1.02 9.26 3.42 12.78 6.94 4.84 4.84 7.5 11.27 7.5 18.11s-2.67 13.28-7.51 18.11c-4.82 4.84-11.26 7.5-18.11 7.5z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M38.37 99.72h-16.7c-11.09 0-20.11-9.02-20.11-20.11 0-7.9 4.66-15.11 11.87-18.35a2 2 0 0 1 2.64 1c.45 1 0 2.19-1 2.64-5.78 2.6-9.51 8.37-9.51 14.7 0 8.88 7.23 16.11 16.11 16.11h16.69c1.1 0 2 .9 2 2s-.9 2-2 2z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M49.38 99.68H29.72c-1.09 0-1.97-.88-1.97-1.97s.88-1.97 1.97-1.97h19.66c9.02 0 17.49-3.51 23.85-9.88C79.6 79.48 83.11 71 83.11 62c0-3.36-.5-6.7-1.48-9.91-1.6-5.23-4.51-10.05-8.4-13.95-6.37-6.37-14.85-9.88-23.85-9.88-18.61 0-33.75 15.14-33.75 33.75 0 1.09-.88 1.98-1.97 1.98s-1.97-.88-1.97-1.97c0-20.79 16.91-37.7 37.69-37.7 10.06 0 19.53 3.92 26.64 11.04 4.35 4.35 7.6 9.74 9.38 15.59 1.1 3.59 1.65 7.31 1.65 11.07 0 10.05-3.92 19.51-11.04 26.64C68.9 95.78 59.44 99.7 49.37 99.7z" }),
        React.createElement("path", { fill: `url(#${id}:__b)`, d: "M51.98 79.76c-9.5 0-17.14-7.93-16.67-17.52.39-8.11 6.79-14.92 14.86-15.77 4.32-.46 8.36.74 11.55 3.04a3.213 3.213 0 0 1 .5 4.77c-1.1 1.21-2.93 1.38-4.26.43a10.16 10.16 0 0 0-5.54-1.9c-5.63-.23-10.54 4.34-10.7 9.98S46.22 73.36 52 73.36c2.38 0 4.56-.81 6.31-2.16 1.26-.98 3.05-.9 4.2.21 1.4 1.35 1.29 3.64-.24 4.84a16.6 16.6 0 0 1-10.26 3.53" }),
        React.createElement("path", { fill: `url(#${id}:__c)`, d: "M58.58 10.07c0-3.08-2.5-5.58-5.58-5.58s-5.58 2.5-5.58 5.58c0 2.47 1.61 4.56 3.83 5.29l1.73 5.83 1.75-5.83a5.57 5.57 0 0 0 3.84-5.3z" }),
        React.createElement("path", { fill: `url(#${id}:__d)`, d: "M80.68 18.72a5.57 5.57 0 0 0-2.31-7.54c-2.72-1.44-6.1-.41-7.54 2.31a5.57 5.57 0 0 0 .9 6.47l-1.21 5.96 4.28-4.33c2.31.4 4.72-.69 5.88-2.87" }),
        React.createElement("path", { fill: `url(#${id}:__e)`, d: "M25.32 18.72a5.57 5.57 0 0 1 2.31-7.54c2.72-1.44 6.1-.41 7.54 2.31a5.57 5.57 0 0 1-.9 6.47l1.21 5.96-4.28-4.33c-2.31.4-4.72-.69-5.88-2.87" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 104.345, x2: 46.46, y1: 75.135, y2: 75.135, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__b`, x1: 59.321, x2: 36.037, y1: 74.945, y2: 55.288, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__c`, x1: 56.929, x2: 46.02, y1: 18.773, y2: 11.483, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__d`, x1: 75.851, x2: 75.851, y1: 25.92, y2: 10.53, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__e`, x1: 26.428, x2: 36.764, y1: 23.837, y2: 16.344, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgConsoleEdge as default };
