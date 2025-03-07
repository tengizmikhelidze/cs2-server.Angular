import {Component, inject} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {TextInputComponent} from "../../../shared/components/inputs/text-input/text-input.component";
import {AuthFormService} from '../form/auth-form.service';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-authorization-inputs',
  imports: [
    MatIcon,
    TextInputComponent,
    ReactiveFormsModule
  ],
  templateUrl: './authorization-inputs.component.html',
  styleUrl: './authorization-inputs.component.scss'
})
export class AuthorizationInputsComponent {
  public readonly authFormService = inject(AuthFormService)
}
