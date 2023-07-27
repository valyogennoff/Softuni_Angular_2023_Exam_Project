import { TestBed } from '@angular/core/testing';

import { SingleCatProductsService } from './single-cat-products.service';

describe('SingleCatProductsService', () => {
  let service: SingleCatProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleCatProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
