import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  apiUrl:string="https://api.freeprojectapi.com/api/BusBooking/"
  constructor(private http:HttpClient) { }
  
   getAllLocation(){
    return this.http.get(this.apiUrl+"GetBusLocations");
  }
  searchBus(from:any, to:any, date:any):Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl+"searchBus?fromLocation="+from+"&toLocation="+to+"&travelDate="+date)
  }
}
