import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgGovernment = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgGovernment" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], fillRule: "evenodd", d: "M6.75 41.738a2 2 0 0 1 2-2h87.985a2 2 0 1 1 0 4H8.749a2 2 0 0 1-2-2m0 50.35a2 2 0 0 1 2-2h87.985a2 2 0 1 1 0 4H8.749a2 2 0 0 1-2-2m-4.775 7.95a2 2 0 0 1 2-2h98.05a2 2 0 1 1 0 4H3.975a2 2 0 0 1-2-2", clipRule: "evenodd" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, fillRule: "evenodd", d: "M83.324 84.137a2 2 0 0 0 4 0v-32.45a2 2 0 1 0-4 0zm-29 2a2 2 0 0 1-2-2v-32.45a2 2 0 1 1 4 0v32.45a2 2 0 0 1-2 2m-31 0a2 2 0 0 1-2-2v-32.45a2 2 0 0 1 4 0v32.45a2 2 0 0 1-2 2", clipRule: "evenodd" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], fillRule: "evenodd", d: "M54.005 3.57a2 2 0 0 0-2.01 0L2.999 32.055a2.01 2.01 0 0 0-1.005 1.47 2 2 0 0 0 .32 1.39 1.99 1.99 0 0 0 1.455.875 2 2 0 0 0 .244.011h97.974a2 2 0 0 0 1.62-.776 2.005 2.005 0 0 0-.613-2.974zm40.6 28.23L53 7.613 11.395 31.8z", clipRule: "evenodd" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 30.279, x2: 52.084, y1: 80.396, y2: 40.916, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgGovernment as default };
