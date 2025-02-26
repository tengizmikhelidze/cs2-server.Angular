import {Component, inject} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {MatIcon} from '@angular/material/icon';
import {ThemeEnum} from '../../shared/enums';
import {ThemeService, ServersInfoService} from '../../shared/services';
import {toSignal} from '@angular/core/rxjs-interop';
import {NgTemplateOutlet} from '@angular/common';
import {AuthorizationOverlayService} from '../authorization/services/authorization-overlay.service';

@Component({
  selector: 'app-header',
  imports: [
    MatButton,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
    MatIcon,
    NgTemplateOutlet
  ],
  providers: [
    ServersInfoService
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected readonly ThemeEnum = ThemeEnum;
  private serversInfoService = inject(ServersInfoService)
  private authorizationOverlayService = inject(AuthorizationOverlayService)
  private themeService = inject(ThemeService)

  getPlayersInfo = toSignal(this.serversInfoService.getCs2ServerPlayersInfo())

  setTheme(theme: keyof typeof ThemeEnum) {
    this.themeService.setTheme(theme);
  }

  openAuthOverlay() {
    this.authorizationOverlayService.showOverlay();
  }
}
