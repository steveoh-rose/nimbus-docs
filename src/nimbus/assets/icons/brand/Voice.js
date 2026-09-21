import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgVoice = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgVoice" }, props),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M25.57 83.51c-1.1 0-2-.9-2-2V24.49c0-1.1.9-2 2-2s2 .9 2 2v57.03c0 1.1-.9 2-2 2z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M43.86 105c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2s2 .9 2 2v100c0 1.1-.9 2-2 2m18.28-28.65c-1.1 0-2-.9-2-2v-42.7c0-1.1.9-2 2-2s2 .9 2 2v42.7c0 1.1-.9 2-2 2m18.29 14.33c-1.1 0-2-.9-2-2V17.33c0-1.1.9-2 2-2s2 .9 2 2v71.35c0 1.1-.9 2-2 2m18.28-21.49c-1.1 0-2-.9-2-2V42.51c0-1.1.9-2 2-2s2 .9 2 2v24.68c0 1.1-.9 2-2 2m-91.42 0c-1.1 0-2-.9-2-2V38.81c0-1.1.9-2 2-2s2 .9 2 2v28.38c0 1.1-.9 2-2 2" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 25.604, x2: 25.604, y1: 83.52, y2: 22.49, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgVoice as default };
