import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatPaginatorModule, MatAutocompleteModule, MatIconModule, MatSlideToggleModule, MatRadioModule, MatDialogModule, MatSnackBarModule,
         MatCardModule, MatBadgeModule, MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetSpecialComponent } from './special/get-special/get-special.component';
import { AddspecialComponent } from './special/special-dialog/addspecial/addspecial.component';
import { EditspecialComponent } from './special/special-dialog/editspecial/editspecial.component';
import { DeletespecialComponent } from './special/special-dialog/deletespecial/deletespecial.component';
import { HeaderComponent } from './header/header.component';
import { ReportComponent } from './special/report/report.component';
import { FilterPipe } from './special/report/filter.pipe';
import { NgPipesModule } from 'ngx-pipes';

@NgModule({
  declarations: [
    AppComponent,
    GetSpecialComponent,
    AddspecialComponent,
    EditspecialComponent,
    DeletespecialComponent,
    HeaderComponent,
    ReportComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule, MatButtonModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSlideToggleModule, MatAutocompleteModule, MatIconModule, MatRadioModule, MatDialogModule, MatSnackBarModule,
    MatCardModule, MatBadgeModule, MatSelectModule,
    NgPipesModule
  ],
  entryComponents: [
    AddspecialComponent,
    EditspecialComponent,
    DeletespecialComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
