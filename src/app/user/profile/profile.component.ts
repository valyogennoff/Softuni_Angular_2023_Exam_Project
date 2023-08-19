import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth.service';
import { Product } from 'src/app/types/product';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isEditMode: boolean = false;
  productList: Product[] = [];
  filteredProductList: Product[] = [];
  isLoading: boolean = true;


  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    country: ['', Validators.required],
    img: ['', Validators.required],
  });
  AuthService: any;
  myName: string = '';
  myCountry: string = '';
  myId: string = '';
  myEmail: string = '';
  myUsername: string = '';
  myImage: string = '';

  constructor(private fb: FormBuilder, private apiService: ApiService, private authService: AuthService) {

  }


  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }

  saveProfileHandler(): void {
    if (this.form.invalid) {
      return
    };

    this.toggleEditMode();
  }

  deleteProduct(id: string): void {
    const token = localStorage.getItem('accessToken'); // Get the user's token

    debugger

    if (!token) {
      console.error('Token not found.');

      debugger

      return; // Exit the function if the token is not found
    }

    // Parse the token data to access the user's ID
    const tokenData = JSON.parse(token);
    const myId = tokenData._id;
    console.log(tokenData._id, myId);

    debugger

    this.apiService.getMyProducts().subscribe({
      next: (items) => {
        // Filter the products for the user
        const userProducts = items.filter(product => product._ownerId === myId);

        debugger

        // Check if the product to delete belongs to the user
        const productToDelete = userProducts.find(product => product._id === id);

        debugger

        if (!productToDelete) {
          console.error('Product not found or not owned by the user.');

          debugger

          return; // Exit the function if the product is not found or not owned by the user
        }

        debugger

        // Call the deleteProduct API method here
        this.apiService.deleteProduct(id).subscribe(
          () => {

            debugger
            // The product has been successfully deleted, you can update your product list here if needed.
            console.log('Product deleted successfully');

            // You may want to refresh the product list after deletion
            this.apiService.getMyProducts().subscribe({
              next: (refreshedItems) => {
                this.productList = refreshedItems;
                this.filteredProductList = userProducts.filter(product => product._id !== id);
              },
              error: (err) => {
                console.error(`Error refreshing product list: ${err}`);
              }
            });
          },
          (error) => {
            console.error('Error deleting product:', error);
          }
        );
      },
      error: (err) => {
        console.error(`Error fetching user's products: ${err}`);
      }
    });
  }


  ngOnInit(): void {

    const token = localStorage.getItem('accessToken'); // Adjust this to your token storage method



    if (token) {

      const tokenData = JSON.parse(token);




      this.apiService.getMyProducts().subscribe(
        {
          next: (items) => {
            console.log(items);
            this.productList = items;

            this.myId = tokenData._id;
            this.myCountry = tokenData.country;
            this.myName = tokenData.name;
            this.myEmail = tokenData.email;
            this.myUsername = tokenData.username;
            this.myImage = tokenData.img;
            this.filteredProductList = this.productList.filter(product => product._ownerId === this.myId);

            this.isLoading = false;
          },
          error: (err) => {
            this.isLoading = false;
            console.error(`Error: ${err}`)
          }
        });

    } else {
      console.error('Token not found.');
    }

  }

}