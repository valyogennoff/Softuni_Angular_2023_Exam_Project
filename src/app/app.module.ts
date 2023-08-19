import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainComponent } from './main/main.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { BlogPostsListComponent } from './blog-posts-list/blog-posts-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductPageComponent } from './product/product-page/product-page.component';
import { UserModule } from './user/user.module';
import { ProductListComponent } from './product/product-list/product-list.component';
import { NewProductComponent } from './product/new-product/new-product.component';
import { appInterceptorProvider } from './app.interceptor';
import { FormsModule } from '@angular/forms';
import { ProductModule } from './product/product.module';
import { MinCountDirective } from './user/min-count.directive';
import { MinDescrDirective } from './min-descr.directive';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { SharedModule } from './shared/shared.module';
import { SlicePipe } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { DeleteConfirmationModalComponent } from './delete-confirmation-modal/delete-confirmation-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CategoryListComponent,
    BlogPostsListComponent,
    ProductListComponent,
    ProductPageComponent,
    NewProductComponent,
    MinDescrDirective,
    NotFoundComponent,
    DeleteConfirmationModalComponent,
    // MinCountDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    UserModule,
    FormsModule,
    SharedModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    // SlicePipe
    // ProductModule
  ],
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }