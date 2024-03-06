import { HttpInterceptorFn } from '@angular/common/http';
export const adminHttpInterceptor: HttpInterceptorFn = (req, next) => {
  let finalReq = req.clone();

  // si  dans le localstorage il y a un token, je vais ajouter ce token dans le header de la requête

  if(localStorage.getItem("token") ){
    finalReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${window.localStorage.getItem("token")}`),
    });
  }
  // je retourne la requête modifiée
  return next(finalReq);
};
