import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgAi = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgAi" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M44.45 105.31 18.97 90.74V73.87L7.7 67.24V38.78l11.27-6.42V15.49L44.44.69 53 5.63 61.56.69 87.03 15.5v16.86l11.27 6.42v28.46l-11.27 6.63v16.87l-25.48 14.57-8.55-4.94zM53 95.75l8.56 4.94 21.47-12.28V71.57l11.27-6.63V41.1l-11.27-6.42V17.8L61.55 5.31 53 10.25l-8.55-4.94-21.48 12.48v16.88L11.7 41.09v23.84l11.27 6.63V88.4l21.47 12.28L53 95.74z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M40.32 82.15h-1.15c-3.69 0-6.69-3-6.69-6.69v-4.81c0-3.69 3-6.69 6.69-6.69h28.79a2.69 2.69 0 0 0 2.69-2.69v-3.56a2.69 2.69 0 0 0-2.69-2.69H39.17c-3.69 0-6.69-3-6.69-6.69v-3.64c0-3.69 3-6.69 6.69-6.69h17.3c1.1 0 2 .9 2 2s-.9 2-2 2h-17.3a2.69 2.69 0 0 0-2.69 2.69v3.64a2.69 2.69 0 0 0 2.69 2.69h28.79c3.69 0 6.69 3 6.69 6.69v3.56c0 3.69-3 6.69-6.69 6.69H39.17a2.69 2.69 0 0 0-2.69 2.69v4.81a2.69 2.69 0 0 0 2.69 2.69h1.15c1.1 0 2 .9 2 2s-.9 2-2 2" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M66.82 41.97h-4.21c-1.1 0-2-.9-2-2s.9-2 2-2h4.21a2.69 2.69 0 0 0 2.69-2.69v-4.73a2.69 2.69 0 0 0-2.69-2.69h-30.4c-1.1 0-2-.9-2-2s.9-2 2-2h30.4c3.69 0 6.69 3 6.69 6.69v4.73c0 3.69-3 6.69-6.69 6.69" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M53 100.06c-1.1 0-2-.9-2-2V7.94c0-1.1.9-2 2-2s2 .9 2 2v90.12c0 1.1-.9 2-2 2" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M68.78 82.15H47.37c-1.1 0-2-.9-2-2s.9-2 2-2h21.41c1.1 0 2 .9 2 2s-.9 2-2 2" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M34.48 33.48a7.63 7.63 0 1 0 0-15.26 7.63 7.63 0 0 0 0 15.26" }),
        React.createElement("path", { fill: `url(#${id}:__b)`, d: "M68.78 87.78a7.63 7.63 0 1 0 0-15.26 7.63 7.63 0 0 0 0 15.26" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 40.039, x2: 29.254, y1: 20.623, y2: 31.409, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__b`, x1: 74.339, x2: 63.554, y1: 74.923, y2: 85.709, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgAi as default };
