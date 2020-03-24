import { Component, OnInit, Input } from '@angular/core';
import * as poke from './../models/poke';

@Component({
  selector: 'pokecard',
  templateUrl: './pokecard.component.html',
  styleUrls: ['./pokecard.component.scss']
})
export class PokecardComponent implements OnInit {
  @Input() listItem: poke.PokeListItem

  public assetId: string
  public assetUrl: string

  constructor() {
  }

  ngOnInit(): void {
    this.assetId = this.listItem.url.replace(`https://pokeapi.co/api/v2/pokemon/`,"");
    this.assetId = this.assetId.replace(`/`,"");
    this.assetUrl = "assets/" + this.assetId + ".png"
  }

}
