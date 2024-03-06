import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {User} from "../models/user";
import {catchError, Observable, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.apiUrl;
// on va injecter le service HttpClient
  constructor(private httpClient: HttpClient) { }
//creation d'une fonction login qui prend en parametre un utilisateur et qui retourne un observable
  login(user: User): Observable<{ token: string }>{
    return this.httpClient.post<{token: string}>(this.apiUrl+"/auth", user).pipe(
      //ici retry(1) permet de retenter une seule fois la requête en cas d'erreur
      retry(1),
      // si il y a une erreur on va appeler en callback handleError.
      catchError(this.handleError)
    );
  }
// le handleError comme vue dans le cours pour géré les erreurs.
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new ErrorEvent(error.error.message));
  }
}
