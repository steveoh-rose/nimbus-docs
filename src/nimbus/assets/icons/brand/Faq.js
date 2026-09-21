import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgFaq = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgFaq" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M14.38 88.27a3.256 3.256 0 0 1-3.26-3.26V75.1H8.45c-4.1 0-7.44-3.34-7.44-7.44V19.47c0-4.1 3.34-7.44 7.44-7.44h70.9c4.1 0 7.44 3.34 7.44 7.44v25.18c0 1.1-.9 2-2 2s-2-.9-2-2V19.47c0-1.9-1.54-3.44-3.44-3.44H8.44A3.44 3.44 0 0 0 5 19.47v48.19c0 1.9 1.54 3.44 3.44 3.44h6.67v12.11L27.22 71.1H54.8c1.1 0 2 .9 2 2s-.9 2-2 2H28.89L16.68 87.31c-.62.62-1.45.96-2.3.96" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, fillRule: "evenodd", d: "M41.9 53.5c0 1.1.9 2 2 2s2-.9 2-2v-4.65c5.47-.95 9.65-5.74 9.65-11.48 0-6.42-5.23-11.65-11.65-11.65s-11.65 5.23-11.65 11.65c0 1.1.9 2 2 2s2-.9 2-2c0-4.22 3.43-7.65 7.65-7.65s7.65 3.43 7.65 7.65-3.43 7.65-7.65 7.65c-1.1 0-2 .9-2 2zm1.61 7.9c.13.02.26.04.39.04s.26-.02.39-.04c.256-.056.5-.158.72-.3.11-.08.21-.16.31-.25.09-.09.17-.2.24-.31.08-.1.14-.22.19-.34s.09-.25.11-.37c.04-.13.04-.26.04-.39s-.01-.27-.04-.4c-.02-.12-.06-.25-.11-.37s-.11-.24-.19-.34c-.07-.11-.15-.22-.24-.31-.1-.09-.2-.17-.31-.25a2.2 2.2 0 0 0-.72-.3q-.39-.075-.78 0c-.13.03-.25.07-.37.12s-.24.11-.35.18c-.11.08-.21.16-.3.25s-.18.2-.25.31c-.07.1-.14.22-.19.34-.045.108-.074.224-.101.334l-.01.036c-.03.13-.04.27-.04.4a1.7 1.7 0 0 0 .05.426c.027.11.056.226.1.334.05.12.12.24.19.34.07.11.16.22.25.31s.19.17.3.25c.11.07.23.13.35.18s.24.09.37.12", clipRule: "evenodd" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M79.74 87.05c-.93 0-1.87-.07-2.81-.21-4.85-.74-9.12-3.32-12.03-7.28-2.91-3.95-4.1-8.8-3.36-13.65s3.32-9.12 7.28-12.03c3.95-2.91 8.81-4.1 13.65-3.36 4.85.74 9.12 3.32 12.03 7.28 6 8.16 4.24 19.68-3.92 25.68-3.19 2.34-6.96 3.57-10.84 3.57m-.07-33.75c-3.25 0-6.41 1.03-9.07 2.99a15.27 15.27 0 0 0-6.09 10.07c-.62 4.06.38 8.12 2.81 11.42s6.01 5.47 10.07 6.09 8.12-.38 11.42-2.81c6.83-5.02 8.3-14.66 3.28-21.49a15.27 15.27 0 0 0-10.07-6.09c-.79-.12-1.57-.18-2.35-.18" }),
        React.createElement("path", { fill: `url(#${id}:__b)`, d: "M79.7 76.8a8.12 8.12 0 1 0 0-16.24 8.12 8.12 0 0 0 0 16.24" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M100.69 93.47c-.97 0-1.95-.37-2.69-1.11l-8.47-8.47a1.49 1.49 0 0 1 0-2.12 1.49 1.49 0 0 1 2.12 0l8.47 8.47c.32.32.83.31 1.14 0s.31-.83 0-1.14l-8.47-8.47a1.49 1.49 0 0 1 0-2.12 1.49 1.49 0 0 1 2.12 0l8.47 8.47a3.814 3.814 0 0 1 0 5.38c-.74.74-1.72 1.11-2.69 1.11" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 52.103, x2: 28.991, y1: 56.271, y2: 41.195, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__b`, x1: 85.418, x2: 73.936, y1: 74.45, y2: 62.968, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgFaq as default };
