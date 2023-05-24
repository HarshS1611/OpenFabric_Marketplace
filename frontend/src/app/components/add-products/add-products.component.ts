import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {
  productForm : FormGroup;

  constructor(
    public formBuilder: FormBuilder,
  ) { 
    this.productForm = this.formBuilder.group({
      name: [''],
      price: [''],
      description: [''],
      imageUrl: ['']
    })
  }
 
  ngOnInit() { }
 
  onSubmit(): any {
    console.log(this.productForm.value);
    // this.crudService.AddBook(this.productForm.value)
    // .subscribe(() => {
    //     console.log('Data added successfully!')
    //     this.ngZone.run(() => this.router.navigateByUrl('/books-list'))
    //   }, (err) => {
    //     console.log(err);
    // });
  }

}
