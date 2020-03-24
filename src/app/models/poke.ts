import { Injectable } from '@angular/core';
import { Adapter } from './../models/adapter';

import { map } from 'rxjs/operators';

//==============================

export type PokeList = {
  stupid: number,
  //count: number,
  next: string,
  previous: string,
  results: PokeListItem[]
}

export type PokeListItem = {
  name: string,
  url: string
}

//==============================

export type PokeCard = {
  abilities: PokeCardAbility[],
  base_experience: number,
  forms: PokeCardForm[],
  game_indices: PokeCardGameIndex[],
  height: number,
  held_items: PokeCardHeldItem[],
  id: number,
  is_default: boolean,
  location_area_encounters: string,
  moves: PokeCardMove[],
  name: string,
  order: number,
  species: PokeCardSpecies,
  sprites: PokeCardSprites,
  stats: PokeCardStat[],
  types: PokeCardType[],
  weight: number
}

//==============================

export type PokeCardAbility = {
  ability: PokeCardNestedAbility,
  is_hidden: boolean,
  slot: number
}

export type PokeCardNestedAbility = {
  name: string,
  url: string
}

export type PokeCardForm = {
  name: string,
  url: string
}

export type PokeCardGameIndex = {
  game_index: number,
  version: PokeCardGameIndexVersion
}

export type PokeCardGameIndexVersion = {
  name: string,
  url: string
}

export type PokeCardHeldItem = {
  //TODO: investigate wtf this is
}

export type PokeCardMove = {
  move: PokeCardNestedMove,
  version_group_details: PokeCardMoveVersionGroupDetail[]
}

export type PokeCardNestedMove = {
  name: string,
  url: string
}

export type PokeCardMoveVersionGroupDetail = {
  level_learned_at: number,
  move_learn_method: PokeCardMoveVersionGroupDetailMoveLearnMethod,
  version_group: PokeCardMoveVersionGroupDetailVersionGroup
}

export type PokeCardMoveVersionGroupDetailMoveLearnMethod = {
  name: string,
  url: string
}

export type PokeCardMoveVersionGroupDetailVersionGroup = {
  name: string,
  url: string
}

export type PokeCardSpecies = {
  name: string,
  url: string,
}

export type PokeCardSprites = {
  back_default: string,
  back_female: string,
  back_shiny: string,
  back_shiny_female: string,
  front_default: string,
  front_female: string,
  front_shiny: string,
  front_shiny_female: string
}

export type PokeCardStat = {
  base_stat: number,
  effort: number,
  stat: PokeCardNestedStat
}

export type PokeCardNestedStat = {
  name: string,
  url: string
}

export type PokeCardType = {
  slot: number,
  type: PokeCardNestedType
}

export type PokeCardNestedType = {
  name: string,
  url: string
}


//==============================

// export class Poke {
//   name: string;
//   id: number;
//   constructor(name: "", 
//     id: -1) {
//     this.name = name;
//     this.id = id;
//   }
//   makeCopy(size?: 1) {
//     //TODO: copy constructor
//   }
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class PokeAdapter implements Adapter<Poke> {
//   adapt(item: any): Poke {
//     return new Poke(
//       item.name,
//       item.id
//     )
//   }
// }

//==============================

// export class PokeList {
//   count: number;
//   nextUrl: string;
//   previousUrl: string;
//   results: PokeListItem[];
//   constructor(
//     count: number,
//     nextUrl: "",
//     previousUrl: "",
//     results: null
//   ) {
//     this.count = count;
//     this.nextUrl = nextUrl;
//     this.previousUrl = previousUrl;
//     this.results = null; //TODO: figure this shit out
//   }
// }

// export class PokeListItem {
//   name: string;
//   url: string;
//   id: number;
//   constructor(name: "", 
//     url: "") {
//     this.name = name;
//     this.url = url;
//     this.id = isNaN(Number(url.replace(/(.*\/)*/,""))) ? 
//       -1 : Number(url.replace(/(.*\/)*/,""));
//   }
//   makeCopy(size?: 1) {
//     //TODO: copy constructor
//   }
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class PokeListAdapter implements Adapter<PokeListItem> {
//   adapt(item: any): PokeListItem {
//     return new PokeListItem(
//       item.name,
//       item.url
//     )
//   }
// }
