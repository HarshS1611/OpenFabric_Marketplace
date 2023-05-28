import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  productForm!: FormGroup;
  fileToUpload: File | null = null;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      pname: ['', Validators.required],
      price: ['', [Validators.required]],
      description: ['', Validators.required],
      pimage: ['', Validators.required],
    });
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}

  onSubmit() {
    this.productForm.value.image = this.fileToUpload;
    console.log(this.productForm.value);
   
  }
}
