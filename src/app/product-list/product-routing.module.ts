import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductPageComponent } from '../product-page/product-page.component';


const routes: Routes = [


    {
        path: 'product',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: ProductListComponent,
            },
            {
                path: ':productId',
                component: ProductPageComponent,
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
