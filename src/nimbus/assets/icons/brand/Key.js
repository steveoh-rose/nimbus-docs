import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgKey = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 84 32", "data-testid": "SvgKey" }, props),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M16.174 21.922c3.35 0 6.065-2.677 6.065-5.979s-2.716-5.979-6.065-5.979-6.065 2.677-6.065 5.98c0 3.301 2.716 5.978 6.065 5.978" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], fillRule: "evenodd", d: "M6.915 8.216c-2.027 2.512-2.986 5.654-2.861 8.126.22 4.32 2.267 7.164 4.696 8.973 2.507 1.867 5.367 2.586 6.93 2.586 1.662 0 3.59-.12 5.66-1.062 2.054-.934 3.6-1.705 5.951-5.415l1.078-1.993h18.164l4.838 3.902 6.432-4.484 4.68 4.484 5.566-4.484 5.591 4.51 6.011-4.613-2.607-4.297H28.278l-.4-1.48c-1.725-6.377-7.295-8.983-12.197-8.983-3.844 0-6.78 1.768-8.766 4.23M3.75 5.734C6.388 2.467 10.427 0 15.68 0c5.845 0 12.887 2.982 15.634 10.463h47.404L84 19.431l-10.43 9.027-5.521-4.459-5.565 4.484L57.803 24l-6.432 4.484-6.282-5.066H30.928c-2.529 3.684-5.237 5.833-7.893 7.041-2.858 1.3-5.478 1.43-7.354 1.43-2.48 0-6.19-1.025-9.369-3.393C3.056 26.069.302 22.187.016 16.541-.162 13.035 1.153 8.953 3.75 5.734", clipRule: "evenodd" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 20.593, x2: 12.143, y1: 11.848, y2: 20.419, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgKey as default };
