import { Injectable } from '@angular/core';
import { Adapter } from './../models/adapter';

//==============================

export type PokeList = {
  count: number,
  next: string,
  previous: string,
  results: PokeListItem[]
}

export type PokeListItem = {
  name: string,
  url: string
}

//==============================

export type PokeDetail = {
  abilities: PokeDetailAbility[],
  base_experience: number,
  forms: PokeDetailForm[],
  game_indices: PokeDetailGameIndex[],
  height: number,
  held_items: PokeDetailHeldItem[],
  id: number,
  is_default: boolean,
  location_area_encounters: string,
  moves: PokeDetailMove[],
  name: string,
  order: number,
  species: PokeDetailSpecies,
  sprites: PokeDetailSprites,
  stats: PokeDetailStat[],
  types: PokeDetailType[],
  weight: number
}

//==============================

export type PokeDetailAbility = {
  ability: PokeDetailNestedAbility,
  is_hidden: boolean,
  slot: number
}

export type PokeDetailNestedAbility = {
  name: string,
  url: string
}

export type PokeDetailForm = {
  name: string,
  url: string
}

export type PokeDetailGameIndex = {
  game_index: number,
  version: PokeDetailGameIndexVersion
}

export type PokeDetailGameIndexVersion = {
  name: string,
  url: string
}

export type PokeDetailHeldItem = {
  //TODO: investigate wtf this is
}

export type PokeDetailMove = {
  move: PokeDetailNestedMove,
  version_group_details: PokeDetailMoveVersionGroupDetail[]
}

export type PokeDetailNestedMove = {
  name: string,
  url: string
}

export type PokeDetailMoveVersionGroupDetail = {
  level_learned_at: number,
  move_learn_method: PokeDetailMoveVersionGroupDetailMoveLearnMethod,
  version_group: PokeDetailMoveVersionGroupDetailVersionGroup
}

export type PokeDetailMoveVersionGroupDetailMoveLearnMethod = {
  name: string,
  url: string
}

export type PokeDetailMoveVersionGroupDetailVersionGroup = {
  name: string,
  url: string
}

export type PokeDetailSpecies = {
  name: string,
  url: string,
}

export type PokeDetailSprites = {
  back_default: string,
  back_female: string,
  back_shiny: string,
  back_shiny_female: string,
  front_default: string,
  front_female: string,
  front_shiny: string,
  front_shiny_female: string
}

export type PokeDetailStat = {
  base_stat: number,
  effort: number,
  stat: PokeDetailNestedStat
}

export type PokeDetailNestedStat = {
  name: string,
  url: string
}

export type PokeDetailType = {
  slot: number,
  type: PokeDetailNestedType
}

export type PokeDetailNestedType = {
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
