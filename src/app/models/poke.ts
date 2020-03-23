import { Injectable } from '@angular/core';
import { Adapter } from './../models/adapter';

import { map } from 'rxjs/operators';

//==============================

export class Poke {
  name: string;
  id: number;
  constructor(name: "", 
    id: -1) {
    this.name = name;
    this.id = id;
  }
  makeCopy(size?: 1) {
    //TODO: copy constructor
  }
}

@Injectable({
  providedIn: 'root'
})
export class PokeAdapter implements Adapter<Poke> {
  adapt(item: any): Poke {
    return new Poke(
      item.name,
      item.id
    )
  }
}

//==============================

export class PokeList {
  count: number;
  nextUrl: string;
  previousUrl: string;
  results: PokeListItem[];
  constructor(
    count: number,
    nextUrl: "",
    previousUrl: "",
    results: null
  ) {
    this.count = count;
    this.nextUrl = nextUrl;
    this.previousUrl = previousUrl;
    this.results = null; //TODO: figure this shit out
  }
}

export class PokeListItem {
  name: string;
  url: string;
  id: number;
  constructor(name: "", 
    url: "") {
    this.name = name;
    this.url = url;
    this.id = isNaN(Number(url.replace(/(.*\/)*/,""))) ? 
      -1 : Number(url.replace(/(.*\/)*/,""));
  }
  makeCopy(size?: 1) {
    //TODO: copy constructor
  }
}

@Injectable({
  providedIn: 'root'
})
export class PokeListAdapter implements Adapter<PokeListItem> {
  adapt(item: any): PokeListItem {
    return new PokeListItem(
      item.name,
      item.url
    )
  }
}
