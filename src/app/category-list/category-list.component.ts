import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Category } from '../types/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categoryList: Category[] = [];
  isLoading: boolean = true;
  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getCategories(8).subscribe({
      next: (themes) => {
        this.categoryList = themes;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.error(`Error: ${err.message}`);
      },
    });
  }
} {

}
