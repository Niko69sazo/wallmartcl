import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';  // Importa el servicio de autenticación
import { Router } from '@angular/router';  // Importa el servicio de rutas

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(
    private authService: AuthService,  
    private router: Router  
  ) { }

  ngOnInit() {}

  
  logout() {
    this.authService.logout();  
    alert('Sesión Cerrada');
    this.router.navigate(['/home']);  
  }

}
