import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgSdwan = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgSdwan" }, props),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M78.75 90.64H48.38a1.92 1.92 0 0 1 0-3.84h30.37c5.82 0 11.29-2.26 15.39-6.37 4.11-4.1 6.38-9.57 6.38-15.39s-2.26-11.28-6.38-15.39a21.57 21.57 0 0 0-10.85-5.9 1.934 1.934 0 0 1-1.49-2.28 1.927 1.927 0 0 1 2.28-1.49c4.85 1.02 9.26 3.42 12.78 6.94 4.84 4.84 7.5 11.27 7.5 18.11s-2.67 13.28-7.5 18.11c-4.83 4.84-11.26 7.5-18.11 7.5" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M38.37 90.71h-16.7c-11.09 0-20.11-9.02-20.11-20.11 0-7.9 4.66-15.11 11.87-18.35a2 2 0 0 1 2.64 1 2 2 0 0 1-1 2.64c-5.78 2.6-9.51 8.37-9.51 14.7 0 8.88 7.23 16.11 16.11 16.11h16.69c1.1 0 2 .9 2 2s-.9 2-2 2z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M49.38 90.68H29.72c-1.09 0-1.97-.88-1.97-1.97s.88-1.97 1.97-1.97h19.66c9.02 0 17.49-3.51 23.85-9.88C79.6 70.48 83.11 62 83.11 53c0-3.36-.5-6.7-1.48-9.91a33.8 33.8 0 0 0-8.4-13.95c-6.37-6.37-14.84-9.88-23.85-9.88-18.61 0-33.75 15.14-33.75 33.75 0 1.09-.88 1.98-1.97 1.98s-1.97-.88-1.97-1.97c0-20.79 16.91-37.7 37.69-37.7 10.06 0 19.53 3.92 26.64 11.04 4.35 4.35 7.6 9.74 9.38 15.59 1.1 3.59 1.65 7.31 1.65 11.07 0 10.05-3.92 19.51-11.04 26.64C68.9 86.78 59.44 90.7 49.37 90.7z" }),
        React.createElement("path", { fill: `url(#${id}:__b)`, fillRule: "evenodd", d: "M47.38 71.65c0 1.1.9 2 2 2s2-.9 2-2v-8.884a9.9 9.9 0 0 1-4 0zm-3.417-10.303a9.9 9.9 0 0 1-2.828-2.832L34.85 64.8a2.004 2.004 0 0 0 1.41 3.42h.01c.51 0 1.02-.2 1.41-.59zm-4.24-6.237a9.9 9.9 0 0 1 0-4H30.83c-1.1 0-2 .9-2 2s.9 2 2 2zm1.42-7.417a9.9 9.9 0 0 1 2.832-2.828L37.68 38.57c-.78-.78-2.05-.78-2.83 0s-.78 2.05 0 2.83zm6.237-4.24a9.9 9.9 0 0 1 4 0V34.56c0-1.1-.9-2-2-2s-2 .9-2 2zm7.405 1.412a9.9 9.9 0 0 1 2.832 2.828L63.91 41.4c.78-.78.78-2.05 0-2.83s-2.05-.78-2.83 0zm4.252 6.245a9.9 9.9 0 0 1 0 4h8.883c1.1 0 2-.9 2-2s-.9-2-2-2zm-1.412 7.405a9.9 9.9 0 0 1-2.828 2.832l6.283 6.283c.39.39.9.59 1.41.59h.01a2.004 2.004 0 0 0 1.41-3.42zM43.52 53.11c0-3.23 2.63-5.86 5.86-5.86s5.86 2.63 5.86 5.86-2.63 5.86-5.86 5.86-5.86-2.63-5.86-5.86", clipRule: "evenodd" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 104.345, x2: 46.46, y1: 66.135, y2: 66.135, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__b`, x1: 64.345, x2: 35.304, y1: 39.032, y2: 68.072, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgSdwan as default };
