import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgDeals = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgDeals" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M53 105c-1.4 0-2.8-.53-3.86-1.6l-11.6-11.6a1.48 1.48 0 0 0-1.03-.43H20.09c-3.01 0-5.46-2.45-5.46-5.46V69.5c0-.39-.15-.76-.43-1.03L2.6 56.86a5.46 5.46 0 0 1 0-7.72l11.6-11.6c.27-.27.43-.65.43-1.03V20.09c0-3.01 2.45-5.46 5.46-5.46H36.5c.39 0 .76-.15 1.03-.43L49.14 2.6a5.46 5.46 0 0 1 7.72 0l11.6 11.6c.27.27.65.43 1.03.43H85.9c3.01 0 5.46 2.45 5.46 5.46V36.5c0 .38.16.76.43 1.03l11.6 11.6a5.46 5.46 0 0 1 0 7.72l-11.6 11.6c-.28.28-.43.64-.43 1.03v16.41c0 3.01-2.45 5.46-5.46 5.46H69.49c-.38 0-.76.16-1.03.43l-11.6 11.6a5.45 5.45 0 0 1-3.86 1.6zM20.09 18.63c-.81 0-1.46.66-1.46 1.46V36.5c0 1.46-.57 2.83-1.6 3.86l-11.6 11.6c-.57.57-.57 1.5 0 2.07l11.6 11.6c1.03 1.03 1.6 2.4 1.6 3.86V85.9c0 .81.66 1.46 1.46 1.46H36.5c1.46 0 2.83.57 3.86 1.6l11.6 11.6c.57.57 1.5.57 2.07 0l11.6-11.6c1.03-1.03 2.4-1.6 3.86-1.6H85.9c.81 0 1.46-.66 1.46-1.46V69.49c0-1.46.57-2.83 1.6-3.86l11.6-11.6c.57-.57.57-1.5 0-2.07l-11.6-11.6a5.42 5.42 0 0 1-1.6-3.86V20.09c0-.81-.66-1.46-1.46-1.46H69.49c-1.46 0-2.83-.57-3.86-1.6l-11.6-11.6c-.57-.57-1.5-.57-2.07 0l-11.6 11.6a5.42 5.42 0 0 1-3.86 1.6z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M27.8 77.8a2.004 2.004 0 0 1-1.41-3.42l45.6-45.59c.78-.78 2.05-.78 2.83 0s.78 2.05 0 2.83l-45.6 45.59c-.39.39-.9.59-1.41.59z" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M36.3 44.24a7.94 7.94 0 1 0 0-15.88 7.94 7.94 0 0 0 0 15.88" }),
        React.createElement("path", { fill: `url(#${id}:__b)`, d: "M69.7 77.64a7.94 7.94 0 1 0 0-15.88 7.94 7.94 0 0 0 0 15.88" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 42.085, x2: 30.862, y1: 30.861, y2: 42.084, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__b`, x1: 75.485, x2: 64.262, y1: 64.261, y2: 75.484, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgDeals as default };
