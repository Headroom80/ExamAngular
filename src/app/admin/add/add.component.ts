import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {VoyageForm} from "../../models/voyage-form";
import {VoyageService} from "../../services/voyage.service";

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit{

  isLoading = true;

  voyage = new VoyageForm();

  constructor( private voyageService: VoyageService, private router: Router) {
  }

  addVoyage() {
    this.voyageService.post(this.voyage).subscribe(data => {
      this.router.navigate(["/admin/liste"]);
    }, error => {

    })
  }

  ngOnInit(): void {
    this.isLoading = false;
  }
}
