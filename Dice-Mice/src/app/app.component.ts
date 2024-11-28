import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from "./features/layout/layout/layout.component";
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Dice-Mice';

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private userService: UserService) {
    this.matIconRegistry.addSvgIcon(
      `discord_logo`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/discord-mark-blue.svg') // Custom Mat Icons
    );
  }

  ngOnInit() {
    this.userService.getUser()
  }
}
