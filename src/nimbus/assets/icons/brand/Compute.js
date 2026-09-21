import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgCompute = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgCompute" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M83.51 92.57H21.78c-4.8 0-8.7-3.9-8.7-8.7V22.13c0-4.8 3.9-8.7 8.7-8.7h61.73c4.8 0 8.7 3.9 8.7 8.7v61.73c0 4.8-3.9 8.7-8.7 8.7zM21.78 17.43c-2.59 0-4.7 2.11-4.7 4.7v61.73c0 2.59 2.11 4.7 4.7 4.7h61.73c2.59 0 4.7-2.11 4.7-4.7V22.13c0-2.59-2.11-4.7-4.7-4.7z" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M72.61 77.96H32.68c-2.76 0-5-2.24-5-5V33.04c0-2.76 2.24-5 5-5H72.6c2.76 0 5 2.24 5 5v39.92c0 2.76-2.24 5-5 5zM32.68 32.04c-.55 0-1 .45-1 1v39.92c0 .55.45 1 1 1H72.6c.55 0 1-.45 1-1V33.04c0-.55-.45-1-1-1z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M29.69 17.43c-1.1 0-2-.9-2-2V3.35c0-1.1.9-2 2-2s2 .9 2 2v12.08c0 1.1-.9 2-2 2m22.96 0c-1.1 0-2-.9-2-2V3.35c0-1.1.9-2 2-2s2 .9 2 2v12.08c0 1.1-.9 2-2 2m22.95 0c-1.1 0-2-.9-2-2V3.35c0-1.1.9-2 2-2s2 .9 2 2v12.08c0 1.1-.9 2-2 2m0 87.21c-1.1 0-2-.9-2-2V90.56c0-1.1.9-2 2-2s2 .9 2 2v12.08c0 1.1-.9 2-2 2m-22.95 0c-1.1 0-2-.9-2-2V90.56c0-1.1.9-2 2-2s2 .9 2 2v12.08c0 1.1-.9 2-2 2m49.64-72.6H90.21c-1.1 0-2-.9-2-2s.9-2 2-2h12.08c1.1 0 2 .9 2 2s-.9 2-2 2m0 45.92H90.21c-1.1 0-2-.9-2-2s.9-2 2-2h12.08c1.1 0 2 .9 2 2s-.9 2-2 2M15.08 32.04H3c-1.1 0-2-.9-2-2s.9-2 2-2h12.08c1.1 0 2 .9 2 2s-.9 2-2 2m0 22.96H3c-1.1 0-2-.9-2-2s.9-2 2-2h12.08c1.1 0 2 .9 2 2s-.9 2-2 2M103 55H90.92c-1.1 0-2-.9-2-2s.9-2 2-2H103c1.1 0 2 .9 2 2s-.9 2-2 2M15.08 77.96H3c-1.1 0-2-.9-2-2s.9-2 2-2h12.08c1.1 0 2 .9 2 2s-.9 2-2 2m14.61 26.68c-1.1 0-2-.9-2-2V90.56c0-1.1.9-2 2-2s2 .9 2 2v12.08c0 1.1-.9 2-2 2" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 70.826, x2: 35.545, y1: 35.902, y2: 71.184, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgCompute as default };
