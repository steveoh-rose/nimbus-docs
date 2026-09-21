import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgNews = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgNews" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M79.87 85.8c-.62 0-1.24-.11-1.83-.35l-37.4-14.61H12.25V27.4l28.39-.19L78.05 12.6c1.55-.61 3.29-.41 4.67.53 1.37.94 2.19 2.49 2.19 4.15v63.49a5.036 5.036 0 0 1-5.03 5.03zM16.25 66.84H41.4l38.1 14.88c.44.17.79 0 .96-.11s.45-.38.45-.85V17.28c0-.47-.28-.74-.45-.85a1.03 1.03 0 0 0-.96-.11L41.4 31.2l-25.15.17v35.48z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M16.25 70.85H7.49a5.91 5.91 0 0 1-5.9-5.9V33.28c0-3.25 2.65-5.9 5.9-5.9h8.75v43.46zM7.49 31.39a1.9 1.9 0 0 0-1.9 1.9v31.67c0 1.05.85 1.9 1.9 1.9h4.75V31.39z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M22.64 86.25h-1.39c-4.97 0-9.01-4.04-9.01-9.01v-10.4h19.41v10.4c0 4.97-4.04 9.01-9.01 9.01m-6.4-15.4v6.4c0 2.76 2.25 5.01 5.01 5.01h1.39c2.76 0 5.01-2.25 5.01-5.01v-6.4H16.24" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, fillRule: "evenodd", d: "M92.53 67.98c.38.61 1.03.95 1.7.95l.01.01c.36 0 .72-.1 1.05-.3 5.65-3.51 9.31-11.4 9.31-20.15s-3.67-16.66-9.34-20.16c-.94-.58-2.17-.29-2.75.65s-.29 2.17.65 2.75c4.45 2.74 7.44 9.37 7.44 16.75s-2.91 13.96-7.42 16.75c-.94.58-1.23 1.81-.65 2.75m-4.58-8.1a1.99 1.99 0 0 0 1.775 1.09h-.005.01-.005c.308 0 .617-.07.905-.22 3.76-1.92 6.18-6.74 6.18-12.26s-2.42-10.34-6.17-12.26c-.98-.5-2.19-.11-2.69.87s-.11 2.19.87 2.69c2.35 1.21 4 4.79 4 8.7s-1.64 7.49-4 8.7c-.99.5-1.37 1.71-.87 2.69", clipRule: "evenodd" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 102.105, x2: 81.718, y1: 63.02, y2: 54.613, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgNews as default };
