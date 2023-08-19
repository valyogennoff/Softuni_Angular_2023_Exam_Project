import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-confirmation-modal',
  templateUrl: './delete-confirmation-modal.component.html',
  styleUrls: ['./delete-confirmation-modal.component.css']
})
export class DeleteConfirmationModalComponent {
  @Output() confirmDelete: EventEmitter<void> = new EventEmitter<void>();

  confirm(): void {
    this.confirmDelete.emit();
  }

  closeModal(): void {
    this.closeModal();
  }
}