import { Injectable } from '@angular/core';
 // import { CLIENTES } from 'src/app/component/eliminar-huesped/administradores.json';
import { Administrador } from '../component/confirmar-reserva/administrador';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
//import {RegistroSesionComponent} from 'src/app/component/registro-sesion/registro-sesion.component'


@Injectable()
export class AdministradorService {
  private urlEndPoint: string = 'http://localhost:8090/api/administradores';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getAdministradors(): Observable<Administrador[]> {
    //return of(CLIENTES);
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Administrador[])
    );
  }

  create(administrador: Administrador) : Observable<Administrador> {
    return this.http.post<Administrador>(this.urlEndPoint, administrador, {headers: this.httpHeaders})
  }

  getAdministrador(id): Observable<Administrador>{
    return this.http.get<Administrador>(`${this.urlEndPoint}/${id}`)
  }
  getCodigo(codigo): Observable<Administrador[]>{
    return this.http.get<Administrador[]>(`${this.urlEndPoint}/codigo/${codigo}`)
  }
  update(administrador: Administrador): Observable<any>{
    console.log(administrador.id)
    return this.http.put<any>(`${this.urlEndPoint}/${administrador.id}`, administrador, {headers: this.httpHeaders})
    
  }

  delete(id: number): Observable<Administrador>{
    return this.http.delete<Administrador>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }

  getAdministrador2(): Observable<Administrador>{
    return this.http.get<Administrador>(this.urlEndPoint+'/Ultimo')
  }
  

}