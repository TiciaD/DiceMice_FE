import { Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatToolbar } from '@angular/material/toolbar'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MatToolbar, MatIcon, MatIconButton, MatMenu, MatMenuTrigger, MatMenuItem, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  redirectToDiscordLogin() {
    window.location.href = 'https://dicemice-backend.onrender.com/auth/redirect';
  }
}
