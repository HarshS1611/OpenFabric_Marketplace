import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { ProductsComponent } from './components/products/products.component';
import { SignupComponent } from './components/auth/signup/signup.component';
const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'add', component: AddProductsComponent },
  { path: 'edit/:id', component: AddProductsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'logout', component: AddProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
