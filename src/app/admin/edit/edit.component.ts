import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Voyage} from "../../models/voyage";
import {VoyageService} from "../../services/voyage.service";
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{
  isLoading: boolean = true;
  voyage?: Voyage;
  @ViewChild('voyageForm') voyageForm!: NgForm;


  constructor(private voyageService: VoyageService,
              private activatedRoute: ActivatedRoute, private routerService: Router) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.voyageService.getVoyage(+id).subscribe(data => {
        this.voyage = data;
        this.isLoading = false;
      });
    }

    }
  updateVoyage() {
    if (this.voyageForm.valid && this.voyage?.id) {
      this.isLoading = true;

      this.voyageService.put({...this.voyageForm.value, id: this.voyage.id}).subscribe({
        next: (data) => {
          this.routerService.navigate(['/admin/liste']);
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Erreur lors de la mise à jour du voyage:', error);
          this.isLoading = false;
        }
      });
    } else {
      console.error('Le formulaire de voyage est invalide ou l\'ID du voyage est manquant');
    }
  }
  }


