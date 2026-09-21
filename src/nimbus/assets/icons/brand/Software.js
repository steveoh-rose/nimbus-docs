import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgSoftware = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgSoftware" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M97.57 97.29H8.43c-4.1 0-7.43-3.33-7.43-7.43V16.14c0-4.1 3.33-7.43 7.43-7.43h89.14c4.1 0 7.43 3.33 7.43 7.43v73.72c0 4.1-3.33 7.43-7.43 7.43M8.43 12.71C6.54 12.71 5 14.25 5 16.14v73.72c0 1.89 1.54 3.43 3.43 3.43h89.14c1.89 0 3.43-1.54 3.43-3.43V16.14c0-1.89-1.54-3.43-3.43-3.43z" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M89.21 60.02H52c-3.21 0-5.82-2.61-5.82-5.82V37.36c0-3.21 2.61-5.82 5.82-5.82h37.22c3.21 0 5.82 2.61 5.82 5.82V54.2c0 3.21-2.61 5.82-5.82 5.82zm-37.22-24.6c-1.07 0-1.94.87-1.94 1.94V54.2c0 1.07.87 1.94 1.94 1.94h37.22c1.07 0 1.94-.87 1.94-1.94V37.36c0-1.07-.87-1.94-1.94-1.94H51.99" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M63.33 87.4H52c-3.25 0-5.88-2.64-5.88-5.88V68.5c0-3.25 2.64-5.88 5.88-5.88h11.33c3.25 0 5.88 2.64 5.88 5.88v13.02c0 3.25-2.64 5.88-5.88 5.88M52 66.61c-1.04 0-1.88.84-1.88 1.88v13.02c0 1.04.84 1.88 1.88 1.88h11.33c1.04 0 1.88-.84 1.88-1.88V68.49c0-1.04-.84-1.88-1.88-1.88zM89.21 87.4H77.88c-3.25 0-5.88-2.64-5.88-5.88V68.5c0-3.25 2.64-5.88 5.88-5.88h11.33c3.25 0 5.88 2.64 5.88 5.88v13.02c0 3.25-2.64 5.88-5.88 5.88M77.88 66.61c-1.04 0-1.88.84-1.88 1.88v13.02c0 1.04.84 1.88 1.88 1.88h11.33c1.04 0 1.88-.84 1.88-1.88V68.49c0-1.04-.84-1.88-1.88-1.88zM37.65 87.38H16.79c-3.24 0-5.87-2.63-5.87-5.87V36.68c0-3.24 2.63-5.87 5.87-5.87h20.86c3.24 0 5.87 2.63 5.87 5.87v44.83c0 3.24-2.63 5.87-5.87 5.87M16.79 34.79c-1.04 0-1.89.85-1.89 1.89v44.83c0 1.04.85 1.89 1.89 1.89h20.86c1.04 0 1.89-.85 1.89-1.89V36.68c0-1.04-.85-1.89-1.89-1.89zM13.6 22.27a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36M23.87 22.27a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36M34.14 22.27a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 95.027, x2: 46.18, y1: 46.255, y2: 46.255, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgSoftware as default };
