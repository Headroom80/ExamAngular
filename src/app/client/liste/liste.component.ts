import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {VoyageService} from "../../services/voyage.service";
import {Voyage} from "../../models/voyage";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {Observable} from "rxjs";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css'
})
export class ListeComponent implements OnInit{
  isLoading = true;
  voyages?: Voyage[];

  constructor(private listeService: VoyageService) {
  }

  ngOnInit(): void {
   this.listeService.getVoyages().subscribe(data=>{
      this.voyages = data;
      this.isLoading = false;
    })
  }


}
