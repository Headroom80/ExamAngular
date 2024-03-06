import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideToastr} from "ngx-toastr";
import {adminHttpInterceptor} from "./admin-http.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(
    // ici on va ajouter notre interceptor, on utilise la fonction withInterceptors pour ajouter un interceptor.
    withInterceptors([
    adminHttpInterceptor,
  ])), provideAnimations(), provideToastr()]
};
