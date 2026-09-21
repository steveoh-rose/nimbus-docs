import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgEdgePort = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgEdgePort" }, props),
        React.createElement("g", { clipPath: "url(#__ID_PLACEHOLDER____a)" },
            React.createElement("path", { fill: `url(#${id}:__b)`, fillRule: "evenodd", d: "M42.864 29.16h20.523l14.517 14.517v20.524L63.387 78.717H42.864L28.348 64.201V43.677zm1.971 4.76L33.107 45.648V62.23l11.728 11.729h16.58l11.73-11.729V45.65L61.414 33.92z", clipRule: "evenodd" }),
            React.createElement("path", { fill: outline.contrastMode[contrastMode], fillRule: "evenodd", d: "M39.9 10.06c.836 0 1.514.677 1.514 1.513v12.755L31.2 34.541a1.514 1.514 0 1 1-2.142-2.142l9.326-9.326v-11.5c0-.836.678-1.514 1.514-1.514M72.957 13.71c.596.586.603 1.545.016 2.141l-8.951 9.083-14.446.104a1.514 1.514 0 0 1-.022-3.029l13.191-.095 8.07-8.189a1.514 1.514 0 0 1 2.142-.015M71.48 28.523a1.514 1.514 0 0 1 2.142-.01l9.367 9.285 11.5-.049a1.514 1.514 0 1 1 .013 3.029l-12.754.054L71.49 30.665a1.514 1.514 0 0 1-.01-2.142M83.898 50.625a1.514 1.514 0 0 1 1.525 1.504l.09 13.187 8.19 8.074a1.514 1.514 0 1 1-2.127 2.156l-9.082-8.955-.1-14.441a1.514 1.514 0 0 1 1.504-1.525M78.4 71.877c.6.582.614 1.541.031 2.14l-9.189 9.459.164 11.5a1.514 1.514 0 0 1-3.028.043l-.182-12.754 10.063-10.358a1.514 1.514 0 0 1 2.142-.03M58.4 85.06c.009.836-.661 1.522-1.498 1.531l-13.187.149-8.037 8.226a1.514 1.514 0 0 1-2.166-2.117l8.914-9.124 14.442-.162c.836-.01 1.522.66 1.531 1.497M9.211 68.357a1.514 1.514 0 0 1 1.534-1.495l12.75.164 10.086 10.34a1.514 1.514 0 0 1-2.168 2.114l-9.21-9.442-11.497-.147a1.514 1.514 0 0 1-1.495-1.534M11.662 34.035c.6-.582 1.559-.567 2.141.034l8.878 9.16-.227 14.441a1.514 1.514 0 0 1-3.028-.047l.207-13.187-8.005-8.26c-.582-.6-.567-1.559.034-2.14", clipRule: "evenodd" }),
            React.createElement("path", { fill: outline.contrastMode[contrastMode], fillRule: "evenodd", d: "M74.59 8.714a2.57 2.57 0 1 0 0 5.14 2.57 2.57 0 0 0 0-5.14m-5.6 2.57a5.598 5.598 0 1 1 11.198 0 5.598 5.598 0 0 1-11.197 0M99.675 36.43a2.57 2.57 0 1 0 0 5.14 2.57 2.57 0 0 0 0-5.14M94.076 39a5.599 5.599 0 1 1 11.197 0 5.599 5.599 0 0 1-11.197 0M96.469 74.641a2.57 2.57 0 1 0 0 5.14 2.57 2.57 0 0 0 0-5.14m-5.599 2.57a5.599 5.599 0 1 1 11.197 0 5.599 5.599 0 0 1-11.197 0M67.879 97.105a2.57 2.57 0 1 0 0 5.14 2.57 2.57 0 0 0 0-5.14m-5.599 2.57a5.599 5.599 0 1 1 11.197 0 5.599 5.599 0 0 1-11.197 0M31.12 94.773a2.57 2.57 0 1 0 0 5.14 2.57 2.57 0 0 0 0-5.14m-5.598 2.57a5.599 5.599 0 1 1 11.197 0 5.599 5.599 0 0 1-11.197 0M6.325 65.309a2.57 2.57 0 1 0 0 5.14 2.57 2.57 0 0 0 0-5.14m-5.598 2.57a5.598 5.598 0 1 1 11.197 0 5.598 5.598 0 0 1-11.197 0M8.657 29.425a2.57 2.57 0 1 0 0 5.14 2.57 2.57 0 0 0 0-5.14m-5.598 2.57a5.598 5.598 0 1 1 11.197 0 5.598 5.598 0 0 1-11.197 0M39.58 3.755a2.57 2.57 0 1 0-.001 5.14 2.57 2.57 0 0 0 0-5.14m-5.6 2.57a5.598 5.598 0 1 1 11.198 0 5.598 5.598 0 0 1-11.197 0", clipRule: "evenodd" }),
            React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M59.888 59.715v3.374h-14.07V44.918H59.55v3.375h-9.553v3.946h8.437v3.27h-8.437v4.206z" })),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__b`, x1: 71.179, x2: 36.155, y1: 36.966, y2: 71.99, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("clipPath", { id: `${id}:__a` },
                React.createElement("path", { fill: "#fff", d: "M0 0h106v106H0z" })))));
};

export { SvgEdgePort as default };
