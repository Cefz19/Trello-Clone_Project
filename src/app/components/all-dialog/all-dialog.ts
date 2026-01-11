import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogRef } from '@angular/cdk/dialog';

import { 
  faClose, 
  faCheckToSlot,
  faBars, 
  faTag,
  faUser,
  faCheckSquare,
  faClock
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { BtnComponent } from "../btn-component/btn-component";

@Component({
  selector: 'app-all-dialog',
  imports: [
    CommonModule,
    FontAwesomeModule,
    BtnComponent
],
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

  constructor(
    private dialgoRef: DialogRef,
  ){}

  close(){
    this.dialgoRef.close()
  }

}
