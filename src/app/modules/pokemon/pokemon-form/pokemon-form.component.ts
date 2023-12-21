import { Component, OnInit,Input } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: [
    './pokemon-form.component.css'
  ]
})
export class PokemonFormComponent implements OnInit {
  
  @Input() pokemon : Pokemon;
  types:string[];
  
  
  constructor(private pokemonService:PokemonService){
    
  }


  
  
  
  ngOnInit(): void {
    this.types = this.pokemonService.getPokemonTypeList();
  }

  hasType(type:string){
    return this.pokemon.types.includes(type);
  }

  selectType($event:Event, type:string){
    const isChecked : boolean = ($event.target as HTMLInputElement).checked;
    if(isChecked){
      this.pokemon.types.push(type);
    }else{
      this.pokemon.types.splice(this.pokemon.types.indexOf(type), 1);
    }

  }

  isTypesValid(type:string) : boolean{
    if(this.pokemon.types.length == 1 && this.hasType(type)){
      return false;
    }

    if(this.pokemon.types.length > 2 && !this.hasType(type)){
      return false;
    }
    return false;
  }

  onSubmit(){

  }



}
