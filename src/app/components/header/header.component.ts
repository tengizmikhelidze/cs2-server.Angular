import {Component, inject} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {MatIcon} from '@angular/material/icon';
import {ThemeEnum} from '../../shared/enums';
import {ThemeService} from '../../shared/services';
import {ServersInfoService} from '../../shared/services/servers-info.service';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-header',
  imports: [
    MatButton,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
    MatIcon
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
  private themeService = inject(ThemeService)

  getPlayersInfo = toSignal(this.serversInfoService.getCs2ServerPlayersInfo())


  setTheme(theme: keyof typeof ThemeEnum) {
    this.themeService.setTheme(theme);
  }
}
