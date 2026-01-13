import { Component, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { NavbarComponent } from "../../components/navbar-component/navbar-component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table-component',
  imports: [
    CdkTableModule,
    CommonModule,
    NavbarComponent,
],
  templateUrl: './table-component.html',
})
export class TableComponent {
  private cd = inject(ChangeDetectorRef);

  products: Product[] = [];
  columns: string[] = ['id', 'title', 'price', 'cover'];
  total = 0;

  constructor(
    private _http: HttpClient
  ){}

  ngOnInit(){
    this._http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe(data => {
      this.products = data;
      this.total = this.products
      .map(item => item.price)
      .reduce((price, total) => price + total, 0);
      this.cd.detectChanges()
    })
  }

}
