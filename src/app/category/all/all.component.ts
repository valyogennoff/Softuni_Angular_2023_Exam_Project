import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Category } from 'src/app/types/category';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  categoryList: Category[] = [];
  isLoading: boolean = true;
  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getCategories().subscribe({
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
} 