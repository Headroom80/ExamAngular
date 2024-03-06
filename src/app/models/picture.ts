export class Picture {
  id?: number;
  src: string;
  alt: string;
  voyage?: number;

  constructor(src: string = '', alt: string = '') {
    this.src = src;
    this.alt = alt;
  }
}
