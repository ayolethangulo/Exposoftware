<<<<<<< HEAD
import { Injectable } from '@angular/core';
=======
import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Docente } from '../inscripcion/models/docente';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
>>>>>>> 263e3fb76fb00cc3f8b3e4293fb6d4a78ff281da

@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD
export class DocenteService {

  constructor() { }
=======

export class DocenteService {

  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) 
  {
    this.baseUrl = baseUrl;
   }
  get(): Observable<Docente[]> {
    return this.http.get<Docente[]>(this.baseUrl + 'api/Docente')
    .pipe(
    tap(_ => this.handleErrorService.log('datos enviados')),
    catchError(this.handleErrorService.handleError<Docente[]>('Consulta Docente', null))
    );
  }

  post(docente: Docente): Observable<Docente> {
    return this.http.post<Docente>(this.baseUrl + 'api/Docente', docente)
    .pipe(
    tap(_ => this.handleErrorService.log('datos enviados')),
    catchError(this.handleErrorService.handleError<Docente>('Registrar Docente', null))
    );
  }
>>>>>>> 263e3fb76fb00cc3f8b3e4293fb6d4a78ff281da
}
