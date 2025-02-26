import {Component, inject} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {AuthorizationOverlayService} from './services/authorization-overlay.service';

@Component({
  selector: 'app-authorization',
  imports: [
    MatButton
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
