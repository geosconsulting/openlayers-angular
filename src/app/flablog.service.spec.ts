import { TestBed } from '@angular/core/testing';
import { FlablogService } from './flablog.service';

describe('FlablogService', () => {
  let service: FlablogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlablogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
