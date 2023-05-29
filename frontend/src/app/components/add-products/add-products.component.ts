import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  productForm!: FormGroup;
  selectedImage!: string | ArrayBuffer | null;


  constructor(private formBuilder: FormBuilder, private productService: ProductService) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', [Validators.required]],
      description: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];
    console.log(file);
    if (file) {
      this.previewImage(file);
    }
    
  }
  previewImage(file: File): void {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.selectedImage = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }

  onSubmit() {
    this.productForm.value.imageurl = this.selectedImage;
    console.log(this.productForm.value);
    const productData = this.productForm.value;
    this.productService.addProduct(productData).subscribe(
      (response) => {
        console.log('Product created successfully:', response);
        // Reset the form
        this.productForm.reset();
      },
      (error) => {
        console.error('Failed to create product:', error);
      }
    );
  }

}
