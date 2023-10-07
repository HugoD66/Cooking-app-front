import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Ingredient} from "../../ingredient/ingredient.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.scss']
})
export class ListRecipeComponent {
  data$: Observable<Ingredient[]> | undefined;
  constructor(
      private http: HttpClient,

  ) {
  }

  ngOnInit(): void {
    this.data$ = this.getData();
  }
  getData(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>('http://localhost:3000/recipe');
  }
}
