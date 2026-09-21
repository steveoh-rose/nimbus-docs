import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgCustomers = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgCustomers" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M103 96.72c-1.1 0-2-.9-2-2v-7.63c0-7.47-6.07-13.54-13.54-13.54H71.52c-7.47 0-13.54 6.07-13.54 13.54v7.53c0 1.1-.9 2-2 2s-2-.9-2-2v-7.53c0-9.67 7.87-17.54 17.54-17.54h15.94c9.67 0 17.54 7.87 17.54 17.54v7.63c0 1.1-.9 2-2 2m-52.98 0c-1.1 0-2-.9-2-2v-7.63c0-7.47-6.07-13.54-13.54-13.54H18.54C11.07 73.55 5 79.62 5 87.09v7.53c0 1.1-.9 2-2 2s-2-.9-2-2v-7.53c0-9.67 7.87-17.54 17.54-17.54h15.94c9.67 0 17.54 7.87 17.54 17.54v7.63c0 1.1-.9 2-2 2M26.51 67.99c-10.07 0-18.26-8.19-18.26-18.26V38.19c0-1.1.9-2 2-2s2 .9 2 2v11.54c0 7.87 6.4 14.26 14.26 14.26s14.26-6.4 14.26-14.26V38.19c0-1.1.9-2 2-2s2 .9 2 2v11.54c0 10.07-8.19 18.26-18.26 18.26" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M14.64 43.63a1.998 1.998 0 0 1-.19-3.99c8.91-.84 16.59-6.84 16.67-6.9l1.27-1 1.25 1.02s3.8 3.04 9.28 3.43a2.003 2.003 0 0 1 .486 3.897c-.25.082-.514.113-.776.093-4.75-.34-8.4-2.25-10.24-3.42-2.71 1.88-9.57 6.1-17.56 6.86h-.19z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M42.1 74.36a1.998 1.998 0 0 1-.89-3.79c5.47-2.71 8-11.84 6.31-15.4-2.28-4.81-1.85-21.07-1.8-22.91 0-10.43-8.62-18.97-19.21-18.97S7.3 21.82 7.3 32.32c.06 1.78.48 18.04-1.8 22.85-1.69 3.56.84 12.69 6.31 15.4.99.49 1.39 1.69.9 2.68a1.99 1.99 0 0 1-2.68.9C2.81 70.57-.79 59.09 1.89 53.45 3.3 50.48 3.5 38.95 3.3 32.38c0-12.76 10.41-23.09 23.21-23.09s23.21 10.33 23.21 23.03c-.2 6.63 0 18.17 1.41 21.13 2.68 5.64-.93 17.12-8.15 20.7-.29.14-.59.21-.89.21z" }),
        React.createElement("path", { fill: `url(#${id}:__b)`, d: "M63.23 40.83c-1.1 0-2-.9-2-2s.9-2 2-2c12.97 0 20.71-6.78 20.78-6.85l1.28-1.14 1.33 1.09s3.8 3.04 9.28 3.43c1.1.08 1.93 1.04 1.85 2.14a1.985 1.985 0 0 1-2.14 1.85c-4.71-.34-8.34-2.22-10.19-3.39-2.9 2.13-10.65 6.87-22.2 6.87z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M79.49 67.99c-10.07 0-18.26-8.19-18.26-18.26v-20.8c0-10.05 8.17-18.22 18.22-18.22s18.31 8.17 18.31 18.22v20.8c0 10.07-8.19 18.26-18.26 18.26zm-.04-53.29c-7.84 0-14.22 6.38-14.22 14.22v20.8c0 7.87 6.4 14.26 14.26 14.26s14.26-6.4 14.26-14.26V28.93c0-7.84-6.42-14.22-14.31-14.22z" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 44.767, x2: 12.601, y1: 37.883, y2: 37.883, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__b`, x1: 97.746, x2: 61.23, y1: 35.035, y2: 35.035, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgCustomers as default };
