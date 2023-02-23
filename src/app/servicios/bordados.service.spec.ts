import { TestBed } from '@angular/core/testing';

import { BordadosService } from './bordados.service';

describe('BordadosService', () => {
  let service: BordadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BordadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
