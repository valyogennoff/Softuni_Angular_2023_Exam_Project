import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

import { Product } from 'src/app/types/product';

interface Profile {
  name: string;
  username: string;
  email: string;
  country: string;
  img: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isEditMode: boolean = false;
  productList: Product[] = [];
  isLoading: boolean = true;

  profileDetails: Profile = {
    name: 'Valyo Gennoff',
    username: 'valyogennoff',
    email: 'gennoff@gmail.com',
    country: 'Bulgaria',
    img: 'https://randomuser.me/api/portraits/men/22.jpg'

  };

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    country: ['', Validators.required],
    img: ['', Validators.required],
  });
  AuthService: any;

  constructor(private fb: FormBuilder, private apiService: ApiService) {

  }


  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }

  saveProfileHandler(): void {
    if (this.form.invalid) {
      return
    };

    this.profileDetails = { ...this.form.value } as Profile;
    console.log(this.form.value);

    this.toggleEditMode();
  }

  ngOnInit(): void {
    // const userId = this.AuthService.getUserId
    // console.log(userId);

    // this.apiService.getMyProducts().subscribe(
    //   {
    //     next: (items) => {
    //       console.log(items);
    //       this.productList = items;
    //       this.isLoading = false;
    //     },
    //     error: (err) => {
    //       this.isLoading = false;
    //       console.error(`Error: ${err}`)
    //     }
    //   });
  }



}
