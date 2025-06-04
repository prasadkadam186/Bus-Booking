import { Routes } from '@angular/router';
import { BookingComponent } from './pages/booking/booking.component';
import { SearchComponent } from './pages/search/search.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo : 'search',
        pathMatch : 'full'
    },
    {
        path : 'booking/:id',
        component : BookingComponent
    },
    {
        path : "search",
        component : SearchComponent
    }
];
