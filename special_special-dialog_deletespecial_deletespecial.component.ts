import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject, OnInit} from '@angular/core';
import { SpecialService } from "../../../services/special.service";

@Component({
  selector: 'app-deletespecial',
  templateUrl: './deletespecial.component.html',
  styleUrls: ['./deletespecial.component.scss']
})
export class DeletespecialComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeletespecialComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public specialService: SpecialService) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.specialService.deleteSpecialDetails(this.data.id);
  }
}
