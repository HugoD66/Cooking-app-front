import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { Ingredient } from '../ingredient.model'; // Importez la classe Ingredient

@Component({
  selector: 'app-list-ingredient',
  templateUrl: './list-ingredient.component.html',
  styleUrls: ['./list-ingredient.component.scss']
})
export class ListIngredientComponent implements OnInit{
  data$: Observable<Ingredient[]> | undefined; // Utilisez la classe Ingredient
  constructor(
    private http: HttpClient,

  ) {
  }

  ngOnInit(): void {
    this.data$ = this.getData();
  }
  getData(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>('http://localhost:3000/ingredient');
  }

}
