import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  theme = signal<'light' | 'red'>('red')

  constructor() {
    this.setInitialTheme()
  }

  setInitialTheme(){
    this.setTheme(this.detectPrefersColorScheme());
  }

  setTheme(theme: "light" | 'red'){
    document.body.setAttribute(
      'data-theme',
      theme
    );
    this.theme.set(theme)
  }

  detectPrefersColorScheme(): "light" | 'red' {
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      return window.matchMedia('(prefers-color-scheme: red)').matches ? "red" : "light";
    } else {
      return "light";
    }
  }
}
