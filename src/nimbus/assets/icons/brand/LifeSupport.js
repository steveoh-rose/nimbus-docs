import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgLifeSupport = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgLifeSupport" }, props),
        React.createElement("path", { fill: `url(#${id}:__a)`, fillRule: "evenodd", d: "M77.398 29.864c-3.165 3.164-5.67 6.588-8.575 11.43l-5.145-3.087c3.057-5.097 5.852-8.96 9.477-12.586 3.603-3.603 7.934-6.878 13.956-10.892l3.328 4.992c-5.903 3.936-9.853 6.954-13.041 10.142", clipRule: "evenodd" }),
        React.createElement("path", { fill: `url(#${id}:__b)`, fillRule: "evenodd", d: "M64.586 67.421c11.664 7.776 16.58 12.76 21.584 21.517l5.21-2.976c-5.596-9.794-11.28-15.409-23.466-23.533z", clipRule: "evenodd" }),
        React.createElement("path", { fill: `url(#${id}:__c)`, fillRule: "evenodd", d: "M37.278 41.45c-7.035-10.233-11.396-13.982-21.853-21.825l3.6-4.8c10.743 8.057 15.657 12.258 23.197 23.225z", clipRule: "evenodd" }),
        React.createElement("path", { fill: `url(#${id}:__d)`, fillRule: "evenodd", d: "M19.769 89.04c6.384-10.214 11.357-15.187 21.571-21.571l-3.18-5.088C27.174 69.248 21.547 74.874 14.681 85.86z", clipRule: "evenodd" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], fillRule: "evenodd", d: "M102 53c0 27.062-21.938 49-49 49S4 80.062 4 53 25.938 4 53 4s49 21.938 49 49m4 0c0 29.271-23.729 53-53 53S0 82.271 0 53 23.729 0 53 0s53 23.729 53 53m-35.597 0c0 9.612-7.792 17.404-17.404 17.404S35.597 62.612 35.597 53 43.388 35.596 53 35.596 70.403 43.388 70.403 53m4 0c0 11.821-9.582 21.404-21.404 21.404-11.82 0-21.403-9.583-21.403-21.404s9.583-21.404 21.403-21.404c11.822 0 21.404 9.583 21.404 21.404", clipRule: "evenodd" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 63.682, x2: 90.439, y1: 28.455, y2: 28.455, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__b`, x1: 64.593, x2: 91.38, y1: 76.126, y2: 76.126, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__c`, x1: 42.222, x2: 15.425, y1: 28.363, y2: 28.363, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__d`, x1: 41.34, x2: 14.681, y1: 75.934, y2: 75.934, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgLifeSupport as default };
