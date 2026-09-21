import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgInfrastructure = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgInfrastructure" }, props),
        React.createElement("path", { fill: `url(#${id}:__a)`, fillRule: "evenodd", d: "M21.39 87.14h15.5V55h7.34c1.1 0 2-.9 2-2s-.9-2-2-2h-7.34V18.86h-15.5c-1.1 0-2 .9-2 2s.9 2 2 2h11.5V51h-11.5c-1.1 0-2 .9-2 2s.9 2 2 2h11.5v28.14h-11.5c-1.1 0-2 .9-2 2s.9 2 2 2", clipRule: "evenodd" }),
        React.createElement("path", { fill: `url(#${id}:__b)`, fillRule: "evenodd", d: "M69.11 87.14h15.5v-.01c1.1 0 2-.9 2-2s-.9-2-2-2h-11.5V55h11.5c1.1 0 2-.9 2-2s-.9-2-2-2h-11.5V22.86h11.5c1.1 0 2-.9 2-2s-.9-2-2-2h-15.5V51h-7.04c-1.1 0-2 .9-2 2s.9 2 2 2h7.04z", clipRule: "evenodd" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M20.23 32.06H4.16C2.42 32.06 1 30.64 1 28.9V12.83c0-1.74 1.42-3.16 3.16-3.16h16.07c1.74 0 3.16 1.42 3.16 3.16V28.9c0 1.74-1.42 3.16-3.16 3.16M5 28.06h14.39V13.67H5zm15.23 68.27H4.16C2.42 96.33 1 94.91 1 93.17V77.1c0-1.74 1.42-3.16 3.16-3.16h16.07c1.74 0 3.16 1.42 3.16 3.16v16.07c0 1.74-1.42 3.16-3.16 3.16M5 92.33h14.39V77.94H5zm96.84-60.27H85.77c-1.74 0-3.16-1.42-3.16-3.16V12.83c0-1.74 1.42-3.16 3.16-3.16h16.07c1.74 0 3.16 1.42 3.16 3.16V28.9c0 1.74-1.42 3.16-3.16 3.16m-15.23-4H101V13.67H86.61zm15.23 68.27H85.77c-1.74 0-3.16-1.42-3.16-3.16V77.1c0-1.74 1.42-3.16 3.16-3.16h16.07c1.74 0 3.16 1.42 3.16 3.16v16.07c0 1.74-1.42 3.16-3.16 3.16m-15.23-4H101V77.94H86.61zM59.86 78.44H46.44c-2.32 0-4.21-1.89-4.21-4.21V31.77c0-2.32 1.89-4.21 4.21-4.21h13.42c2.32 0 4.21 1.89 4.21 4.21v42.47c0 2.32-1.89 4.21-4.21 4.21zM46.44 31.55c-.11 0-.21.09-.21.21v42.47c0 .11.09.21.21.21h13.42c.11 0 .21-.09.21-.21V31.77c0-.11-.09-.21-.21-.21H46.44zM20.23 64.2H4.16C2.42 64.2 1 62.78 1 61.04V44.97c0-1.74 1.42-3.16 3.16-3.16h16.07c1.74 0 3.16 1.42 3.16 3.16v16.07c0 1.74-1.42 3.16-3.16 3.16M5 60.2h14.39V45.81H5zm96.84 4H85.77c-1.74 0-3.16-1.42-3.16-3.16V44.97c0-1.74 1.42-3.16 3.16-3.16h16.07c1.74 0 3.16 1.42 3.16 3.16v16.07c0 1.74-1.42 3.16-3.16 3.16m-15.23-4H101V45.81H86.61z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M53.15 42.17a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 33.035, x2: 33.035, y1: 87.14, y2: 18.86, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__b`, x1: 73.565, x2: 73.565, y1: 18.86, y2: 87.14, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgInfrastructure as default };
