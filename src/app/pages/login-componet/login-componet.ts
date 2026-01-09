import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { BtnComponent } from "../../components/btn-component/btn-component";

@Component({
  selector: 'app-login-componet',
  imports: [RouterLink, BtnComponent],
  templateUrl: './login-componet.html',
})
export class LoginComponet {

}
