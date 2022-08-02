import { Component, OnInit } from '@angular/core';
import { AdminLoginModel } from './models/admin-login-model';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  adminLoginModule: AdminLoginModel = new AdminLoginModel();
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  login(loginForm: any) {
    this.adminLoginModule = loginForm;
    this.authService.login(this.adminLoginModule);
  }
}
