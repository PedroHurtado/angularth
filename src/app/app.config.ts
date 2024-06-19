import { ApplicationConfig, provideExperimentalZonelessChangeDetection, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { URLGLOBAL, URLTOKEN } from './util/urlglobal';
import { provideHttpClient, withFetch } from '@angular/common/http';

//https://dev.to/this-is-angular/whatnew-in-angular-18-60j

/*
  function getTime(date) {
        let options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
        return new Intl.DateTimeFormat('es-ES', options).format(date);
  }
*/

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: URLTOKEN, useValue: URLGLOBAL },
    provideHttpClient(
      withFetch(),
    ),
    //provideExperimentalZonelessChangeDetection()
  ]

};
