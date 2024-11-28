import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'https://dicemice-backend.onrender.com';
  private user: User | null = null
  constructor(private http: HttpClient) { }

  getUser() {
    this.getAuthStatus().subscribe(
      {
        next: (result) => {
          console.log("auth status", result)
        },
        error: (e) => console.error("Error getting user auth status", e),
        complete: () => console.info('complete') 
      });
  }

  // Check authentication status
  getAuthStatus(): Observable<any> {
    return this.http.get(`${this.baseUrl}/auth/login`, { withCredentials: true });
  }
}
