import { NgFor } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  imports: [NgFor],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
productos=[
  {titulo:'esta es una maravillosa carta querido',descripccion:'come un poquito de sopita hijo',imagen:'/assets/abubu.jpg'}
];
}
