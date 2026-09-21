import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgPolicies = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgPolicies" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], fillRule: "evenodd", d: "M52.28.134a2 2 0 0 1 1.422-.006L96 15.77v33.16l-.004.063c-.489 7.625-3.181 19.51-9.67 30.652-6.503 11.167-16.881 21.678-32.742 26.269a2.02 2.02 0 0 1-1.18-.004c-15.499-4.598-25.629-15.122-31.97-26.284-6.33-11.138-8.954-23.018-9.43-30.636L11 48.928V15.782zM15 18.544 53.009 4.136 92 18.556V48.8c-.415 6.328-2.49 15.974-7.296 25.459L65.212 59.409a2 2 0 0 0-2.424 3.182l19.977 15.22C76.717 88.12 67.27 97.62 53.007 101.913 39.043 97.6 29.81 88.03 23.911 77.65 17.936 67.133 15.454 55.891 15 48.802z", clipRule: "evenodd" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, fillRule: "evenodd", d: "M61.704 59.57c3.529-4.672 2.603-11.32-2.068-14.848S48.317 42.12 44.788 46.79s-2.602 11.319 2.069 14.848 11.318 2.602 14.847-2.069m3.075 2.323c4.813-6.37 3.55-15.434-2.82-20.246s-15.434-3.55-20.246 2.82-3.55 15.434 2.82 20.246 15.434 3.55 20.246-2.82", clipRule: "evenodd" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 63.779, x2: 43.346, y1: 43.278, y2: 63.711, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgPolicies as default };
