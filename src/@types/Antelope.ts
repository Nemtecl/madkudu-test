import { Continent } from './Continent';
import { Horn } from './Horn';

export interface Antelope {
  name: string;
  continent: Continent;
  weight: number;
  height: number;
  horns: Horn;
  picture: string;
}
