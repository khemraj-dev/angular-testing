import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { GenericService } from './generic.service';

describe('GenericService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [GenericService]
    });
  });

  it('should be created', inject([GenericService], (service: GenericService) => {
    expect(service).toBeTruthy();
  }));
});
