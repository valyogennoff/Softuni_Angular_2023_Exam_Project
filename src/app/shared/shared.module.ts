import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlicePipe } from './pipes/slice.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    SlicePipe,
    TimeAgoPipe,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LoaderComponent, SlicePipe, TimeAgoPipe]
})
export class SharedModule { }
