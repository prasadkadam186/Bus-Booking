import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  apiUrl:string="https://api.freeprojectapi.com/api/BusBooking/"
  constructor(private http:HttpClient) { }
  
  // To get All the locations
   getAllLocation(){
    return this.http.get(this.apiUrl+"GetBusLocations");
  }
  // To search the bus by fromLocation, ToLocation, and travelDate
  searchBus(from:any, to:any, date:any):Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl+"searchBus?fromLocation="+from+"&toLocation="+to+"&travelDate="+date)
  }

  getBusByScheduledID(scheduleID:number)
  {
    return this.http.get(this.apiUrl+"GetBusScheduleById?id="+scheduleID);
  }

  getBookSeatByScheduledID(scheduleID:number)
  {
    return this.http.get(this.apiUrl+"getBookedSeats?shceduleId="+scheduleID);
  }
}
