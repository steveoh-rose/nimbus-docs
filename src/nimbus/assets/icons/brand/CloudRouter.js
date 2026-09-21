import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgCloudRouter = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgCloudRouter" }, props),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M78.75 90.71H48.38c-1.1 0-2-.9-2-2s.9-2 2-2h30.37c5.8 0 11.25-2.26 15.33-6.35 4.1-4.09 6.36-9.54 6.36-15.34s-2.26-11.24-6.35-15.34a21.54 21.54 0 0 0-10.81-5.88 1.999 1.999 0 0 1 .83-3.91c4.86 1.02 9.29 3.43 12.81 6.96 4.85 4.85 7.52 11.3 7.52 18.16s-2.67 13.32-7.53 18.17c-4.84 4.85-11.29 7.52-18.16 7.52z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M38.37 90.71h-16.7c-11.09 0-20.11-9.02-20.11-20.11 0-7.9 4.66-15.11 11.87-18.35a2 2 0 0 1 2.64 1 2 2 0 0 1-1 2.64c-5.78 2.6-9.51 8.37-9.51 14.7 0 8.88 7.23 16.11 16.11 16.11h16.69c1.1 0 2 .9 2 2s-.9 2-2 2z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M49.38 90.71H29.72c-1.1 0-2-.9-2-2s.9-2 2-2h19.66c9.01 0 17.48-3.51 23.83-9.87C79.58 70.46 83.09 62 83.09 53c0-3.36-.5-6.69-1.48-9.91-1.6-5.23-4.5-10.05-8.39-13.94-6.37-6.37-14.83-9.87-23.83-9.87-18.59 0-33.72 15.13-33.72 33.72 0 1.1-.9 2.01-2 2.01a2 2 0 0 1-2-2c0-20.81 16.92-37.73 37.72-37.73 10.07 0 19.54 3.92 26.66 11.05 4.35 4.35 7.6 9.75 9.39 15.6 1.1 3.59 1.66 7.32 1.66 11.07 0 10.06-3.92 19.53-11.05 26.66-7.11 7.12-16.58 11.05-26.66 11.05z" }),
        React.createElement("path", { fill: `url(#${id}:__b)`, fillRule: "evenodd", d: "M36.64 60.619c.328.22.715.34 1.11.34l.01-.01c.51 0 1.02-.2 1.41-.59l5.865-5.864q.123-.11.227-.237a1.985 1.985 0 0 0-.122-2.688l-5.97-5.96c-.78-.78-2.05-.78-2.83 0s-.78 2.05 0 2.83L38.9 51H28.02c-1.1 0-2 .9-2 2s.9 2 2 2h10.86l-2.54 2.54a2.004 2.004 0 0 0 .3 3.079", clipRule: "evenodd" }),
        React.createElement("path", { fill: `url(#${id}:__c)`, fillRule: "evenodd", d: "M57.6 60.37c.39.39.9.59 1.41.59l.01.01a2.004 2.004 0 0 0 1.41-3.42L57.88 55h10.85c1.1 0 2-.9 2-2s-.9-2-2-2H57.88l2.55-2.55c.78-.78.78-2.05 0-2.83s-2.05-.78-2.83 0l-5.97 5.96a1.98 1.98 0 0 0-.59 1.42c0 .624.29 1.184.741 1.551z", clipRule: "evenodd" }),
        React.createElement("path", { fill: `url(#${id}:__d)`, fillRule: "evenodd", d: "M52.93 40.02c.39.39.9.59 1.41.59a2.004 2.004 0 0 0 1.41-3.42l-5.96-5.97a1.984 1.984 0 0 0-2.82 0L41 37.19c-.78.78-.78 2.05 0 2.83s2.05.78 2.83 0l2.55-2.55v10.86c0 1.1.9 2 2 2s2-.9 2-2V37.47z", clipRule: "evenodd" }),
        React.createElement("path", { fill: `url(#${id}:__e)`, fillRule: "evenodd", d: "M46.38 68.51V57.66c0-1.1.9-2 2-2s2 .9 2 2v10.85l2.55-2.55c.78-.78 2.05-.78 2.83 0s.78 2.05 0 2.83l-5.96 5.97c-.38.38-.88.59-1.41.59h-.01a2 2 0 0 1-1.076-.316 2 2 0 0 1-.42-.36L41 68.79c-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0z", clipRule: "evenodd" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 104.425, x2: 46.38, y1: 66.126, y2: 66.126, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__b`, x1: 43.054, x2: 32.042, y1: 47.535, y2: 61.155, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__c`, x1: 61.052, x2: 61.052, y1: 45.035, y2: 60.97, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__d`, x1: 42.931, x2: 56.541, y1: 47.663, y2: 36.663, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__e`, x1: 42.932, x2: 56.54, y1: 72.685, y2: 61.676, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgCloudRouter as default };
