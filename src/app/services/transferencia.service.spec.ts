import { TestBed } from '@angular/core/testing';

import { TransferenciaService } from './transferencia.service';

describe('TransferenciaService', () => {
  let service: TransferenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
