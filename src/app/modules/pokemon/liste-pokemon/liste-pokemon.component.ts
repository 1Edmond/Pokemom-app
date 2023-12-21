import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-liste-pokemon',
  templateUrl: './liste-pokemon.component.html',
  styles: [
  ]
})
export class ListePokemonComponent implements OnInit {

  pokemonsList:Array<Pokemon> = [];

  constructor( private router:Router, private pokemonService :PokemonService){

  }
  ngOnInit(): void {
    this.pokemonsList = this.pokemonService.getPokemonList();
  }

  selectPokemon(pokemon:Pokemon):void{
    if(pokemon){
      this.router.navigate(['pokemons', pokemon?.id])
    }
   

  }

}
