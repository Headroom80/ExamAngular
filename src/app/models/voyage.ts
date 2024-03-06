import { Picture } from './picture';
export class Voyage {
  id?: number;
  destination?: string;
  lattitude?: number;
  longitude?: number;
  type?: string;
  pictures?: Picture[];
  nbStar?: number;

}
