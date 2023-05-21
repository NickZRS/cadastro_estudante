import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Estudante} from './estudantes'

@Injectable({
  providedIn: 'root'
})
export class CadService {

  url = "http://localhost:3000/estudante";

  constructor(private http: HttpClient) { }

  getEstudantes(): Observable<Estudante[]>{
    return this.http.get<Estudante[]>(this.url);

  }

  save(estudante: Estudante): Observable<Estudante>{
    return this.http.post<Estudante>(this.url, estudante);

  }
}

