import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {Router, RouterModule} from "@angular/router";
import {User} from "../../models/user";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: User = new User();
  strError?: string;
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  loggedUser() {
    this.isLoading = true;
    this.authService.login(this.user).subscribe( data => {
      localStorage.setItem("token", data.token);
      this.router.navigate(["/admin/liste"]);
    }, error => {
      console.log(error);
      this.strError = error["type"];
      this.isLoading = false;
    })
  }
}
