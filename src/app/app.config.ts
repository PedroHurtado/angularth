import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

//https://dev.to/this-is-angular/whatnew-in-angular-18-60j

/*
  function getTime(date) {
        let options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
        return new Intl.DateTimeFormat('es-ES', options).format(date);
  }
*/

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
