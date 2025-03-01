import {Component, inject} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {AuthorizationOverlayService} from './services/authorization-overlay.service';
import {TextInputComponent} from '../../shared/components/inputs/text-input/text-input.component';

@Component({
  selector: 'app-authorization',
  imports: [
    MatButton,
    TextInputComponent
  ],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss'
})
export class AuthorizationComponent {
  private authorizationOverlayService = inject(AuthorizationOverlayService)

  closeOverlay() {
    this.authorizationOverlayService.closeOverlay()
  }

}
