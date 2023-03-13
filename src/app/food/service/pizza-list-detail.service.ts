import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class PizzaListDetailService {
public baseUrl : string = environment.baseUrl
  constructor(private http: HttpClient) {

   }
   
   public getPizzaList():Observable<any>{
    const url = this.baseUrl + 'pizza-list'
    return this.http.get<any>(url)
   }
}
