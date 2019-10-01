import { Component, OnInit } from '@angular/core';
import { SpecialService } from "../../services/special.service";
import { SpecialModel } from "../../services/special.model";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  public specialmaster: any = {};
  public reportName: string = "Spot";
  public rowNum: number = 0;
  public rowSpotArr: any = [];
  // public specialList: any = [];
  // public spotList: any = [];

  constructor(private specialService: SpecialService) { }

  ngOnInit() {
    this.loadSpecialMaster();
  }

  updateRowNumber(i: number, s: string, l: boolean){
    if(l){      
      this.rowSpotArr[s] = i + 1;
    }
  }

  loadSpecialMaster(){
    this.specialService.getSpecial().subscribe(
        specialData => {
          this.specialmaster = specialData;
          //this.specialList = this.specialmaster.getspecial;
        }
    );
  }

  showReportBy(by){
    switch(by){
      case "s":
        this.reportName = "Spot";
      break;
      case "a":
        this.reportName = "Area";
      break;
      case "k":
        this.reportName = "Kshetra";
      break;
      default:
        this.reportName = "Spot";
      break;
    }
  }
}
