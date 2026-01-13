import { Component, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from "../../components/navbar-component/navbar-component";
import { BtnComponent } from "../../components/btn-component/btn-component";

import { HttpClient } from '@angular/common/http';
import { DataSourceProduct } from './data-source';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-table-component',
  imports: [
    CdkTableModule,
    CommonModule,
    ReactiveFormsModule,
    NavbarComponent,
    BtnComponent
],
  templateUrl: './table-component.html',
})
export class TableComponent {
  private cd = inject(ChangeDetectorRef);

  // products: Product[] = [];
  dataSource = new DataSourceProduct();
  columns: string[] = ['id', 'title', 'price', 'cover', 'actions'];
  total = 0;
  input = new FormControl('', { nonNullable:  true })

  constructor(
    private _http: HttpClient
  ){}

  ngOnInit(){
    this._http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe(data => {
      this.dataSource.init(data);
      this.total = this.dataSource.getTotal()
    })
    this.input.valueChanges
    .pipe(
      debounceTime(300)
    )
    .subscribe(value => {
      this.dataSource.find(value);
    })
  }

    update(product: Product) {
      this.dataSource.update(product.id, { price: 20 })
    }

  // ngOnInit(){
  //   this._http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
  //   .subscribe(data => {
  //     this.products = data;
  //     this.total = this.products
  //     .map(item => item.price)
  //     .reduce((price, total) => price + total, 0);
  //     this.cd.detectChanges()
  //   })
  // }

}
