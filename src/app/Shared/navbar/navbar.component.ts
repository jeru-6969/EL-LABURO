import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../../servicio/carrito.service';
import { aja } from '../../model/aja.model';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-navbar',
  imports: [RouterModule, RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  cantidadProductos: number = 0;
  constructor(private carritoService: CarritoService) { }
  ngOnInit(): void {
    //escucha los cambios en el carrito pata actualizar la cantidad de productos
    this.carritoService.carrito$.subscribe((productos: { producto: aja, cantidad: number }[]) => {

      this.cantidadProductos = productos.reduce((total, item) => total + item.cantidad, 0)
    })
  }
  onCarritoClick() {
    console.log('carrito clicked')
  }
}
