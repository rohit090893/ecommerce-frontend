import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Dashboard } from './admin/dashboard/dashboard';
import { adminGuard } from './guards/admin-guard';
import { AddProduct } from './admin/add-product/add-product';
import { ProductList as AdminProducts } from './admin/product-list/product-list';
import { Cart } from './cart/cart';
import { ProductList } from './products/product-list/product-list';
import { Checkout } from './checkout/checkout';
import { MyOrders } from './my-orders/my-orders';
import { AdminOrders } from './admin-orders/admin-orders';

export const routes: Routes = [
  {path:'login',component:Login},
  {path:'products',component:ProductList},
  {path:'cart',component:Cart},
  {path:'checkout',component:Checkout},
  {path:'my-orders',component:MyOrders},
  {path:'admin',component:Dashboard,canActivate:[adminGuard],
   children:[
    {path:'add-product',component:AddProduct},
    {path:'products',component:AdminProducts},
    {path:'orders',component:AdminOrders}
  ]},
  {path:'',redirectTo:'login',pathMatch:'full'}
];
