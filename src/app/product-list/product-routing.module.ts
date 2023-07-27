import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list.component';


const routes: Routes = [


    {
        path: 'products',
        children: [
            {
                path: 'all',
                pathMatch: 'full',
                component: ProductListComponent,
            },
            // {
            //     path: ':themeId',
            //     pathMatch: 'full',
            //     component: SingleComponent,
            // }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
