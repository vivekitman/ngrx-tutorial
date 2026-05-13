import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
 
 
import { counterFeature } from './store/counter.feature';
import { provideState, provideStore } from '@ngrx/store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
   provideStore(),
    provideState(counterFeature)
]
};
