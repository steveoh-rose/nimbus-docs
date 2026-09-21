import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgHelp = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgHelp" }, props),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M72.77 36.32H33.23c-1.68 0-3.04 1.36-3.04 3.04v26.88c0 1.68 1.36 3.04 3.04 3.04h2.61v6.64c0 .62.75.94 1.2.5l7.14-7.14h28.6c1.68 0 3.04-1.36 3.04-3.04V39.36c0-1.68-1.36-3.04-3.04-3.04z" }),
        React.createElement("path", { fill: "#fff", d: "M41.96 54.96a2.88 2.88 0 1 0 0-5.76 2.88 2.88 0 0 0 0 5.76M53 54.96a2.88 2.88 0 1 0 0-5.76 2.88 2.88 0 0 0 0 5.76M64.04 54.96a2.88 2.88 0 1 0 0-5.76 2.88 2.88 0 0 0 0 5.76" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M99.97 79.13h-6.21c-2.78 0-5.03-2.26-5.03-5.03V54.38c0-1.1.9-2 2-2s2 .9 2 2V74.1c0 .57.46 1.03 1.03 1.03h6.21c.57 0 1.03-.46 1.03-1.03V48.33c0-.57-.46-1.03-1.03-1.03H88.72v-2c0-19.47-15.84-35.31-35.31-35.31h-.83c-19.47 0-35.31 15.84-35.31 35.31v2H6.03c-.57 0-1.03.46-1.03 1.03V74.1c0 .57.46 1.03 1.03 1.03h6.21c.57 0 1.03-.46 1.03-1.03V54.38c0-1.1.9-2 2-2s2 .9 2 2V74.1c0 2.78-2.26 5.03-5.03 5.03H6.03C3.25 79.13 1 76.87 1 74.1V48.33c0-2.78 2.26-5.03 5.03-5.03h7.3C14.38 22.54 31.58 5.98 52.59 5.98h.83c21 0 38.21 16.56 39.26 37.31h7.3c2.78 0 5.03 2.26 5.03 5.03v25.77c0 2.78-2.26 5.03-5.03 5.03z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M85.22 95.38H75.16c-1.1 0-2-.9-2-2s.9-2 2-2h10.06c5.33 0 9.67-4.34 9.67-9.67v-4.57c0-1.1.9-2 2-2s2 .9 2 2v4.57c0 7.54-6.13 13.67-13.67 13.67" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M71.01 100.02H58.88c-2.75 0-5-2.24-5-5v-3.29c0-2.75 2.24-5 5-5h12.13c2.75 0 5 2.24 5 5v3.29c0 2.75-2.24 5-5 5m-12.13-9.29c-.55 0-1 .45-1 1v3.29c0 .55.45 1 1 1h12.13c.55 0 1-.45 1-1v-3.29c0-.55-.45-1-1-1z" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 36.803, x2: 65.083, y1: 42.286, y2: 74.303, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgHelp as default };
