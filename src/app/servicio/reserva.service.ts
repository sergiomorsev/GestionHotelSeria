import { Injectable } from '@angular/core';
 // import { CLIENTES } from 'src/app/component/eliminar-huesped/reservas.json';
import { Reserva } from 'src/app/component/habitacion/reserva';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {RegistroSesionComponent} from 'src/app/component/registro-sesion/registro-sesion.component'


@Injectable()
export class ReservaService {
  private urlEndPoint: string = 'http://localhost:8090/api/reservas';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getReservas(): Observable<Reserva[]> {
    //return of(CLIENTES);
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Reserva[])
    );
  }

  create(reserva: Reserva) : Observable<Reserva> {
    return this.http.post<Reserva>(this.urlEndPoint, reserva, {headers: this.httpHeaders})
  }

  getReserva(id): Observable<Reserva>{
    return this.http.get<Reserva>(`${this.urlEndPoint}/${id}`)
  }

  update(reserva: Reserva): Observable<any>{
    console.log(reserva.id)
    return this.http.put<any>(`${this.urlEndPoint}/${reserva.id}`, reserva, {headers: this.httpHeaders})
    
  }

  delete(id: number): Observable<Reserva>{
    return this.http.delete<Reserva>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }

  getReserva2(): Observable<Reserva>{
    return this.http.get<Reserva>(this.urlEndPoint+'/Ultimo')
  }
  

}