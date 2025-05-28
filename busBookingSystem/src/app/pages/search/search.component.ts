import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchServiceService } from '../../service/search-service.service';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [AsyncPipe, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  location$ = new Observable<any[]>
  searchObj:any={
    fromLocationId:'',
    toLocationId:'',
    travelDate:''
  }
  buslist:any[]=[];
  constructor(private searchService: SearchServiceService){}
  ngOnInit(): void {
    this.getAllLocation()
  }

  getAllLocation() {
   this.location$ = this.searchService.getAllLocation();
  }
  searchBus(){
    const {fromLocationId, toLocationId, travelDate} = this.searchObj;
    this.searchService.searchBus(fromLocationId, toLocationId, travelDate).subscribe((res)=>{
    this.buslist=res;
    });
  }
}
