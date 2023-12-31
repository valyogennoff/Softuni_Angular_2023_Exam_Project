import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';

const routes: Routes = [

    {
        path: 'products',
        component: ProductListComponent,
    },
    {
        path: 'new-product',
        component: NewProductComponent,
    },
    {
        // path: 'profile',
        // component: ProfileComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
