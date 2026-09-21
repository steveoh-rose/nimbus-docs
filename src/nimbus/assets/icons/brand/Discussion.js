import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgDiscussion = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgDiscussion" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M14.97 89.76a3.307 3.307 0 0 1-3.32-3.32V75.92H8.73C4.47 75.92 1 72.45 1 68.2V17.51c0-4.26 3.47-7.73 7.73-7.73h74.56c4.26 0 7.72 3.47 7.72 7.72v50.68c0 4.26-3.46 7.72-7.72 7.72H30.18L17.31 88.77c-.64.64-1.48.97-2.34.97zM8.73 13.78C6.68 13.78 5 15.45 5 17.51v50.68c0 2.05 1.67 3.72 3.73 3.72h6.92v12.88l12.88-12.88H83.3c2.05 0 3.72-1.67 3.72-3.72V17.51c0-2.05-1.67-3.72-3.72-3.72H8.73z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M94.48 96.22c-.76 0-1.51-.3-2.08-.86l-8.99-8.99H45.83a6.09 6.09 0 0 1-6.08-6.08v-.89c0-1.1.9-2 2-2s2 .9 2 2v.89c0 1.14.93 2.08 2.08 2.08h39.23l8.36 8.36v-8.36h5.5c1.14 0 2.08-.93 2.08-2.08V44.2c0-1.15-.93-2.08-2.08-2.08h-3.57c-1.1 0-2-.9-2-2s.9-2 2-2h3.57A6.09 6.09 0 0 1 105 44.2v36.08a6.09 6.09 0 0 1-6.08 6.08h-1.5v6.92c0 1.19-.71 2.26-1.82 2.72-.37.15-.75.23-1.13.23z" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, fillRule: "evenodd", d: "M42.06 57.31c.18.05.35.07.52.07.88 0 1.69-.59 1.93-1.48l6.86-25.61c.29-1.07-.34-2.16-1.41-2.45s-2.16.34-2.45 1.41l-6.86 25.61a1.99 1.99 0 0 0 1.41 2.45m-7.7-3.67h-.01a1.99 1.99 0 0 0 1.66-.89c.61-.92.36-2.16-.56-2.77l-11.69-7.79 11.61-6.96a1.99 1.99 0 0 0 .69-2.74 1.99 1.99 0 0 0-2.74-.69l-12.33 7.39-.17.17c-.76.75-1.17 1.75-1.17 2.81s.42 2.06 1.17 2.81l12.43 8.32c.337.228.723.338 1.1.34h-.01zm23.3 0c-.68 0-1.34-.35-1.72-.97a1.99 1.99 0 0 1 .69-2.74l11.61-6.96-11.69-7.79a1.999 1.999 0 1 1 2.21-3.33l12.43 8.32c.75.75 1.17 1.75 1.17 2.81s-.41 2.06-1.17 2.81l-.17.17-12.33 7.39c-.32.19-.68.29-1.03.29", clipRule: "evenodd" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 46.448, x2: 46.448, y1: 57.38, y2: 27.77, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgDiscussion as default };
