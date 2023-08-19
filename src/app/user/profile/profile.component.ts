import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth.service';
import { Product } from 'src/app/types/product';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationModalComponent } from 'src/app/delete-confirmation-modal/delete-confirmation-modal.component';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isEditMode: boolean = false;
  productList: Product[] = [];
  filteredProductList: Product[] = [];

  productIdToDelete: string = '';

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

  constructor(private fb: FormBuilder, private apiService: ApiService, private authService: AuthService, private dialog: MatDialog) {

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

  getAuthToken(): string | null {
    return localStorage.getItem('accessToken');
  }


  // openDeleteConfirmationModal(id: string): void {
  //   const dialogRef = this.dialog.open(DeleteConfirmationModalComponent, {
  //     width: '300px',
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       // User confirmed the delete action
  //       this.deleteProduct(id);
  //     }
  //   });
  // }

  // deleteProductConfirmation(): void {
  //   // User confirmed the delete action
  //   this.deleteProduct(this.productIdToDelete);
  // }



  deleteProduct(id: string): void {
    const authToken = this.getAuthToken();

    if (!authToken) {
      console.error('Token not found.');
      return; // Exit the function if the token is not found
    }

    // Define the headers with the Authorization token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });

    // Call the deleteProduct API method with headers
    this.apiService.deleteProduct(id, headers).subscribe(
      () => {
        // The product has been successfully deleted, you can update your product list here if needed.
        console.log('Product deleted successfully');

        // You may want to refresh the product list after deletion
        this.apiService.getMyProducts().subscribe({
          next: (refreshedItems) => {
            this.productList = refreshedItems;
            // Remove the deleted product from the filtered list
            this.filteredProductList = this.filteredProductList.filter(product => product._id !== id);
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