import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService,private router: Router) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (response) => {
        this.products = response;
        console.log(this.products);
      },
      (error) => {
        console.error('Failed to fetch products:', error);
      }
    );
  }
  viewProductDetail(productId: string) {
    this.router.navigate(['/products', productId]);
  }
  
}