import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Details } from './Details';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  constructor(
    private http: HttpClient
  ) { }

  private apiUrl = 'http://192.168.1.31:5007/service/test';

  getDetails() : Observable<Details> {
    return this.http.get<Details>(this.apiUrl)
  }
}
