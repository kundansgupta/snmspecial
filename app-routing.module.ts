import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetSpecialComponent } from "./special/get-special/get-special.component";
import { EditspecialComponent } from "./special/special-dialog/editspecial/editspecial.component";
import { DeletespecialComponent } from "./special/special-dialog/deletespecial/deletespecial.component";
import { ReportComponent } from "./special/report/report.component";

const routes: Routes = [
  {path: '', component: GetSpecialComponent},
  {path: 'home', component: GetSpecialComponent},
  {path: 'report', component: ReportComponent}//,
  //{path: 'view/:id', component: ReadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
