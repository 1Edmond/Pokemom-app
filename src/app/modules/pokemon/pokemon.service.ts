import { Injectable } from '@angular/core';
import { POKEMONS } from 'src/app/data/pokemon-data';
import { Pokemon } from 'src/app/models/pokemon';

@Injectable()
export class PokemonService {

  constructor() { }

  getPokemonList() : Array<Pokemon>{
    return POKEMONS;
  }


  getPokemonById(id:number) : Pokemon|undefined{
    return POKEMONS.find(x => x.id == id);
  }

  getPokemonTypeList() : Array<string>{
    const data :Array<string> = [];
    POKEMONS.map(x => {
      if(!x.types.some(t => data.includes(t))){
        data.push.apply(x.types);
      }
    });
    return data;
  }




}
