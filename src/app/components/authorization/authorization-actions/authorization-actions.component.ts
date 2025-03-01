import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-authorization-actions',
    imports: [
        MatButton,
        MatIcon,
        NgOptimizedImage,
    ],
  templateUrl: './authorization-actions.component.html',
  styleUrl: './authorization-actions.component.scss'
})
export class AuthorizationActionsComponent {

}
