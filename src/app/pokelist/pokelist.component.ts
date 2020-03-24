import { Component, OnInit } from '@angular/core';
import { PokeService } from './../services/poke.service';
import * as poke from '../models/poke';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.scss']
})
export class PokelistComponent implements OnInit {

  public pokes: poke.PokeListItem[];

  public pokeList: poke.PokeList;

  public kevinisright: number;

  //TODO: create customizable settings for search results
    //these should be stored in browser cache
  public setting_listPokeLimit = 20;
  public setting_listPokeOffset = 0;

  constructor(private pokeService: PokeService) {  }

  resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(this.pokeList);
        console.log(this.kevinisright);
        resolve(x);
      }, 10000);
    });
  }

  async getValueWithAsync() {
    const value = <number>await this.resolveAfter2Seconds(20);
    console.log(`async result: ${value}`);
    }

  ngOnInit(): void {

    this.kevinisright = 1;

    this.pokeService.listPokes().subscribe(pokelist => this.pokeList);

    this.resolveAfter2Seconds(2);

    this.kevinisright = 2;

    // this.pokeService.listPokes().subscribe((pokes: PokeListItem[]) => {
    //   this.pokes = pokes;
    // });
  }

}
