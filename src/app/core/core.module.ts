import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { GlobalLoaderComponent } from './global-loader/global-loader.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    GlobalLoaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],

  // These components are exported from this module.
  exports: [
    HeaderComponent,
    FooterComponent,
    GlobalLoaderComponent,
  ],
})
export class CoreModule { }
