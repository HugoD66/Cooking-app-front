import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  data$: Observable<any> | undefined;
  userForm: FormGroup | undefined;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder) { }
  ngOnInit() {
    this.data$ = this.getData();
  }

  getData(): Observable<any> {
    return this.http.get('http://localhost:3000/users');
  }

}
