// @ts-nocheck
// BEM class name generator
// http://getbem.com/
// Usage:
// const block = bem('cc-example')
//
// later...
//
// <div className={classnames(block(), {[block.modifier('special')]: props.isSpecial})}>
//   <h1 className={block.element('title')()}>Hello World!</h1>
//   <button className={block.element('button')()}>OK</button>
//   <button className={classnames(block.element('button')(), block.element('button').modifier('cancel'))}>
//     Cancel
//   </button>
// </div>

export default (blockName: string) => {
  const block = () => blockName;
  block.element = (elementName: string) => {
    const element = () => `${blockName}__${elementName}`;
    element.modifier = (modifierName: string) =>
      `${blockName}__${elementName}--${modifierName}`;
    return element;
  };
  block.modifier = (modifierName: string) => `${blockName}--${modifierName}`;
  return block;
};
