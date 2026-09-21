import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgManagedSecurity = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgManagedSecurity" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M53 105.08 15.03 94.16l-3.12-58.34h82.18L90.92 94.2zM18.87 91.1 53 100.91l34.08-9.78 2.79-51.32H16.13z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M83.05 39.38c-1.1 0-2-.9-2-2V21.49c0-9.09-7.39-16.48-16.48-16.48H41.44c-9.09 0-16.48 7.4-16.48 16.48v15.89c0 1.1-.9 2-2 2s-2-.9-2-2V21.49C20.95 10.19 30.14 1 41.44 1h23.13c11.29 0 20.48 9.19 20.48 20.48v15.89c0 1.1-.9 2-2 2zM53.03 91.84l-36.6-10.53a2 2 0 0 1-1.37-2.47c.3-1.06 1.41-1.68 2.47-1.37l35.5 10.21 35.45-10.17c1.06-.3 2.17.31 2.47 1.37s-.31 2.17-1.37 2.47z" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "m66.92 63.9-2.9-1.29c.22-1.16.26-2.37.09-3.58l2.96-1.14a.92.92 0 0 0 .53-1.2c-1.74-4.39-.81-4.26-5.35-2.48-.69-1.01-1.52-1.88-2.47-2.59 2.02-4.45 2.08-3.51-2.21-5.47a.92.92 0 0 0-1.22.47l-1.29 2.9c-1.16-.22-2.37-.26-3.58-.09-1.72-4.57-1.01-3.95-5.43-2.31-.48.18-.71.72-.53 1.2l1.14 2.96c-1.01.69-1.88 1.52-2.59 2.47-4.45-2.02-3.51-2.08-5.47 2.21a.92.92 0 0 0 .47 1.22l2.9 1.29c-.22 1.16-.26 2.37-.09 3.58l-2.96 1.14a.92.92 0 0 0-.53 1.2l1.19 3.09c.18.48.72.72 1.2.53l1.9-.73 1.07-.41c.69 1.01 1.52 1.88 2.47 2.59-2.02 4.45-2.08 3.51 2.21 5.47a.92.92 0 0 0 1.22-.47l1.29-2.9c1.16.22 2.37.26 3.58.09l.35.9c1.37 3.98 1.28 2.65 5.08 1.41.48-.18.71-.72.53-1.2l-1.14-2.96c1.01-.69 1.88-1.52 2.59-2.47 4.45 2.02 3.51 2.08 5.47-2.21a.92.92 0 0 0-.47-1.22zm-12.95 3.2a6.64 6.64 0 0 1-7.53-5.59 6.64 6.64 0 0 1 5.59-7.53 6.64 6.64 0 0 1 7.53 5.59 6.64 6.64 0 0 1-5.59 7.53" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 38.33, x2: 67.665, y1: 61.047, y2: 61.047, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgManagedSecurity as default };
