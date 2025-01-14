import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: DashboardComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'hero', component: HeroesComponent}
];
