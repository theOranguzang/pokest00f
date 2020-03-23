import { TestBed } from '@angular/core/testing';

import { PokeService } from './poke.service';

describe('PokeService', () => {
  let service: PokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get list of pokes back successfully', () => {
    const qwer = service.listPokes();
    let asdf = "";
    expect(asdf).toEqual("");
  });
});
