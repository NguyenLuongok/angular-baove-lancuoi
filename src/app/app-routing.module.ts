import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./frontend/home/home.component";
import {ProductHomeComponent} from "./frontend/product-home/product-home.component";
import {ProductDetailComponent} from "./frontend/product-detail/product-detail.component";
import {AdminComponent} from "./backend/admin/admin.component";
import {DashboardComponent} from "./backend/dashboard/dashboard.component";
import {ProductAdminComponent} from "./backend/product-admin/product-admin.component";
import {ProductCreateAdminComponent} from "./backend/product-create-admin/product-create-admin.component";
import {ProductUpdateAdminComponent} from "./backend/product-update-admin/product-update-admin.component";
import {MainHomeComponent} from "./frontend/main-home/main-home.component";
import {AboutComponent} from "./frontend/about/about.component";
import {ContactComponent} from "./frontend/contact/contact.component";
import {CategoryProductAdminCreateComponent} from "./backend/category-product-admin-create/category-product-admin-create.component";
import {CategoryProductAdminComponent} from "./backend/category-product-admin/category-product-admin.component";
import {CartComponent} from "./frontend/cart/cart.component";
import {OrderComponent} from "./frontend/order/order.component";
import {OrderAdminComponent} from "./backend/order-admin/order-admin.component";
import {OrderDetailAdminComponent} from "./backend/orderdetail-admin/order-detail-admin.component";
import {NotFouldComponent} from "./frontend/not-fould/not-fould.component";


const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent,
    children:[
      {path:'',component: MainHomeComponent}
    ]
  },
  {path: 'product',component: ProductHomeComponent},
  { path: 'cart', component: CartComponent },
  {path: 'order',component: OrderComponent},
  {path: 'about',component: AboutComponent},
  {path: 'contact',component: ContactComponent},
  {path: 'category/:categoryID',component: ProductHomeComponent},
  {path: 'product/:productID',component: ProductDetailComponent},
  {path: 'admin',component: AdminComponent,
  children:[
    {path:'',redirectTo:'dashboard',pathMatch:'full'},
    {path: 'dashboard',component:DashboardComponent},
    {path: 'product',component: ProductAdminComponent},
    {path: 'category',component: CategoryProductAdminComponent},
    {path: 'category/add',component: CategoryProductAdminCreateComponent},
    {path: 'order',component: OrderAdminComponent},
    {path: 'order/:orderId',component: OrderDetailAdminComponent},
    {path: 'product/add',component: ProductCreateAdminComponent},
    {path: 'product/edit/:productID',component: ProductUpdateAdminComponent},
  ]
  },
  {path: '**', component: NotFouldComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
