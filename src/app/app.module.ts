import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {IngredientModule} from "./ingredient/ingredient.module";
import {RecipeModule} from "./recipe/recipe.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        HttpClientModule,
        IngredientModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        RecipeModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
