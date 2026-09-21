// @ts-nocheck
const PlaceholderRegex = /%([a-z]+)/g;

export const createFormatter =
  (values: Record<string, string>) => (template: string) =>
    template.replace(PlaceholderRegex, (match, name) =>
      Object.prototype.hasOwnProperty.call(values, name) ? values[name] : match
    );

export const format = (template: string, values: Record<string, string>) =>
  createFormatter(values)(template);

export default format;
