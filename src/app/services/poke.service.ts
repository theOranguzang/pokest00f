import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import * as poke from './../models/poke';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  private listPokeApiUrl = 'http://pokeapi.co/api/v2/pokemon/';
  private getPokeApiUrlBase = 'http://pokeapi.co/api/v2/pokemon/';

  constructor(
    private http: HttpClient,
    //private pokeAdapter: poke.PokeAdapter,
    //private pokeListAdapter: poke.PokeListAdapter
  ) { }

  listPokes(offset: number, limit: number): Observable<poke.PokeList> {
    return this.http.get<poke.PokeList>(this.listPokeApiUrl, { 
      params: { 
        offset: offset+'', 
        limit: limit+'' 
      }
    });
  }

  getPoke(idString: string): Observable<poke.PokeDetail> {
    return this.http.get<poke.PokeDetail>(this.getPokeApiUrlBase + idString);
  }

  // getPoke(idString: string): Observable<poke.PokeCard[]> {
  //   return this.http.get(this.getPokeApiUrlBase + idString)
  //     .pipe(map((data: any[]) => data.map(item => this.pokeAdapter.adapt(item))),);
  // }

  // listPokes(offset?: 0, limit?: 10): Observable<poke.PokeListItem[]> {
  //   return this.http.get(this.listPokeApiUrl, { 
  //     params: { 
  //       offset: offset+'', 
  //       limit: limit+'' 
  //     }
  //   }).pipe(map((data: any[]) => data.map(item => this.pokeListAdapter.adapt(item))),);
  // }

  // getPoke(idString: string): Observable<poke.Poke[]> {
  //   return this.http.get(this.getPokeApiUrlBase + idString)
  //     .pipe(map((data: any[]) => data.map(item => this.pokeAdapter.adapt(item))),);
  // }
}
