import { Component } from '@angular/core';
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
  userSelectedSeats:number[]=[];
  constructor(private activateRouteID:ActivatedRoute, private searchService: SearchServiceService)
  {
    this.activateRouteID.params.subscribe((res:any)=>{this.scheduleID=res.id});
    if(this.scheduleID!=null)
    {
      this.getSceduleBus();
      this.getBookSeats();
    }
  }

  getSceduleBus(){
    this.searchService.getBusByScheduledID(this.scheduleID).subscribe((res:any)=>{
      this.scheduleData=res;
      for (let index = 1; index <= this.scheduleData.totalSeats; index++) {
        this.seatArray.push(index);
      }
    })
  }
  
  getBookSeats()
  {
    this.searchService.getBookSeatByScheduledID(this.scheduleID).subscribe((res:any)=>{
      this.bookSeatArray=res;
    })
  }
  checkIfBookSeat(seatNumber:number)
  {
    return this.bookSeatArray.indexOf(seatNumber);
  }

  selectSeat(selectedSeat:number)
  {
    this.userSelectedSeats.push(selectedSeat);
  }
  checkIsSeatSelected(selectedSeat:number)
  {
    return this.userSelectedSeats.indexOf(selectedSeat);
  }
}
