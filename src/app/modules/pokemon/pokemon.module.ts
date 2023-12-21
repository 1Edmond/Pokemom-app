import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from 'src/app/modules/pokemon/border-card.directive';
import { PokemonTypeColorPipe } from 'src/app/modules/pokemon/pokemon-type-color.pipe';
import { ListePokemonComponent } from 'src/app/modules/pokemon/liste-pokemon/liste-pokemon.component';
import { DetailsPokemonComponent } from 'src/app/modules/pokemon/details-pokemon/details-pokemon.component';
import { Routes, RouterModule} from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';

const pokemonRoutes: Routes = [
  {path : 'pokemons', component: ListePokemonComponent},
  {path : 'pokemons/update/:id', component: PokemonFormComponent},
  {path : 'pokemons/:id', component: DetailsPokemonComponent},

];

@NgModule({
  declarations: [
    ListePokemonComponent,
    DetailsPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonRoutes)
  ],
  providers:[
    PokemonService
  ]
})
export class PokemonModule { }
