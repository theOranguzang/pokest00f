import { Component, OnInit } from '@angular/core';
import { PokeService } from './../services/poke.service';
import { PokecardComponent } from './../pokecard/pokecard.component';
import * as poke from '../models/poke';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.scss']
})
export class PokelistComponent implements OnInit {

  public pokeCards: poke.PokeListItem[];

  public pokeList: poke.PokeList = {
    count: 0,
    next: null,
    previous: null,
    results: []
  };

  public pokeDetails: poke.PokeDetail[] = [];

  //TODO: create customizable settings for search results
    //these should be stored in browser cache
  public setting_listPokeLimit = 20;
  public setting_listPokeOffset = 0;

  constructor(private pokeService: PokeService) {
  }

  ngOnInit(): void {

    this.pokeService.listPokes(
      this.setting_listPokeOffset, this.setting_listPokeLimit
    ).subscribe(pokelist => {
      this.pokeList = pokelist;
    });

    // this.pokeService.getPoke(1+"").subscribe(pokedetails => {
    //   this.pokeDetails.push(pokedetails);
    // });
  }

}
