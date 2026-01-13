import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule }  from '@angular/cdk/scrolling';

import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from "../../components/navbar-component/navbar-component";


@Component({
  selector: 'app-scroll-component',
  imports: 
  [
    NavbarComponent,
    CommonModule,
    ScrollingModule

  ],
  templateUrl: './scroll-component.html',
})
export class ScrollComponent {

  products: Product[] = [];

  constructor(
    private _http: HttpClient
  ){}

  ngOnInit(){
    this._http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe(data => {
      this.products = data;
    })
  }

}
