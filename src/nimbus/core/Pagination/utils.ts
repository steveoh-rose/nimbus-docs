// @ts-nocheck
export const DEFAULT_PAGE_SIZE = 20;
export const DEFAULT_MAX_NUMBERS_TO_SHOW = 5;

export const getPages = (total: number, pageSize: number) => {
  const pages = Math.floor((Math.max(total, 1) + pageSize - 1) / pageSize);
  return !Number.isNaN(pages) && Number.isFinite(pages) ? pages : 1;
};

export const getPagesToShow = (
  pages: number,
  currentPage: number,
  maxNumbersToShow: number
): number[] => {
  const pagesToShow = [currentPage];
  let pageOffset = 1;

  while (pagesToShow.length < Math.min(maxNumbersToShow, pages)) {
    const candidatePage = currentPage + pageOffset;
    if (candidatePage >= 1 && candidatePage <= pages) {
      pagesToShow.push(candidatePage);
    }

    // Math magic to count outwards from the current page favouring forwards
    // So if we start on page 3, then we check, in order: 4, 2, 5, 1
    pageOffset = pageOffset > 0 ? pageOffset * -1 : Math.abs(pageOffset) + 1;
  }

  pagesToShow.sort((a, b) => a - b);

  return pagesToShow;
};

export const getFirstOnPage = (currentPage: number, pageSize: number, totalItems?: number) => {
  if (totalItems === 0) {
    return 0;
  }

  return (currentPage - 1) * pageSize + 1;
};

export const getLastOnPage = (currentPage: number, pageSize: number, total: number) =>
  Math.min(pageSize * currentPage, total);
