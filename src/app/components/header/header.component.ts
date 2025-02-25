import {Component, inject} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {MatIcon} from '@angular/material/icon';
import {ThemeEnum} from '../../shared/enums';
import {ThemeService} from '../../shared/services';

@Component({
  selector: 'app-header',
  imports: [
    MatButton,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
    MatIcon
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected readonly ThemeEnum = ThemeEnum;
  private themeService = inject(ThemeService)

  setTheme(theme: keyof typeof ThemeEnum) {
    this.themeService.setTheme(theme);
  }
}
