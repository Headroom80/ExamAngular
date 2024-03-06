import { Picture } from './picture';

export class VoyageForm {
  id?: number;
  destination?: string;
  lattitude?: number;
  longitude?: number;
  type?: string;
  nbStar?: number;
  pictures?: Picture[];

  constructor(id?: number, destination?: string, lattitude?: number, longitude?: number, type?: string, nbStar?: number, pictures?: Picture[]) {
    this.id = id;
    this.destination = destination;
    this.lattitude = lattitude;
    this.longitude = longitude;
    this.type = type;
    this.nbStar = nbStar;
    this.pictures = pictures;
  }
}
