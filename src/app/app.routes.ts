import { Routes } from '@angular/router';
import { ArmoniaComponent } from './musikita/armonia/armonia.component';
import { NotasEscalasComponent } from './musikita/notas-escalas/notas-escalas.component';
import { RitmoCompasComponent } from './musikita/ritmo-compas/ritmo-compas.component';


export const routes: Routes = [
    {path: '',redirectTo:'/armonia',pathMatch:'full'},
    {path:'armonia',component:ArmoniaComponent},
    {path:'notas y escalas',component:NotasEscalasComponent},
    {path:'ritmo y compas',component:RitmoCompasComponent},


];
