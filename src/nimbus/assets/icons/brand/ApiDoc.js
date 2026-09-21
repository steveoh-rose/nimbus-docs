import { __rest } from './node_modules/tslib/tslib.es6.js';
import * as React from 'react';

const outline = { contrastMode: { light: "#0F1A2B", dark: "#fff" } };
const colorStops = {
    "purple-rain": ["#7648FF", "#FF276F"],
    "luscious-green": ["#0098FF", "#22FFBB"],
    "blue-hour": ["#7648FF", "#22FFBB"],
    "the-way-of-water": ["#7648FF", "#23E0F9"],
};
const SvgApiDoc = (_a) => {
    var { contrastMode = "light", gradient = "purple-rain" } = _a, props = __rest(_a, ["contrastMode", "gradient"]);
    const [id] = React.useState(() => `na-brand-${crypto.randomUUID()}`);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 106 106", "data-testid": "SvgApiDoc" }, props),
        React.createElement("path", { fill: `url(#${id}:__a)`, fillRule: "evenodd", d: "M60.66 52.44c-.44-3.1-3.19-5.5-6.4-5.59a91 91 0 0 0-2.65-.02h-2.03c-.58-.01-1.25.06-1.71.52s-.51 1.16-.51 1.72v13.91c0 .31.02.58.07.81.09.48.36.88.77 1.13.27.17.57.25.88.25.16 0 .32-.02.48-.07.58-.16 1.28-.62 1.29-1.88v-2.99h.54q.303 0 .598.003c.586.003 1.156.007 1.732-.023.84-.04 1.65-.1 2.42-.34 3.14-1 5-4.05 4.52-7.43m-3.4 1.13c-.03 1.67-1.31 3.05-2.91 3.15-.874.05-1.757.04-2.68.03h-.8v-6.4h.81c.9 0 1.84 0 2.74.06 1.62.13 2.87 1.52 2.83 3.19zm-15.53-6.52c-2.39-.24-4.75-.24-7.02 0-1.89.21-3.17 1.93-3.17 4.3v11.74c0 .19.01.38.04.57.12.86.77 1.47 1.62 1.52h.09c.81 0 1.53-.6 1.65-1.41.061-.401.069-.795.077-1.181q0-.085.003-.169v-2.17h6.43v2.8c0 .34.03.73.17 1.09.28.74 1.09 1.16 1.89.99.89-.19 1.41-.88 1.41-1.88v-1.82c.01-3.44.02-6.88 0-10.31-.02-2.17-1.36-3.88-3.19-4.07m-.29 8.38v1.3h-6.42v-5.44c0-.71.25-.96.93-.97 1.52-.02 3.03-.02 4.55 0 .8 0 .92.38.93.74.024 1.16.022 2.319.02 3.488v.882zm31.24 6.3c.56.01 1.05.21 1.37.57l-.02.02c.31.33.46.79.42 1.29-.08.96-.82 1.59-1.89 1.6h-9.53c-.68-.01-1.27-.28-1.61-.74-.31-.42-.39-.96-.23-1.51.23-.77.85-1.21 1.75-1.22h3.09V50.32h-1.824c-.475.002-.956.004-1.436-.02-.92-.04-1.62-.73-1.66-1.65-.03-.84.58-1.57 1.46-1.75.19-.04.39-.05.59-.05h9.3c.26 0 .5.03.73.09.84.22 1.34.93 1.27 1.81-.07.87-.71 1.5-1.55 1.54-.71.03-1.41.03-2.12.03h-1.21v11.41h.61c.837-.01 1.663-.02 2.49 0", clipRule: "evenodd" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M79.39 31.91H67.32c-4.8 0-8.71-3.91-8.71-8.71V11.33c0-1.1.9-2 2-2s2 .9 2 2v11.88c0 2.59 2.11 4.71 4.71 4.71h12.07c1.1 0 2 .9 2 2s-.9 2-2 2z" }),
        React.createElement("path", { fill: outline.contrastMode[contrastMode], d: "M79.89 104H26.11c-5.1 0-9.26-4.15-9.26-9.26V11.26C16.85 6.16 21 2 26.11 2h33.08c4.11 0 8.08 1.73 10.88 4.74l15.09 16.23a14.84 14.84 0 0 1 3.98 10.12v61.65c0 5.1-4.15 9.26-9.26 9.26zM26.11 6c-2.9 0-5.26 2.36-5.26 5.26v83.48c0 2.9 2.36 5.26 5.26 5.26h53.77c2.9 0 5.26-2.36 5.26-5.26V33.09c0-2.75-1.03-5.38-2.91-7.4L67.14 9.46C65.09 7.26 62.19 6 59.19 6z" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: `${id}:__a`, x1: 37.758, x2: 47.163, y1: 49.552, y2: 71.514, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: colorStops[gradient][1] }),
                React.createElement("stop", { offset: 1, stopColor: colorStops[gradient][0] })))));
};

export { SvgApiDoc as default };
