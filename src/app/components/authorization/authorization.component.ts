import {Component, inject} from '@angular/core';
import {AuthorizationOverlayService} from './services/authorization-overlay.service';
import {AuthorizationInputsComponent} from './authorization-inputs/authorization-inputs.component';
import {AuthorizationActionsComponent} from './authorization-actions/authorization-actions.component';
import {AuthFormService} from './form/auth-form.service';

@Component({
  selector: 'app-authorization',
  imports: [
    AuthorizationInputsComponent,
    AuthorizationActionsComponent
  ],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss',
  providers: [AuthFormService]
})
export class AuthorizationComponent {
  private authorizationOverlayService = inject(AuthorizationOverlayService)

  closeOverlay() {
    this.authorizationOverlayService.closeOverlay()
  }

}
