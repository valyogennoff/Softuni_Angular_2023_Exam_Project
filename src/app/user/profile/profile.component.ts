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