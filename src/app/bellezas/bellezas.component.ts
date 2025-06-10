import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarritoComponent } from '../carrito/carrito.component';
import { CarritoService } from '../servicio/carrito.service';
import { aja } from '../model/aja.model';

@Component({
  selector: 'app-bellezas',
  imports: [CommonModule,RouterModule],
  templateUrl: './bellezas.component.html',
  styleUrl: './bellezas.component.css'
})
export class BellezasComponent {
productos:aja[]=[
 {
    id:1,
    nombre:'capaz',
    descripccion:'hola',
    precio:99,
    imagen:'https://sc1.musik-produktiv.com/pic-010156371xxl/gibson-70s-explorer-antique-natural.jpg',
    disponible:true,
    cantidad:1

 }
]
constructor(private carritoService:CarritoService){}
  agregar(producto:aja){
    this.carritoService.agregarAlcarrito(producto)
    alert('producto agregado al carrito')
  }

}


