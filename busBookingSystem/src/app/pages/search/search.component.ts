import { Component, Inject, OnInit } from '@angular/core';
import { empty, isEmpty, Observable } from 'rxjs';
import { SearchServiceService } from '../../service/search-service.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, DatePipe, RouterLink, NavbarComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  location:any;
  spinnerLoader : boolean = false;
  searchObj:any={
    fromLocationId:'',
    toLocationId:'',
    travelDate:''
  }
  buslist:any[]=[];

  // Constructor
  constructor(private searchService: SearchServiceService){}

  // OnInit Lifecycle event
  ngOnInit(): void {
    this.getAllLocation()
  }

// To get the location 
  getAllLocation() {
    this.searchService.getAllLocation().subscribe((res)=>{
      this.location=res;
    })
  }
  
  // To search the available buses 
  searchBus(){
    this.spinnerLoader=true;
    const {fromLocationId, toLocationId, travelDate} = this.searchObj;
    this.searchService.searchBus(fromLocationId, toLocationId, travelDate).subscribe((res)=>{
      this.buslist=res;
      this.spinnerLoader=false;
      if(this.buslist.length === 0)
      {
        alert("Buses are not available")
      }
    });
  }
}
