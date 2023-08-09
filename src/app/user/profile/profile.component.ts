import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
export class ProfileComponent {
  isEditMode: boolean = false;

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

  constructor(private fb: FormBuilder,) {

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



}
