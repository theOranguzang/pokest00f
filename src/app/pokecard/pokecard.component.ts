import { Component, OnInit, Input } from '@angular/core';
import * as poke from './../models/poke';
import { PokeService } from './../services/poke.service';

@Component({
  selector: 'pokecard',
  templateUrl: './pokecard.component.html',
  styleUrls: ['./pokecard.component.scss']
})
export class PokecardComponent implements OnInit {
  @Input() listItem: poke.PokeListItem

  public pokeDetail: poke.PokeDetail = {
    abilities: [],
    base_experience: 0,
    forms: [],
    game_indices: [],
    height: 0,
    held_items: [],
    id: 0,
    is_default: true,
    location_area_encounters: "",
    moves: [],
    name: "",
    order: 0,
    species: {
      name: "",
      url: ""
    },
    sprites: {
      back_default: "",
      back_female: "",
      back_shiny: "",
      back_shiny_female: "",
      front_default: "",
      front_female: "",
      front_shiny: "",
      front_shiny_female: ""
    },
    stats: [],
    types: [],
    weight: 0
  }

  public assetId: string
  public assetLocalUrl: string

  public detailShown: boolean = false

  constructor(private pokeService: PokeService) {
  }

  showHidePokeDetail() {
    this.pokeService.getPoke(this.assetId+"").subscribe(pokedetail => {
      this.pokeDetail = pokedetail;
    });
    this.detailShown = !this.detailShown;
  }

  ngOnInit(): void {
    this.assetId = this.listItem.url.replace(`https://pokeapi.co/api/v2/pokemon/`,"");
    this.assetId = this.assetId.replace(`/`,"");
    this.assetLocalUrl = "assets/" + this.assetId + ".png"
  }

}
