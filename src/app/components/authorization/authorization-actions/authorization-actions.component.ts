import {Component, inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {NgOptimizedImage} from "@angular/common";
import {AuthFormService} from '../form/auth-form.service';
import {AuthenticationService} from '../../../shared/services/authentication.service';
import {Subscription, take} from 'rxjs';

@Component({
  selector: 'app-authorization-actions',
    imports: [
        MatButton,
        MatIcon,
        NgOptimizedImage,
    ],
  templateUrl: './authorization-actions.component.html',
  styleUrl: './authorization-actions.component.scss',
  providers: [AuthenticationService]
})
export class AuthorizationActionsComponent {
  private readonly authenticationService = inject(AuthenticationService)
  private readonly authFormService = inject(AuthFormService)

  register(): Subscription {
    return this.authenticationService.registerUser(this.authFormService.authForm.getRawValue())
      .pipe(
        take(1)
      )
      .subscribe()
  }

  login() {

  }
}
