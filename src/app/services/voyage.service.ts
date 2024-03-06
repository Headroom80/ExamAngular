import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Voyage} from "../models/voyage";
import {VoyageForm} from "../models/voyage-form";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  apiUrl = environment.apiUrl;


  constructor(private http: HttpClient, private routerService: Router) {
  }

  //ici je vais developper mon CRUD, toutes les fonction vont retourner un observable

  getVoyage(id: number): Observable<Voyage> {
    return this.http.get<Voyage>(this.apiUrl + '/voyages/' + id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getVoyages(): Observable<Voyage[]> {
    return this.http.get<Voyage[]>(this.apiUrl + '/voyages').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  put(voyage: VoyageForm): Observable<Voyage> {
    if (!voyage.id) throw new Error("L'ID du voyage est manquant pour la mise à jour.");
    return this.http.put<Voyage>(`${this.apiUrl}/voyages/${voyage.id}`, voyage).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  post(voyage: VoyageForm): Observable<Voyage> {
    return this.http.post<Voyage>(this.apiUrl + "/voyages", voyage).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  delete(id: number): Observable<Voyage> {
    return this.http.delete<Voyage>(`${this.apiUrl}/voyages/${id}`).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      if (error.status === 401) {
      this.handleUnauthorized();
    }
      console.error(`Backend returned code ${error.status}, body was: `, error.error);

    }
      return throwError(() => new Error('Something bad happened; please try again later.'));
    }
  private handleUnauthorized()
    {
      this.routerService.navigate(['/login']);
      console.log('Redirecting to login due to unauthorized request');
    }


}
