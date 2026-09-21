import * as React from 'react';

const SvgCalculator = (props) => (React.createElement("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", "data-testid": "SvgCalculator", "data-slot": "icon" }, props),
    React.createElement("g", { clipPath: "url(#clip0_6194_303)" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13 2H4C3.50001 2 3.01 2.50001 3.01 3C3.01 3.49999 3 21 3 21C3 21.5 3.5 22 4 22H16C16.5 22 17 21.5 17 21V11H13V10H5V5H13V2ZM9 12H6V15H9V12ZM11 12H14V20H11V12ZM9 17H6V20H9V17Z", fill: "currentColor" }),
        React.createElement("path", { d: "M18 9V10H16V9H14V7H18V6H15C14.45 6 14 5.55 14 5V2C14 1.45 14.45 1 15 1H16V0H18V1H20V3H16V4H19C19.55 4 20 4.45 20 5V8C20 8.55 19.55 9 19 9H18Z", fill: "currentColor" })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: "clip0_6194_303" },
            React.createElement("rect", { width: 24, height: 24, fill: "white" })))));

export { SvgCalculator as default };
