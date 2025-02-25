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
  theme = signal<'dark' | 'light' | 'red'>('dark')

  constructor() {
    this.setInitialTheme()
  }

  setInitialTheme(){
    this.setTheme(this.detectPrefersColorScheme());
  }

  setTheme(theme: "dark" | "light" | 'red'){
    document.body.setAttribute(
      'data-theme',
      theme
    );
    this.theme.set(theme)
  }

  detectPrefersColorScheme(): "light" | 'red' {
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? "red" : "light";
    } else {
      return "light";
    }
  }
}
