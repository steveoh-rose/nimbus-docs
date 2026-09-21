import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgGrx = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgGrx" }, props),
        React.createElement("path", { stroke: outline.contrastMode[contrastMode], strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 4, d: "M40.27 101.179S8.58 53.347 38.94 5.514M65.04 101.179s13.59-19.804 14.33-47.853" }),
        React.createElement("path", { stroke: outline.contrastMode[contrastMode], strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 4, d: "M101.49 53.204c0 27.59-21.95 49.963-49.02 49.963S3.45 80.794 3.45 53.204 25.4 3.24 52.47 3.24M52.47 3.241v99.926M101.49 53.204H3.45" }),
        React.createElement("path", { stroke: outline.contrastMode[contrastMode], strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 4, d: "M52.4 34.501c-11.63.367-24.82-2.202-38.02-10.906M90.93 83.913s-38.28-26.347-76.55-1.11" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M74.622 86.818c5.53 0 10.013-4.44 10.013-9.917s-4.483-9.917-10.013-9.917-10.013 4.44-10.013 9.917 4.483 9.917 10.013 9.917" }),
        React.createElement("path", { fill: `url(#${id}:__b)`, d: "M26.768 60.828c4.251 0 7.697-3.414 7.697-7.624s-3.446-7.624-7.697-7.624c-4.252 0-7.698 3.413-7.698 7.624 0 4.21 3.446 7.624 7.698 7.624" }),
        React.createElement("path", { stroke: outline.contrastMode[contrastMode], strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 4, d: "M65 23.508V17.97M74.07 23.508v-9.573M83.14 23.508V9.436" }),
        React.createElement("path", { fill: `url(#${id}:__c)`, fillRule: "evenodd", d: "M94.22 4a2 2 0 1 0-4 0v19.508a2 2 0 1 0 4 0zM63 44.043c0 3.139 2.202 5.167 6.823 5.167l-.01.01c4.826 0 7.142-2.232 7.142-5.931v-1.356c0-3.812-2.49-5.87-6.401-5.87-1.719 0-3.077.59-4.117 1.467l.628-5.545h7.44c.886 0 1.452-.58 1.452-1.376v-.265c0-.846-.556-1.406-1.451-1.406h-9.252c-.597 0-.978.316-1.04.907l-1.1 9.632c-.093.703.236 1.11 1.008 1.11h.864c.772 0 1.009-.091 1.482-.56.762-.795 1.986-1.325 3.345-1.325 2.315 0 3.499 1.05 3.499 3.078v1.56c0 2.058-1.132 3.2-3.468 3.2s-3.407-.948-3.407-2.589v-.438c0-.47-.267-.765-.74-.765H63.74c-.473 0-.741.296-.741.795zm16.662-2.06c0 4.638 2.933 7.227 7.975 7.227l.01-.02c4.807 0 7.472-2.314 7.472-6.279v-3.608c0-.856-.442-1.233-1.245-1.233h-5.485c-.772 0-1.215.438-1.215 1.172v.53c0 .703.443 1.142 1.215 1.142h3.293v1.997c0 2.355-1.009 3.557-3.942 3.557s-4.27-1.406-4.27-4.23v-7.307c0-2.793 1.245-4.2 4.178-4.2s3.88 1.152 3.88 3.496v.327c0 .407.236.642.648.642h2.223c.411 0 .648-.265.648-.673v-.296c0-3.995-2.398-6.227-7.41-6.227s-7.975 2.589-7.975 7.257z", clipRule: "evenodd" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 81.918, x2: 67.901, y1: 70.108, y2: 84.261, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__b`, x1: 32.376, x2: 21.601, y1: 47.981, y2: 58.862, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__c`, x1: 95.111, x2: 63, y1: 26.397, y2: 26.397, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgGrx as default };
