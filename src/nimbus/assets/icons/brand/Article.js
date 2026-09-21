import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgArticle = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgArticle" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], fillRule: "evenodd", d: "M54.986 22.73v63.676c19.208-11.21 33.593-6.985 41.042-1.153V22.62c-5.218-3.573-13.359-4.907-21.575-4.537-7.793.351-15.141 2.212-19.467 4.647m-3.972 63.197v-63.12c-6.981-3.543-14.922-4.52-22.32-4.103-7.521.425-14.327 2.285-18.722 4.186v62.613c8.465-6.522 18.635-6.782 26.941-5.025a48.4 48.4 0 0 1 11.218 3.87 36 36 0 0 1 2.883 1.58m1.921-66.644c5.085-2.904 13.181-4.852 21.341-5.22 8.713-.392 18.09.988 24.362 5.494A3.31 3.31 0 0 1 100 22.252V86.14c0 1.66-1.124 2.762-2.214 3.21-1.078.442-2.55.439-3.707-.526-6.209-5.179-17.187-11.84-37.107 1.164 0 0-3.31 2.012-3.972 2.012s-1.526-.723-1.526-.723l-1.784-1.14c-.888-.602-1.918-1.492-3.298-2.172a44.5 44.5 0 0 0-10.29-3.549c-7.943-1.68-17.1-1.237-24.437 4.86-1.106.918-2.513.968-3.592.504C6.98 89.31 6 88.2 6 86.656V22.437c0-1.278.722-2.492 1.939-3.039 4.82-2.165 12.296-4.246 20.534-4.711 7.895-.446 16.642.584 24.462 4.596", clipRule: "evenodd" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, fillRule: "evenodd", d: "M63.586 41.607c-.903.224-1.758.436-2.567.615a1.901 1.901 0 1 1-.825-3.712c.734-.163 1.536-.363 2.405-.58 5.674-1.417 14.193-3.544 25.111-.67a1.901 1.901 0 1 1-.968 3.677c-9.914-2.61-17.487-.734-23.156.67", clipRule: "evenodd" }),
        React.createElement("path", { fill: `url(#${id}:__b)`, fillRule: "evenodd", d: "M63.586 54.382c-.903.223-1.758.435-2.567.615a1.901 1.901 0 0 1-.825-3.712 99 99 0 0 0 2.405-.58c5.674-1.417 14.193-3.544 25.111-.67a1.901 1.901 0 1 1-.968 3.677c-9.914-2.61-17.487-.734-23.156.67", clipRule: "evenodd" }),
        React.createElement("path", { fill: `url(#${id}:__c)`, fillRule: "evenodd", d: "M63.586 67.057c-.903.224-1.758.436-2.567.616a1.901 1.901 0 1 1-.825-3.713c.734-.163 1.536-.363 2.405-.58 5.674-1.417 14.193-3.544 25.111-.67a1.901 1.901 0 1 1-.968 3.678c-9.914-2.61-17.487-.735-23.156.67", clipRule: "evenodd" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 89.12, x2: 58.705, y1: 39.158, y2: 39.158, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__b`, x1: 89.12, x2: 58.705, y1: 51.933, y2: 51.933, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })),
            React.createElement("linearGradient", { id: `${id}:__c`, x1: 89.12, x2: 58.705, y1: 64.609, y2: 64.609, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgArticle as default };
