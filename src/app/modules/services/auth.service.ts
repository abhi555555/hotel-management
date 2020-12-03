import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(): void {
    localStorage.setItem('token', 'token');
  }
  //
  public loginAdmin(): void {
    localStorage.setItem('token', 'token');
  }

  public sign(): void {
    localStorage.setItem('token', 'token');
  }

  public signOut(): void {
    localStorage.removeItem('token');
  }

  public getUser(): Observable<User> {
    return of({
      name: 'Abhilash',
      lastName: 'Mahajan'
    });
  }

  public getUserAdmin(): Observable<User> {
    return of({
      name: 'John',
      lastName: 'Doe'
    });
  }
}
