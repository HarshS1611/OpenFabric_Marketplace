import { Component , OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId!: string | null;
  product: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    this.productId = productId !== null ? productId : '';
    this.productService.getProductById(this.productId).subscribe(
      (response) => {
        this.product = response;
      },
      (error) => {
        console.error('Failed to fetch product details:', error);
      }
    );
  }
  updateProductDetail(productId: string) {

    this.router.navigate(['/updateproduct', productId]);
  }

  deleteProduct(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.productId = productId !== null ? productId : '';
    const confirmDelete = confirm('Are you sure you want to delete this product?');
    if (confirmDelete) {
    this.productService.deleteProduct(this.productId).subscribe(
      () => {
        console.log('Product deleted successfully');
        alert('Product deleted successfully');
        this.router.navigate(['/products']);
      },
      (error) => {
        console.error('Error deleting product:', error);
        alert(error.error.message)
      }
    );
    }

  }
}
