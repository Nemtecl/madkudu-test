import axios from 'axios';
import { getContinentCode } from 'utils/continent';
import { Antelope } from '../@types';

/**
 * Retrieves the antelopes species from the API
 * @returns Promise<Antelope[]>
 */
export const getAntelopes = () =>
  axios.get<Antelope[], Antelope[]>('/species.json');

/**
 * Find antelope by name
 * @param name
 * @returns Promise<Antelope>
 */
export const getAntelope = (name: string): Promise<Antelope> =>
  new Promise(async (resolve, reject) => {
    const data = await getAntelopes();
    const antelope = data.find((antelope) => antelope.name === name);

    antelope ? resolve(antelope) : reject(new Error('Antelope not found'));
  });

/**
 * Group antelope property
 * @param antelopes
 * @param prop
 * @returns [string, number] with the property value and the number of occurences
 */
export const groupBy = (antelopes: Antelope[], prop: keyof Antelope) => [
  [prop, 'Population'],
  ...Array.from(
    antelopes.reduce(
      (entryMap, a) => entryMap.set(a[prop], (entryMap.get(a[prop]) || 0) + 1),
      new Map(),
    ),
  ),
];

/**
 * Map antelopes to [height, weight] array of arrays
 * @param antelopes
 * @returns [[number, number], [number, number], ...]
 */
export const toScatterData = (antelopes: Antelope[]) => [
  ['Height', 'Weight'],
  ...antelopes.map(({ height, weight }) => [height, weight]),
];

/**
 * Map antelopes to [geoCode, continent, occurences]
 * @param antelopes
 * @returns [[string, string, number], [string, string, number], ...]
 */
export const toGeoData = (antelopes: Antelope[]) =>
  groupBy(antelopes, 'continent').map((o, i) =>
    i === 0
      ? ['Region Code', 'Continent', 'Popularity']
      : [getContinentCode(o[0]), o[0], o[1]],
  );
