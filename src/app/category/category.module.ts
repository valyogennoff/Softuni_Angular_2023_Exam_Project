import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllComponent } from './all/all.component';
import { SingleComponent } from './single/single.component';
import { CategoryRoutingModule } from './category-routing.module';
import { NewComponent } from './new/new.component';



@NgModule({
  declarations: [
    AllComponent,
    SingleComponent,
    NewComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
