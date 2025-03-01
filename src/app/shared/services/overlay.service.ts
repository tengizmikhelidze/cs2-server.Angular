import {ComponentRef, inject, Injectable} from '@angular/core';
import {ComponentType, Overlay, OverlayConfig, OverlayRef, PositionStrategy} from "@angular/cdk/overlay";
import {Observable, Subject, takeUntil, tap} from "rxjs";
import {ComponentPortal} from "@angular/cdk/portal";

@Injectable({
  providedIn: 'root'
})
export class OverlayService<T> {
  public overlay = inject(Overlay);
  overlayRef: OverlayRef | undefined;
  portal!: ComponentRef<T>
  $destroyOverLayRef: Subject<void> = new Subject()

  closeOverlay() {
    this.overlayRef?.dispose()
    this.overlayRef = undefined;
    this.$destroyOverLayRef.next()
  }

  listenBackdropChanges(overlayRef: OverlayRef): Observable<any> {
    return overlayRef.backdropClick()
      .pipe(
        takeUntil(this.$destroyOverLayRef),
        tap(() => {
          overlayRef.dispose()
          this.overlayRef = undefined;
          this.$destroyOverLayRef.next()
        })
      )
  }

  positionStrategy(): PositionStrategy {
    return this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();
  }

  overlayConfig(): OverlayConfig {
    return new OverlayConfig({
      panelClass: 'changeReceiptOwnerOverlay',
      hasBackdrop: true,
      positionStrategy: this.positionStrategy(),
      backdropClass: 'customBackdropClass'
    })
  }

  createOverlay(overlayConfig: OverlayConfig = this.overlayConfig()): OverlayRef {
    return this.overlay.create(overlayConfig)
  }

  createPortal(component: ComponentType<T>): ComponentPortal<T> {
    return new ComponentPortal(component)
  }
}
