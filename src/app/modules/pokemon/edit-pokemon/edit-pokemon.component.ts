import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styles: [
  ]
})
export class EditPokemonComponent implements OnInit {

  pokemon:Pokemon|undefined;

  constructor(private activatedRoute:ActivatedRoute, private pokemonService:PokemonService)
{


}
  ngOnInit(): void {
    const pokemonId :string|null = this.activatedRoute.snapshot.paramMap.get("id");
    if(pokemonId){
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    }
  
  }


}
