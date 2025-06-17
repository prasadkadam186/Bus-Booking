import { Component, numberAttribute } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchServiceService } from '../../service/search-service.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {

  scheduleID: number=0;
  scheduleData:any;
  seatArray:number []=[];
  bookSeatArray:number []=[];
  userSelectedSeats:any[]=[];
  constructor(private activateRouteID:ActivatedRoute, private searchService: SearchServiceService)
  {
    this.activateRouteID.params.subscribe((res:any)=>{this.scheduleID=res.id});
    if(this.scheduleID!=null)
    {
      this.getSceduleBus();
      this.getBookSeats();
    }
  }

  // To get the bus scedule by scheduleID
  getSceduleBus(){
    this.searchService.getBusByScheduledID(this.scheduleID).subscribe((res:any)=>{
      this.scheduleData=res;
      for (let index = 1; index <= this.scheduleData.totalSeats; index++) {
        this.seatArray.push(index);
      }
    })
  }

  // To get the booked seat by scheduleID
  getBookSeats()
  {
    this.searchService.getBookSeatByScheduledID(this.scheduleID).subscribe((res:any)=>{
      this.bookSeatArray=res;
    })
  }

  // To check the seat is booked or not
  checkIfBookSeat(seatNumber:number)
  {
    return this.bookSeatArray.indexOf(seatNumber);
  }

  // To select the seat and pused into the array.
  selectSeat(selectedSeat:number)
  {
    const obj={
      "passengerId":0,
      "bookingId": 0,
      "passengerName": "string",
      "age": 0,
      "gender": "string",
      "seatNo": 0
    }
    obj.seatNo=selectedSeat;
    this.userSelectedSeats.push(obj);
  }
  
  // To check the seat is selected or not.
  checkIsSeatSelected(selectedSeat:number)
  {
    return this.userSelectedSeats.indexOf(selectedSeat);
  }
}
