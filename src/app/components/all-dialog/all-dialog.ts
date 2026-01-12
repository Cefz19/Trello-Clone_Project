import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';

import {
  faClose,
  faCheckToSlot,
  faBars,
  faTag,
  faUser,
  faCheckSquare,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BtnComponent } from '../btn-component/btn-component';
import { AllDo } from '../../models/all.models';

interface InputData {
  all: AllDo;
}

interface OutData {
  rta: boolean;
}

@Component({
  selector: 'app-all-dialog',
  imports: [CommonModule, FontAwesomeModule, BtnComponent],
  templateUrl: './all-dialog.html',
})
export class AllDialogComponent {
  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faTag = faTag;
  faUser = faUser;
  faCheckSquare = faCheckSquare;
  faClock = faClock;

  all: AllDo;

  constructor(private dialgoRef: DialogRef<OutData>, @Inject(DIALOG_DATA) data: InputData) {
    this.all = data.all;
  }

  close() {
    this.dialgoRef.close();
  }

  closeWithRta(rta: boolean) {
    this.dialgoRef.close({
      rta,
    });
  }
}
