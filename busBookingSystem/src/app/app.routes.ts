import { Routes } from '@angular/router';
import { BookingComponent } from './pages/booking/booking.component';
import { SearchComponent } from './pages/search/search.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { LoginSignUpComponent } from './pages/login-sign-up/login-sign-up.component';

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
    },
    {
        path : "login",
        component : LoginSignUpComponent
    },
    {
        path:'',
        component:LoginSignUpComponent
    }
];
