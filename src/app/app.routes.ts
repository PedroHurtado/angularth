import { Routes } from '@angular/router';
import { Pagina1Component } from './pages/pagina1/pagina1.component';
import { Pagina2Component } from './pages/pagina2/pagina2.component';
import { Pagina3Component } from './pages/pagina3/pagina3.component';

export const routes: Routes = [
  {
    path: 'pagina1', component: Pagina1Component
  },
  {
    path: 'pagina2', component: Pagina2Component
  },
  {
    path: 'pagina3', component: Pagina3Component
  }
];
