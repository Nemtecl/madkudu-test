import { Continent } from '../@types';

/**
 * Retrieves the M49 code code from a give continent
 * @param continent
 * @returns
 */
export const getContinentCode = (continent: Continent): string => {
  switch (continent) {
    case 'Africa':
      return '002';
    case 'Asia':
      return '142';
    default:
      return '000';
  }
};
