import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar-component/navbar-component';
import { AllDialogComponent } from '../../components/all-dialog/all-dialog';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { DialogModule } from '@angular/cdk/dialog';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Dialog } from '@angular/cdk/dialog';
import { AllDo, Column } from '../../models/all.models';

@Component({
  selector: 'app-board-component',
  imports: [
    NavbarComponent,
    DragDropModule, 
    CommonModule,
    DialogModule
  ],
  templateUrl: './board-component.html',
  styles: [
    `
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }
      .cdk-drag-animationg {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
    `,
  ],
})
export class BoardComponent {
  columns: Column[] = [
    {
      title: 'AllDo',
      all: [
        {
          id: '2',
          title: 'Buy a unicorn',
        },
      ],
    },
    {
      title: 'Doing',
      all: [
        {
          id: '2',
          title: 'Buy a unicorn',
        },
      ],
    },
    {
      title: 'Done',
      all: [
        {
          id: '4',
          title: 'Play Video Game',
        },
      ],
    },
  ];

  allDo: AllDo[] = [];
  doing: AllDo[] = [];
  done: AllDo[] = [];

  constructor(
    private dialog: Dialog){}

  drop(event: CdkDragDrop<AllDo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addColumn() {
    this.columns.push({
      title: 'New Column',
      all: [],
    })
  }

  openDialog(allDo: AllDo){
    const dialogRef =this.dialog.open(AllDialogComponent, {
      minWidth: '300px',
      maxWidth: '50%',
      autoFocus: false,
      data: {
        all: allDo,
      }
    });
    dialogRef.closed.subscribe(output => {
      console.log(output);
    })
  }
}
