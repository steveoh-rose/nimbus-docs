import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgUsers = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgUsers" }, props),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M53.01 15.93H53c-7.947 0-14.39 6.443-14.39 14.39v15.11c0 7.947 6.443 14.39 14.39 14.39h.01c7.947 0 14.39-6.443 14.39-14.39V30.32c0-7.947-6.443-14.39-14.39-14.39" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M80.85 68.12c-6.11 0-11.45-4.13-12.97-10.04a2.004 2.004 0 0 1 3.88-1 9.385 9.385 0 0 0 9.1 7.04c5.18 0 9.4-4.22 9.4-9.4V42.77c0-5.18-4.22-9.4-9.4-9.4-2.24 0-4.41.8-6.11 2.25-.84.72-2.1.62-2.82-.22s-.62-2.1.22-2.82a13.4 13.4 0 0 1 8.71-3.21c7.39 0 13.4 6.01 13.4 13.4v11.95c0 7.39-6.01 13.4-13.4 13.4z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M53 105C24.33 105 1 81.67 1 53S24.33 1 53 1s52 23.33 52 52-23.33 52-52 52M53 5C26.53 5 5 26.53 5 53s21.53 48 48 48 48-21.53 48-48S79.47 5 53 5" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M75.69 99.57c-1.1 0-2-.9-2-2V80.42c0-7.2-5.86-13.06-13.06-13.06H45.18c-7.2 0-13.06 5.86-13.06 13.06v17.06c0 1.1-.9 2-2 2s-2-.9-2-2V80.42c0-9.41 7.65-17.06 17.06-17.06h15.45c9.41 0 17.06 7.65 17.06 17.06v17.15c0 1.1-.9 2-2 2" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M95.27 81.11c-.81 0-1.57-.49-1.87-1.29-1.58-4.17-5.63-6.97-10.09-6.97h-5.12c-1.4 0-2.77.27-4.05.79-1.02.42-2.19-.07-2.61-1.1-.42-1.02.07-2.19 1.1-2.61 1.77-.72 3.64-1.08 5.56-1.08h5.12c6.11 0 11.67 3.84 13.83 9.56a2.007 2.007 0 0 1-1.87 2.71zm-84.82 0a2.005 2.005 0 0 1-1.87-2.71c2.16-5.72 7.72-9.56 13.83-9.56h5.12c1.92 0 3.8.36 5.56 1.08 1.02.42 1.51 1.58 1.1 2.61a2.015 2.015 0 0 1-2.61 1.1c-1.28-.52-2.65-.79-4.05-.79h-5.12c-4.46 0-8.52 2.8-10.09 6.97-.3.8-1.06 1.29-1.87 1.29zm14.88-12.99c-7.39 0-13.4-6.01-13.4-13.4V42.77c0-7.39 6.01-13.4 13.4-13.4 3.19 0 6.28 1.14 8.71 3.21.84.72.94 1.98.22 2.82s-1.98.94-2.82.22a9.42 9.42 0 0 0-6.1-2.25c-5.18 0-9.4 4.22-9.4 9.4v11.95c0 5.18 4.22 9.4 9.4 9.4 4.29 0 8.03-2.9 9.1-7.04a2.01 2.01 0 0 1 2.44-1.44c1.07.28 1.71 1.37 1.44 2.44a13.395 13.395 0 0 1-12.97 10.04z" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 63.141, x2: 34.679, y1: 53.468, y2: 34.798, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgUsers as default };
