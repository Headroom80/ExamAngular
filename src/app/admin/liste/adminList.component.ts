import {Component, inject, numberAttribute, OnInit} from '@angular/core';
import {Router, RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {Voyage} from "../../models/voyage";
import {VoyageService} from "../../services/voyage.service";
import {ToastrService} from "ngx-toastr";
import {DeleteConfirmService} from "../../services/confirm-delete.service";

@Component({
  selector: 'app-admin-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './adminList.component.html',
  styleUrl: './adminList.component.css'
})
export class AdminListComponent implements OnInit{

  isLoading = true;
  voyages?: Voyage[];

  constructor(private router: Router, private voyageService: VoyageService,
              private confirmSercice: DeleteConfirmService, private toastr: ToastrService) {
  }
  logout() {
    window.localStorage.removeItem("token");
    this.router.navigate(["/login"]);
  }

  ngOnInit(): void {
    this.voyageService.getVoyages().subscribe(data => {
      this.voyages = data;
      this.isLoading = false;
    })
  }

  deleteEvent(id: number) {
    this.isLoading = true;
    this.confirmSercice
      .confirm("Veuillez confirmer",
        "Action irrémédiable" ).then(res => {
      if(res){
        this.voyageService.delete(id).subscribe(data => {
          this.ngOnInit();
          this.isLoading = false;
          this.toastr.success("Véhicule supprimé")
        })
      }
    });
  }

  protected readonly numberAttribute = numberAttribute;
}
