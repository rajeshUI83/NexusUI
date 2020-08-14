import { TestBed } from '@angular/core/testing';

import { TFormService } from './t-form.service';

describe('TFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TFormService = TestBed.get(TFormService);
    expect(service).toBeTruthy();
  });
});
