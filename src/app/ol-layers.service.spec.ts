import { TestBed } from '@angular/core/testing';

import { OlLayersService } from './ol-layers.service';

describe('OlLayersService', () => {
  let service: OlLayersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OlLayersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
