import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private userSubject = new BehaviorSubject<any>(this.getUserFromStorage());
  user$ = this.userSubject.asObservable(); 
  constructor() {}
  private getUserFromStorage() {
    const user = localStorage.getItem('redbus');
    return user ? JSON.parse(user) : null;
  }
  login(user: any) {
    localStorage.setItem('redbus', JSON.stringify(user));
    this.userSubject.next(user);
  }
  logout() {
    localStorage.removeItem('redbus');
    this.userSubject.next(null);
  }
  getCurrentUser() {
    return this.userSubject.getValue();
  }
}
