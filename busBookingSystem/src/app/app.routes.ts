import { Routes } from '@angular/router';
import { BookingComponent } from './pages/booking/booking.component';
import { SearchComponent } from './pages/search/search.component';
import { LoginSignUpComponent } from './pages/login-sign-up/login-sign-up.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo : 'login',
        pathMatch : 'full'
    },
    {
        path : 'booking/:id',
        component : BookingComponent
    },
    {
        path : "search",
        component : SearchComponent
    },
    {
        path : "login",
        component : LoginSignUpComponent
    }
];
