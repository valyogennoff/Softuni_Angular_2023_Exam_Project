import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CategoryListComponent,
    BlogPostsListComponent,
    ProductListComponent,
    ProductPageComponent,
    NewProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
