import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgPriceCalculator = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgPriceCalculator" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M41.66 49.79H11.48c-4.52 0-8.19-3.68-8.19-8.19V11.41c-.01-4.52 3.67-8.19 8.19-8.19h30.19c4.52 0 8.19 3.68 8.19 8.19V41.6c0 4.52-3.68 8.19-8.19 8.19zM11.48 7.22c-2.31 0-4.19 1.88-4.19 4.19V41.6c0 2.31 1.88 4.19 4.19 4.19h30.19c2.31 0 4.19-1.88 4.19-4.19V11.41c0-2.31-1.88-4.19-4.19-4.19zm83.04 43H64.33c-4.52 0-8.19-3.68-8.19-8.19V11.84c0-4.52 3.68-8.19 8.19-8.19h30.19c4.52 0 8.19 3.68 8.19 8.19v30.19c0 4.52-3.68 8.19-8.19 8.19M64.34 7.65c-2.31 0-4.19 1.88-4.19 4.19v30.19c0 2.31 1.88 4.19 4.19 4.19h30.19c2.31 0 4.19-1.88 4.19-4.19V11.84c0-2.31-1.88-4.19-4.19-4.19z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M26.57 39.44c-1.1 0-2-.9-2-2V15.57c0-1.1.9-2 2-2s2 .9 2 2v21.88c0 1.1-.9 2-2 2z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M37.51 28.5H15.63c-1.1 0-2-.9-2-2s.9-2 2-2h21.88c1.1 0 2 .9 2 2s-.9 2-2 2m52.86-4.59H68.49c-1.1 0-2-.9-2-2s.9-2 2-2h21.88c1.1 0 2 .9 2 2s-.9 2-2 2m0 10.05H68.49c-1.1 0-2-.9-2-2s.9-2 2-2h21.88c1.1 0 2 .9 2 2s-.9 2-2 2m-48.4 68.82H11.78c-4.52 0-8.19-3.68-8.19-8.19V64.4c0-4.52 3.68-8.19 8.19-8.19h30.19c4.52 0 8.19 3.68 8.19 8.19v30.19c0 4.52-3.68 8.19-8.19 8.19M11.78 60.21c-2.31 0-4.19 1.88-4.19 4.19v30.19c0 2.31 1.88 4.19 4.19 4.19h30.19c2.31 0 4.19-1.88 4.19-4.19V64.4c0-2.31-1.88-4.19-4.19-4.19z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M34.61 89.23c-.51 0-1.02-.2-1.41-.59L17.73 73.17c-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0l15.47 15.47a2.003 2.003 0 0 1-1.41 3.42z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M19.14 89.23a2.004 2.004 0 0 1-1.41-3.42L33.2 70.34c.78-.78 2.05-.78 2.83 0s.78 2.05 0 2.83L20.56 88.64c-.39.39-.9.59-1.41.59z" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M94.52 102.78H64.33c-4.52 0-8.19-3.68-8.19-8.19V64.4c0-4.52 3.68-8.19 8.19-8.19h30.19c4.52 0 8.19 3.68 8.19 8.19v30.19c0 4.52-3.68 8.19-8.19 8.19M64.33 60.21c-2.31 0-4.19 1.88-4.19 4.19v30.19c0 2.31 1.88 4.19 4.19 4.19h30.19c2.31 0 4.19-1.88 4.19-4.19V64.4c0-2.31-1.88-4.19-4.19-4.19z" }),
        React.createElement("path", { fill: `url(#${id}:__b)`, d: "M79.43 90.63c-3.43 0-6.21-2.79-6.21-6.21 0-1.1.9-2 2-2s2 .9 2 2a2.21 2.21 0 1 0 2.21-2.21c-3.43 0-6.21-2.79-6.21-6.21s2.79-6.21 6.21-6.21 6.21 2.79 6.21 6.21c0 1.1-.9 2-2 2s-2-.9-2-2a2.21 2.21 0 1 0-2.21 2.21c3.43 0 6.21 2.79 6.21 6.21s-2.79 6.21-6.21 6.21" }),
        React.createElement("path", { fill: `url(#${id}:__c)`, d: "M79.43 67.89c-1.1 0-2-.9-2-2v-.73c0-1.1.9-2 2-2s2 .9 2 2v.73c0 1.1-.9 2-2 2" }),
        React.createElement("path", { fill: `url(#${id}:__d)`, d: "M79.43 97.26c-1.1 0-2-.9-2-2v-.73c0-1.1.9-2 2-2s2 .9 2 2v.73c0 1.1-.9 2-2 2" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 102.698, x2: 56.14, y1: 80.271, y2: 80.271, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__b`, x1: 85.637, x2: 73.22, y1: 80.557, y2: 80.557, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__c`, x1: 79.464, x2: 79.464, y1: 63.16, y2: 67.89, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__d`, x1: 79.464, x2: 79.464, y1: 92.53, y2: 97.26, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgPriceCalculator as default };
