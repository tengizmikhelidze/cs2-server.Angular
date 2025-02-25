import {Component} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';

@Component({
  selector: 'app-header',
  imports: [
    MatButton,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
