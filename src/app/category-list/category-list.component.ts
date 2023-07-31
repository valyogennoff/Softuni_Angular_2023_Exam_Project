import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  title = 'Smart Angular Crafts';

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    // this.apiService.getCategories(8).subscribe((themes) => {
    //   console.log(themes);

    // });
  }
} {

}
