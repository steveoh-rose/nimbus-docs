import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgSiteOffice = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgSiteOffice" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M66.91 105c-1.1 0-2-.9-2-2V86.87c0-1.1.9-2 2-2s2 .9 2 2V103c0 1.1-.9 2-2 2m-48.31 0c-1.1 0-2-.9-2-2V1h52.31v18.02c0 1.1-.9 2-2 2s-2-.9-2-2V5H20.6v98c0 1.1-.9 2-2 2" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M54.89 18.33H27.48c-1.1 0-2-.9-2-2s.9-2 2-2H54.9c1.1 0 2 .9 2 2s-.9 2-2 2zm-9.1 13.61H27.48c-1.1 0-2-.9-2-2s.9-2 2-2h18.31c1.1 0 2 .9 2 2s-.9 2-2 2m-5.61 13.62H27.47c-1.1 0-2-.9-2-2s.9-2 2-2h12.71c1.1 0 2 .9 2 2s-.9 2-2 2m.58 13.62H27.48c-1.1 0-2-.9-2-2s.9-2 2-2h13.28c1.1 0 2 .9 2 2s-.9 2-2 2m14.13 13.61H27.48c-1.1 0-2-.9-2-2s.9-2 2-2H54.9c1.1 0 2 .9 2 2s-.9 2-2 2zM47.79 105c-1.1 0-2-.9-2-2V91.15h-6.06V103c0 1.1-.9 2-2 2s-2-.9-2-2V87.15h14.06V103c0 1.1-.9 2-2 2" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M66.91 81.33c-.89 0-1.67-.58-1.92-1.43l-3.4-11.53c-10.02-2.43-17.16-11.42-17.16-21.85 0-12.4 10.09-22.49 22.48-22.49s22.48 10.09 22.48 22.49c0 10.43-7.15 19.42-17.16 21.85l-3.4 11.53c-.25.85-1.03 1.43-1.92 1.43m0-53.3c-10.19 0-18.48 8.29-18.48 18.49 0 8.92 6.35 16.56 15.11 18.18.74.14 1.34.68 1.55 1.4l1.82 6.17 1.82-6.17c.21-.72.81-1.26 1.55-1.4 8.75-1.62 15.11-9.26 15.11-18.18 0-10.19-8.29-18.49-18.48-18.49" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M66.82 57c5.385 0 9.75-4.365 9.75-9.75s-4.365-9.75-9.75-9.75-9.75 4.365-9.75 9.75S61.435 57 66.82 57" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 73.924, x2: 60.142, y1: 40.571, y2: 54.353, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgSiteOffice as default };
