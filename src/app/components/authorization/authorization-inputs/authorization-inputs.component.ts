import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {TextInputComponent} from "../../../shared/components/inputs/text-input/text-input.component";

@Component({
  selector: 'app-authorization-inputs',
    imports: [
        MatIcon,
        TextInputComponent
    ],
  templateUrl: './authorization-inputs.component.html',
  styleUrl: './authorization-inputs.component.scss'
})
export class AuthorizationInputsComponent {

}
