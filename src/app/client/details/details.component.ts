import {Component, OnInit} from '@angular/core';
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
        this.updateSafeUrl(data.lattitude, data.longitude);
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
  get fullStars() {
    return new Array(this.voyage?.nbStar).fill(0);
  }

  get emptyStars() {
    return new Array(5 - (this.voyage?.nbStar ?? 0)).fill(0);
  }
 /* getMainPictureUrl(): string {
    return this.voyage?.pictures.find(p => p.id === this.voyage?.main_picture_id)?.src || '';
  }

*/
}
