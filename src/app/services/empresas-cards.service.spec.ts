import { TestBed } from '@angular/core/testing';

import { EmpresasCardsService } from './empresas-cards.service';

describe('EmpresasCardsService', () => {
  let service: EmpresasCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpresasCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
