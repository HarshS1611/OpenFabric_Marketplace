import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://products-backend-l8zh.onrender.com/user'; // Replace with your API endpoint URL

  constructor(private http: HttpClient) {}

  signup(credentials: any) {
    return this.http.post(`${this.apiUrl}/signup`, credentials);
  }

  signin(credentials: any) {
    return this.http.post(`${this.apiUrl}/signin`, credentials);
  }
}

