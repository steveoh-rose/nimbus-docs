import * as React from 'react';

const SvgArticle = (props) => (React.createElement("svg", Object.assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", "data-testid": "SvgArticle", "data-slot": "icon" }, props),
    React.createElement("g", { clipPath: "url(#clip0_6194_288)" },
        React.createElement("path", { d: "M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z", fill: "currentColor" }),
        React.createElement("path", { d: "M14 17H7V15H14V17ZM17 13H7V11H17V13ZM17 9H7V7H17V9Z", fill: "currentColor" })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: "clip0_6194_288" },
            React.createElement("rect", { width: 24, height: 24, fill: "white" })))));

export { SvgArticle as default };
