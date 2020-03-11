import { Injectable } from '@angular/core';
 // import { CLIENTES } from 'src/app/component/eliminar-huesped/clientes.json';
import { Cliente } from '../component/eliminar-huesped/cliente';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {RegistroSesionComponent} from 'src/app/component/registro-sesion/registro-sesion.component'


@Injectable()
export class ClienteService {
  private urlEndPoint: string = 'http://localhost:8090/api/clientes';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    //return of(CLIENTES);
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Cliente[])
    );
  }

  create(cliente: Cliente) : Observable<Cliente> {
    return this.http.post<Cliente>(this.urlEndPoint, cliente, {headers: this.httpHeaders})
  }

  getCliente(id): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`)
  }
  getCodigo(codigo): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.urlEndPoint}/codigo/${codigo}`)
  }
  update(cliente: Cliente): Observable<any>{
    console.log(cliente)
    return this.http.put<any>(`${this.urlEndPoint}/${cliente.id}`, cliente, {headers: this.httpHeaders})
    
  }

  delete(id: number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }

  getCliente2(): Observable<Cliente>{
    return this.http.get<Cliente>(this.urlEndPoint+'/Ultimo')
  }
  

}