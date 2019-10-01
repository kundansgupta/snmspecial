import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SpecialService } from "../../services/special.service";
import { SpecialModel } from "../../services/special.model";
import { EditspecialComponent } from "../special-dialog/editspecial/editspecial.component";
import { DeletespecialComponent } from "../special-dialog/deletespecial/deletespecial.component";
import { Router } from "@angular/router";
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { map, startWith } from 'rxjs/operators';
import {BehaviorSubject, fromEvent, merge, Observable} from 'rxjs';
//import {MatSort} from '@angular/material/sort';

declare var $;

@Component({
  selector: 'app-get-special',
  templateUrl: './get-special.component.html',
  styleUrls: ['./get-special.component.scss']
})
export class GetSpecialComponent implements OnInit {
  public specialmaster: any = [];
  public specialTable: any;
  public dataSource: any;
  public displayedColumns: string[];
  public spotList: any = [];// = ['Office', 'Toilet No. 1', 'Toilet No. 2', 'Toilet No. 3', 'Green Room', 'Exhibition', 'Introgation Cell', 'Canteen', 'Pyau'];
  public spotListFiltered: any = [];
  public isShowSewaLocation: any = false;
  sewaSpot = new FormControl();
  constructor(private specialService: SpecialService, private router: Router, public dialog: MatDialog) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  //@ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.loadSpecialMaster();
    // this.loadSewaLocation();
  }

  loadSpecialMaster(){
    this.specialService.getSpecial().subscribe(
        specialData => {
          this.specialmaster = specialData;
          this.displayedColumns = ['Id', 'Name', 'Area', 'Contact1', 'Attendance', 'SewaLocation', 'actions'];
          // this.specialList = this.specialmaster.getspecial;
          this.dataSource = new MatTableDataSource(this.specialmaster.getspecial);
          this.dataSource.paginator = this.paginator;

          this.spotList = this.specialmaster.sewalocation;

          // this.spotListFiltered = this.sewaLocation.valueChanges
          // .pipe(
          //   startWith(''),
          //   map(value => this._spotFilter(value))
          // );
    
          //this.dataSource.sort = this.sort;
          // this.specialTable = $(this.Table.nativeElement);
          // setTimeout(()=>{this.specialTable.DataTable();}, 2000);
        }
    );
  }

  loadSewaLocation() {
    this.specialService.getSewaLocation().subscribe(
      sewaLocation => {
        this.spotList = sewaLocation;
      }
    );
  }
  showSewaLocation(e){
    this.isShowSewaLocation = true;
  }

  _spotFilter(spot){
    const filterValue = spot.toLowerCase();
    return this.spotList.filter(option => option.toLowerCase().includes(filterValue));
  }

  setSewaLocation(index, spot){
    this.dataSource.filteredData[index].SewaLocation = spot;
    this.isShowSewaLocation = false;
  }

  setAttendance(index, event){
    if(event.checked){
      this.dataSource.filteredData[index].Attendance = "P";
    }
    else{
      this.dataSource.filteredData[index].Attendance = "A";
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getNavigation(link, id){
    if(id === ''){
        this.router.navigate([link]);
    } else {
        this.router.navigate([link + '/' + id]);
    }
  }

  editSpecial(i, special: SpecialModel){
    const dialogRef = this.dialog.open(EditspecialComponent, {
      data: special
    });
    console.log(special);
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        if(i == -1) {
          this.dataSource.filteredData.push(special);
        }
        else{
          const foundIndex = this.dataSource.filteredData.findIndex(x => x.Id === special.Id);
          this.dataSource.filteredData[foundIndex] = special;
        }
        this.refreshTable();
      }
    });
  }

  deleteSpecial(i, special){
    const dialogRef = this.dialog.open(DeletespecialComponent, {
      data: special
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const foundIndex = this.dataSource.filteredData.findIndex(x => x.Id === special.Id);
        this.dataSource.filteredData.splice(foundIndex, 1);
        this.refreshTable();
      }
    });
  }

  saveAllSpecial(){
    var testEdit = this.dataSource.filteredData.filter(data => data.IsEdit);
    var testNew = this.dataSource.filteredData.filter(data => data.IsNew);
    console.log(testEdit);
    console.log(testNew);
  }

  private refreshTable() {
    //this.paginator._changePageSize(this.paginator.pageSize);
    this.dataSource.paginator = this.paginator;
  }
}
