import { Routes } from '@angular/router';
import { ArmoniaComponent } from './musikita/armonia/armonia.component';
import { NotasEscalasComponent } from './musikita/notas-escalas/notas-escalas.component';
import { RitmoCompasComponent } from './musikita/ritmo-compas/ritmo-compas.component';
import { InicioComponent } from './inicio/inicio.component';
import { BellezasComponent } from './bellezas/bellezas.component';


export const routes: Routes = [
    {path: '',redirectTo:'/inicio',pathMatch:'full'},
    {path:'armonia',component:ArmoniaComponent},
    {path:'notas',component:NotasEscalasComponent},
    {path:'ritmo',component:RitmoCompasComponent},
    {path:'inicio',component:InicioComponent},
    {path:'bellezas',component:BellezasComponent},


];
