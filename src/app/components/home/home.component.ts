import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent implements OnInit {
  userEmail: string | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.getCurrentUserEmail().subscribe(email => {
      this.userEmail = email;
    });
  }

  OnBtnProductos() {
    this.router.navigate(["/productoVista"]);
  }

  OnBtnContenedores() {
    this.router.navigate(["/contenedorVista"]);
  }
}
