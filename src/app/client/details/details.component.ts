import {AfterViewInit, Component, OnInit} from '@angular/core';
import {VoyageService} from "../../services/voyage.service";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Voyage} from "../../models/voyage";
import {NgForOf, NgIf} from "@angular/common";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    NgForOf
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  voyage?: Voyage;
  isLoading = true;
  safeUrl?: SafeResourceUrl;


  constructor(private voyageService: VoyageService, private activatedRoute: ActivatedRoute, private sanetizer: DomSanitizer) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.voyageService.getVoyage(+id).subscribe(data => {
        this.voyage = data;
        this.isLoading = false;
        if (data.lattitude && data.longitude) {
          this.updateSafeUrl(data.lattitude, data.longitude);
        }
        this.voyage.pictures?.sort((a, b) => {
          if (this.voyage?.mainPicture) {
            return a.id === this.voyage.mainPicture.id ? -1 : b.id === this.voyage.mainPicture.id ? 1 : 0;
          }
          return 0;
        });
      });
    }
  }



  updateSafeUrl(latitude?: number, longitude?: number) {
    if (latitude == null || longitude == null) {
      return;
    }
    const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    this.safeUrl = this.sanetizer.bypassSecurityTrustResourceUrl(mapUrl);
  }
  getDelay(index: number): string {
    if(this.voyage?.pictures == null) return '0s';
    const delay = (4 * (this.voyage.pictures.length - index)).toString();
    return delay + 's';
  }
  getFullStars(nbStar: number | undefined): Array<number> {
    const stars = nbStar || 0;
    return Array(stars).fill(0);
  }

  getEmptyStars(nbStar: number | undefined): Array<number> {
    const maxStars = 5;
    const emptyStars = nbStar ? maxStars - nbStar : maxStars;
    return Array(emptyStars).fill(0);
  }
 /* getMainPictureUrl(): string {
    return this.voyage?.pictures.find(p => p.id === this.voyage?.main_picture_id)?.src || '';
  }

*/
}
