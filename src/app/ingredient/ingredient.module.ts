import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {IngredientComponent} from "./ingredient/ingredient.component";
import { ListIngredientComponent } from './list-ingredient/list-ingredient.component';
import {MatCardModule} from "@angular/material/card";
import {RecipeModule} from "../recipe/recipe.module";

@NgModule({
  declarations: [
    ListIngredientComponent,
    IngredientComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatCardModule,
        RecipeModule,
    ],
  providers: [],
  exports: [
    ListIngredientComponent
  ]
})
export class IngredientModule { }
