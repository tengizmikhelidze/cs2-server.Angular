import {Component, inject, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ThemeService} from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private themeService = inject(ThemeService)

  constructor() {
    this.themeService.setInitialTheme()
  }

}
