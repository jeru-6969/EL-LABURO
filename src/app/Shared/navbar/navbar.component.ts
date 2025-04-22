import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from 'express';


@Component({
  selector: 'app-navbar',
  imports: [FormsModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
constructor(private router: Router){}
camPag(){
  this.router.navigate(['/notas-escalas'])
}
}
