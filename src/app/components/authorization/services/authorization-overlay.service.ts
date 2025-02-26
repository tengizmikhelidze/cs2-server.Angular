import {Injectable} from '@angular/core';
import {OverlayService} from '../../../shared/services';
import {AuthorizationComponent} from '../authorization.component';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationOverlayService extends OverlayService<AuthorizationComponent> {

  showOverlay() {
    if (!this.overlayRef) {
      this.overlayRef = this.createOverlay()

      this.portal = this.overlayRef.attach(this.createPortal(AuthorizationComponent));

      this.listenBackdropChanges(this.overlayRef).subscribe()
    }
  }

}
