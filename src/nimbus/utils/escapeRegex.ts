// @ts-nocheck
const REGEX_ESCAPING_REGEX = /[-[\]{}()*+?.,\\^$|#]/g;

export const escapeRegex = (searchString: string) =>
  searchString.replace(REGEX_ESCAPING_REGEX, '\\$&');
