import { Routes, mapToCanActivate, mapToCanActivateChild } from '@angular/router';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { HomeComponent } from './pages/home/home.component';
import { autGuard } from './aut.guard';
import { resolverResolver } from './resolver.resolver';

export const routes: Routes = [
  //
  //{path: '', redirectTo: '/pagina1', pathMatch: 'full'},
  {
    path:'',component:HomeComponent
  },

  {
    //[10:53] ROJAS Jhonhttps://dev.to/samuelwachira/angular-authentication-route-guards-4joe
    path: 'pagina1',
    canActivate:[autGuard],
    loadComponent: ()=>import('./pages/pagina1/pagina1.component').then(c=>c.Pagina1Component)
  },
  {
    path: 'pagina2/:id/pepe/:idpepe',
    loadComponent:()=>import('./pages/pagina2/pagina2.component').then(c=>c.Pagina2Component)
  },
  {
    path: 'pagina3',
    resolve : [resolverResolver],
    loadComponent:()=>import('./pages/pagina3/pagina3.component').then(c=>c.Pagina3Component)
  },
  {
    path:'login',
    loadComponent:()=>import('./pages/login/login.component').then(c=>c.LoginComponent)
  },
  {
    path:'**',
    component : NotfoundComponent

  }

];
