import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgCloudRouterSite = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgCloudRouterSite" }, props),
        React.createElement("path", { fill: `url(#${id}:__a)`, fillRule: "evenodd", d: "M51.968 88.28c.434.311.966.495 1.542.495.573 0 1.105-.183 1.538-.492a3.96 3.96 0 0 0 1.463-1.06l9.192-10.57a2.65 2.65 0 0 0-4-3.479L56.16 79.55V59.625a2.65 2.65 0 1 0-5.3 0v19.922l-5.541-6.373a2.65 2.65 0 1 0-4 3.478l9.193 10.572c.414.477.915.829 1.456 1.056", clipRule: "evenodd" }),
        React.createElement("path", { fill: `url(#${id}:__b)`, fillRule: "evenodd", d: "M55.054 17.72a2.64 2.64 0 0 0-1.542-.495c-.574 0-1.105.182-1.539.492a3.96 3.96 0 0 0-1.462 1.06l-9.193 10.57a2.65 2.65 0 0 0 4 3.478l5.544-6.375v19.925a2.65 2.65 0 0 0 5.3 0V26.453l5.54 6.372a2.65 2.65 0 0 0 4-3.477L56.51 18.776a3.96 3.96 0 0 0-1.456-1.056", clipRule: "evenodd" }),
        React.createElement("path", { fill: `url(#${id}:__c)`, fillRule: "evenodd", d: "M48.532 55.05c.31-.435.493-.966.493-1.54s-.182-1.106-.492-1.54a3.96 3.96 0 0 0-1.059-1.46l-10.571-9.193a2.65 2.65 0 0 0-3.478 4l6.374 5.542H19.875a2.65 2.65 0 1 0 0 5.3H39.8l-6.374 5.543a2.65 2.65 0 0 0 3.478 4l10.571-9.193c.478-.416.831-.917 1.058-1.46", clipRule: "evenodd" }),
        React.createElement("path", { fill: `url(#${id}:__d)`, fillRule: "evenodd", d: "M57.47 51.97c-.31.433-.493.965-.493 1.54 0 .574.182 1.105.492 1.539.228.542.58 1.044 1.059 1.46l10.571 9.192a2.65 2.65 0 0 0 3.478-3.999l-6.374-5.543h19.924a2.65 2.65 0 0 0 0-5.3H66.203l6.374-5.542a2.65 2.65 0 0 0-3.478-4L58.528 50.51c-.478.416-.831.917-1.058 1.46", clipRule: "evenodd" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], fillRule: "evenodd", d: "M53 101c26.51 0 48-21.49 48-48S79.51 5 53 5 5 26.49 5 53s21.49 48 48 48m0 4c28.719 0 52-23.281 52-52S81.719 1 53 1 1 24.281 1 53s23.281 52 52 52", clipRule: "evenodd" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 44.154, x2: 66.126, y1: 83.766, y2: 66.02, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__b`, x1: 40.672, x2: 66.353, y1: 33.656, y2: 33.656, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__c`, x1: 32.594, x2: 32.594, y1: 40.671, y2: 66.352, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__d`, x1: 73.407, x2: 73.407, y1: 40.674, y2: 66.352, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgCloudRouterSite as default };
