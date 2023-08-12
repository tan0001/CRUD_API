import { Component,Inject } from '@angular/core';

import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  title: string;
  message: string;
}

@Component({
  selector: 'app-start-dialog',
  templateUrl: './start-dialog.component.html',
  styleUrls: ['./start-dialog.component.css']
})
export class StartDialogComponent {
  dialogData?: DialogData;
  title: string="";
  message: string="";

  constructor(
    public dialogRef: MatDialogRef<StartDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {

  }
/*
  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }
  */

  onOK() {
    this.dialogRef.close();
  }
}
