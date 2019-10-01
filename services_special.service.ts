import { Injectable } from '@angular/core';
import { SpecialModel } from './special.model';
import {BehaviorSubject, fromEvent, merge, Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SpecialService {
  //specialList: BehaviorSubject<SpecialModel[]> = new BehaviorSubject<SpecialModel[]>([]);
public specialData: any = [];
  public url = 'http://gebetenterprise.com/snmspecial/webapi/';
  
  constructor(private http: HttpClient) { }

  public httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    })
  };

  getSpecial() {
    // var specialList = this.http.get(this.url + 'getspecial.php', this.httpOptions);
    return this.http.get('https://my-json-server.typicode.com/kundansgupta/snmspecial/db');
  }

  getSewaLocation() {
    // var specialList = this.http.get(this.url + 'getsewalocation.php', this.httpOptions);
    return this.http.get('https://my-json-server.typicode.com/kundansgupta/snmspecial/db');
    // return this.specialData.sewalocation;
    //return ['Office', 'Toilet No. 1', 'Toilet No. 2', 'Toilet No. 3', 'Green Room', 'Exhibition', 'Introgation Cell', 'Canteen', 'Pyau'];
  }

  getSpecialDetails(id) {
    return this.http.get(this.url + 'getspecialdetails.php?id=' + id);
  }

  addSpecial(data) {
    return this.http.post(this.url + 'addspecial.php', data);
  }

  updateSpecial(data) {
    return this.http.post(this.url + 'updatespecial.php', data);
  }

  deleteSpecialDetails(id) {
    return this.http.get(this.url + 'deletespecialdetails.php?id=' + id);
  }
}
