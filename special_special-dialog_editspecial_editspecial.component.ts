import { Component, OnInit, Inject } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { SpecialService } from "../../../services/special.service";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from "@angular/material";
import { SpecialModel } from '../../../services/special.model';

@Component({
  selector: 'app-editspecial',
  templateUrl: './editspecial.component.html',
  styleUrls: ['./editspecial.component.scss']
})
export class EditspecialComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditspecialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SpecialModel, public specialService: SpecialService, public snackBar: MatSnackBar) { }

  public spotList: any = [];
  public specialMaster: any = [];
  public isShowSewaLocation: any = false;
  sewaLocation = new FormControl();
  ngOnInit() {
    if(!(this.spotList && this.spotList.length > 0)){
      this.loadSewaLocation();
    }
  }

  openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
         duration: 2000,
      });
   } 

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  loadSewaLocation() {
    //this.spotList = this.specialService.getSewaLocation();
    this.specialService.getSewaLocation().subscribe(
      sewaLocation => {
        this.specialMaster = sewaLocation;
        this.spotList = this.specialMaster.sewalocation;
      }
    );
  }

  setSewaLocation(spot){
    this.data.SewaLocation = spot;
    this.isShowSewaLocation = false;
  }
  showSewaLocation(e){
    this.isShowSewaLocation = true;
  }

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' : 
          this.formControl.hasError('email') ? 'Not a valid email' : 
          '';
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveSpecial(): void {
    if(this.data.Id){
      this.data.ModifiedDate = new Date();
      this.data.IsEdit = true;
    }
    else {
      this.data.AddedDate = new Date();
      this.data.ModifiedDate = new Date();
      this.data.IsNew = true;
    }
    this.specialService.updateSpecial(this.data);
    this.openSnackBar("Saved successfully!","");
  }

  setAttendance( event){
    if(event.checked){
      //this.dataSource.filteredData[index].Attendance = "P";
      this.data.Attendance = "P";
    }
    else{
      // this.dataSource.filteredData[index].Attendance = "A";
      this.data.Attendance = "A";
    }
  }

  setGender(gender){
    this.data.Gender = gender; 
  }

  setIsRegistered(event){
    if(event.checked){
      //this.dataSource.filteredData[index].Attendance = "P";
      this.data.IsRegistered = "Yes";
    }
    else{
      // this.dataSource.filteredData[index].Attendance = "A";
      this.data.IsRegistered = "No";
    }
  }
}
