import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/user'; // Replace with your API endpoint URL

  constructor(private http: HttpClient) {}

  signup(credentials: any) {
    return this.http.post(`${this.apiUrl}/signup`, credentials);
  }

  signin(credentials: any) {
    return this.http.post(`${this.apiUrl}/signin`, credentials);
  }
}

