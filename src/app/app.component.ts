import { Component } from '@angular/core';
import { RouterModule, RouterOutlet,NavigationEnd,Router } from '@angular/router';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { FooterComponent } from './Shared/footer/footer.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,NavigationEnd,FooterComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-recopao';
  currentRoute: string = '';
   constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    })
  }}
