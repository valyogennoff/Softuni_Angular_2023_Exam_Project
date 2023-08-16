import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlicePipe } from './pipes/slice.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';



@NgModule({
  declarations: [
    SlicePipe,
    TimeAgoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [SlicePipe, TimeAgoPipe]
})
export class SharedModule { }
