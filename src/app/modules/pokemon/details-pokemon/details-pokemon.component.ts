import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-details-pokemon',
  templateUrl: './details-pokemon.component.html',
  styles: [
  ]
})
export class DetailsPokemonComponent implements OnInit {
  
  pokemon:Pokemon|undefined;

  constructor(private activeRouter:ActivatedRoute, private router:Router, private pokemonService :PokemonService ){

  }

  ngOnInit(): void {
    const pokemonId:string|null = this.activeRouter.snapshot.paramMap.get("id");
    if(pokemonId){
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    }
   
    
  }
  
  goBack(){
    this.router.navigate(['pokemons'])
  }

}
