import { Picture } from './picture';

export class VoyageForm {
  id?:number;
  destination?: string;
  lattitude?: number;
  longitude?: number;
  type?: string;
  mainPicture: {
    src: string;
    alt: string;
  };
  pictures: Array<{
    src: string;
    alt: string;
  }>;
  nbStar?: number;

  constructor() {
    this.mainPicture = { src: '', alt: '' };
    this.pictures = [{ src: '', alt: '' }];
  }
  addPicture() {
    this.pictures.push({ src: '', alt: '' });
  }
}
