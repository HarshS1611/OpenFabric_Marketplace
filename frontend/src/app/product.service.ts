import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://products-backend-l8zh.onrender.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getProductById(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }

  addProduct(product: Product): Observable<Product> {
    const headers = this.getHeaders();
    return this.http.post<Product>(`${this.apiUrl}`, product, { headers });
  }

  updateProduct(id: string, product: Product): Observable<Product> {
    const headers = this.getHeaders();
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product, { headers });
  }

  deleteProduct(id: string): Observable<void> {
    const headers = this.getHeaders();
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers });
  }

  private getHeaders(): HttpHeaders {
    const token = JSON.parse(localStorage.getItem('userProfile') || '{}').token; // Assuming the token is stored in localStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return headers;
  }
}

