import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { SingleComponent } from './single/single.component';


const routes: Routes = [
    {
        path: 'categories',
        children: [
            {
                path: 'all',
                component: AllComponent,
            },
            {
                path: ':themeId',
                component: SingleComponent,
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoryRoutingModule { }
