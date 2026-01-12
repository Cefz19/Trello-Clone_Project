import { Component } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';

@Component({
  selector: 'app-table-component',
  imports: [
    CdkTableModule,
  ],
  templateUrl: './table-component.html',
})
export class TableComponent {

}
