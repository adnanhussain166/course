import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',

})
export class AppService {

  constructor(private http: HttpClient) { }

  getProducts () {
    return this.http.get('https://659a7a63652b843dea53982f.mockapi.io/Profile')
  }

  deleteProduct (value: string) {
    return this.http.delete('https://659a7a63652b843dea53982f.mockapi.io/Profile/' + value)
  }
}
