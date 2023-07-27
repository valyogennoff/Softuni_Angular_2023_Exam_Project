import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Category } from 'src/app/types/category';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  category: Category | undefined;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.fetchCategory();
  }

  fetchCategory(): void {
    const id = this.activatedRoute.snapshot.params['themeId'];
    this.apiService.getCategory(id).subscribe((category) => {
      this.category = category;
      console.log({ category });
    });
  }
}