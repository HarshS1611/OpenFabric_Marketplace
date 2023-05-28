import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import {SignupComponent} from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ModifyProductComponent } from './components/modify-product/modify-product.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddProductsComponent,
    SignupComponent,
    NavbarComponent,
    SigninComponent,
    HomeComponent,
    ProductDetailComponent,
    ModifyProductComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
