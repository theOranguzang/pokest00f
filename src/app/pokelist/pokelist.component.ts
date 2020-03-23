import { Component, OnInit } from '@angular/core';
import { PokeService } from './../services/poke.service';
import { PokeListItem } from '../models/poke';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.scss']
})
export class PokelistComponent implements OnInit {

  private pokes: PokeListItem[];

  //TODO: create customizable settings for search results
    //these should be stored in browser cache
  private setting_listPokeLimit = 20;
  private setting_listPokeOffset = 0;

  constructor(private pokeService: PokeService) {  }

  ngOnInit(): void {
    this.pokeService.listPokes().subscribe((pokes: PokeListItem[]) => {
      this.pokes = pokes;
    });
  }

}
