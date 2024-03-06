import {Component, Input} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal-confirm',
  standalone: true,
  imports: [],
  templateUrl: './confirm-modal.component.html',
  styleUrl: './confirm-modal.component.css'
})
export class ModalConfirmComponent {

  @Input() title: string = "Confirmation de suppression";
  @Input() message: string = "Action irreversible";
  @Input() btnOkText: string = "Supprimer";
  @Input() btnCancelText: string = "Annuler";

  constructor(private activeModal: NgbActiveModal) {
  }

  public decline() {
    this.activeModal.close(false);
  }

  public accept() {
    this.activeModal.close(true);
  }

  public dismiss() {
    this.activeModal.dismiss();
  }
}
