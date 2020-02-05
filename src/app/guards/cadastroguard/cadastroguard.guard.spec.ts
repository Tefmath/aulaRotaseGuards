import { TestBed, async, inject } from '@angular/core/testing';

import { CadastroguardGuard } from './cadastroguard.guard';

describe('CadastroguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CadastroguardGuard]
    });
  });

  it('should ...', inject([CadastroguardGuard], (guard: CadastroguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
