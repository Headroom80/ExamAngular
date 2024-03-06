import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {AuthService} from "./services/auth.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ExamAngu';
  constructor(private authService : AuthService) {
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn(); // Implémenter cette méthode dans AuthService
  }

  logout() {
    this.authService.logout();
  }
}
