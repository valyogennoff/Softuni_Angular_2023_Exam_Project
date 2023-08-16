import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { NewProductComponent } from './product/new-product/new-product.component';
import { ProductPageComponent } from './product/product-page/product-page.component';
import { AuthActivate } from './core/guards/auth.activate';
import { CartComponent } from './cart/cart/cart.component';
import { ErrorComponent } from './core/error/error.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    component: MainComponent,
  },
  {
    path: 'products',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ProductListComponent,
      },
      {
        path: ':itemId',
        pathMatch: 'full',
        component: ProductPageComponent,
      }
    ],
  },
  {
    path: 'new-product',
    component: NewProductComponent,
    canActivate: [AuthActivate],
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'error',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
