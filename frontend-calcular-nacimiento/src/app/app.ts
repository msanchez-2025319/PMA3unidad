// src/app/app.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { calcularNacimiento } from './utils/calcularNacimiento';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  edad: number = 0;
  anioNacimiento: number | null = null;  // ← Cambiado: añoNacimiento → anioNacimiento
  error: string = '';

  calcularAnioNacimiento() {  // ← Cambiado: calcularAñoNacimiento → calcularAnioNacimiento
    if (this.edad <= 0 || this.edad > 120) {
      this.error = 'Por favor, ingresa una edad válida (1-120 años)';
      this.anioNacimiento = null;
      return;
    }
    
    this.error = '';
    this.anioNacimiento = calcularNacimiento(this.edad);
  }

  limpiar() {
    this.edad = 0;
    this.anioNacimiento = null;
    this.error = '';
  }

  getYear(): number {
    return new Date().getFullYear();
  }
}