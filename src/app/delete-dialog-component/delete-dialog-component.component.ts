import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog-component',
  templateUrl: './delete-dialog-component.component.html',
  styleUrls: ['./delete-dialog-component.component.css']
})
export class DeleteDialogComponentComponent {

  constructor(public dialogRef: MatDialogRef<DeleteDialogComponentComponent>,@Inject(MAT_DIALOG_DATA) public id: string) {}
  handelDelete(){
    this.dialogRef.close(this.id);
  }
}
