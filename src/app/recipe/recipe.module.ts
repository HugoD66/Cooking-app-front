import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RecipeComponent} from "./recipe/recipe.component";
import { ListRecipeComponent } from './list-recipe/list-recipe.component';
import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
    declarations: [
        RecipeComponent,
        ListRecipeComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatProgressSpinnerModule,
    ],
    providers: [],
    exports: [
        ListRecipeComponent,
    ],
    bootstrap: [RecipeComponent]
})
export class RecipeModule { }
