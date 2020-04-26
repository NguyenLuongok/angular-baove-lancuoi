import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AdminComponent } from './backend/admin/admin.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { HeaderAdminComponent } from './backend/header-admin/header-admin.component';
import { FooterAdminComponent } from './backend/footer-admin/footer-admin.component';
import { ProductAdminComponent } from './backend/product-admin/product-admin.component';
import { ProductCreateAdminComponent } from './backend/product-create-admin/product-create-admin.component';
import { ProductUpdateAdminComponent } from './backend/product-update-admin/product-update-admin.component';
import { HomeComponent } from './frontend/home/home.component';
import { SliderComponent } from './frontend/slider/slider.component';
import { BannerComponent } from './frontend/banner/banner.component';
import { MainHomeComponent } from './frontend/main-home/main-home.component';
import { HomeHeaderComponent } from './frontend/home-header/home-header.component';
import { HomeFooterComponent } from './frontend/home-footer/home-footer.component';
import { ProductHomeComponent } from './frontend/product-home/product-home.component';
import { ProductDetailComponent } from './frontend/product-detail/product-detail.component';
import { CategoryAdminComponent } from './backend/category-admin/category-admin.component';
import { AboutComponent } from './frontend/about/about.component';
import { ContactComponent } from './frontend/contact/contact.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { CategoryProductAdminComponent } from './backend/category-product-admin/category-product-admin.component';
import { CategoryProductAdminCreateComponent } from './backend/category-product-admin-create/category-product-admin-create.component';
import { CartComponent } from './frontend/cart/cart.component';
import { OrderComponent } from './frontend/order/order.component';
import { OrderAdminComponent } from './backend/order-admin/order-admin.component';
import { OrderDetailAdminComponent } from './backend/orderdetail-admin/order-detail-admin.component';
import { NotFouldComponent } from './frontend/not-fould/not-fould.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DashboardComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    ProductAdminComponent,
    ProductCreateAdminComponent,
    ProductUpdateAdminComponent,
    HomeComponent,
    SliderComponent,
    BannerComponent,
    MainHomeComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    ProductHomeComponent,
    ProductDetailComponent,
    CategoryAdminComponent,
    AboutComponent,
    ContactComponent,
    CategoryProductAdminComponent,
    CategoryProductAdminCreateComponent,
    CartComponent,
    OrderComponent,
    OrderAdminComponent,
    OrderDetailAdminComponent,
    NotFouldComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
