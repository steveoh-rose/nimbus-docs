import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgInvite = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgInvite" }, props),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M38.61 68.249c-9.977 0-18.092-8.115-18.092-18.092V38.723c0-1.09.892-1.982 1.982-1.982s1.981.892 1.981 1.981v11.435c0 7.797 6.341 14.129 14.13 14.129 7.787 0 14.128-6.342 14.128-14.13V38.723c0-1.09.892-1.981 1.982-1.981s1.982.892 1.982 1.981v11.435c0 9.977-8.115 18.092-18.093 18.092" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], fillRule: "evenodd", d: "M14.216 53.04c-2.488 5.236.487 15.551 6.756 19.749-4.606 3.129-7.638 8.41-7.638 14.385v7.46c0 1.09.892 1.982 1.982 1.982s1.982-.892 1.982-1.982v-7.46c0-7.402 6.014-13.416 13.415-13.416h15.794c7.401 0 13.416 6.014 13.416 13.416v7.56c0 1.09.891 1.981 1.981 1.981s1.982-.892 1.982-1.982v-7.56c0-5.976-3.034-11.259-7.643-14.388 6.267-4.2 9.249-14.51 6.761-19.745-1.397-2.933-1.595-14.367-1.397-20.936 0-12.584-10.314-22.819-22.997-22.819S15.614 19.52 15.614 32.163c.198 6.51 0 17.934-1.398 20.877m38.96 16.962a2 2 0 0 0-.846.796 17.3 17.3 0 0 0-5.823-1.003H30.713c-2.042 0-4.003.354-5.825 1.004a1.96 1.96 0 0 0-.843-.797c-5.42-2.685-7.926-11.731-6.252-15.258 2.26-4.766 1.843-20.877 1.784-22.64 0-10.404 8.54-18.856 19.033-18.856s19.034 8.462 19.034 18.796c-.05 1.823-.476 17.934 1.783 22.7 1.675 3.527-.832 12.573-6.252 15.258", clipRule: "evenodd" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M80.776 41.11c1.094 0 1.981.887 1.981 1.982v7.926h7.927a1.982 1.982 0 0 1 0 3.963h-7.927v7.927a1.982 1.982 0 0 1-3.963 0v-7.927h-7.926a1.982 1.982 0 0 1 0-3.963h7.926v-7.926c0-1.095.887-1.982 1.981-1.982" }),
        React.createElement("path", { fill: `url(#${id}:__a)`, d: "M27.02 44a1.98 1.98 0 0 1-.188-3.954c8.828-.832 16.437-6.777 16.517-6.836l1.258-.991 1.239 1.01s3.765 3.013 9.194 3.399a1.984 1.984 0 0 1 .482 3.86 2 2 0 0 1-.769.093c-4.706-.337-8.323-2.23-10.146-3.388-2.685 1.862-9.482 6.044-17.399 6.797h-.188z" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 56.87, x2: 25, y1: 38.306, y2: 38.306, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][0] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][1] })))));
};

export { SvgInvite as default };
