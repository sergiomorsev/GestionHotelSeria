import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import swal from 'sweetalert';
import * as cardValidator from 'card-validator';
import { ClienteService } from '../../servicio/cliente.service';
import { ConfirmarReservaComponent } from 'src/app/component/confirmar-reserva/confirmar-reserva.component';
import { Router, Params } from '@angular/router';


import { Cliente } from '../../component/confirmar-reserva/cliente'

import {ReservaService} from '../../servicio/reserva.service'
import {Reserva} from '../habitacion/reserva';
@Component({
  selector: 'app-ultimo-paso',
  templateUrl: './ultimo-paso.component.html',
  styleUrls: ['./ultimo-paso.component.css']
})
export class UltimoPasoComponent implements OnInit {
  public datos: String;


  public cliente2: Cliente = new Cliente()
  public reserva2: Reserva = new Reserva()


  public type: any | 'any';
  public cardnumber: any;
  public cardnum: any = '';
  public mask = {
    mask: [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ' ',
      /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ' ',
      /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ' ',
      /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]
  }

  constructor(private clienteService: ClienteService,private ReservaService: ReservaService, private router: Router,) {

  }

  ngOnInit() {

    this.clienteService.getCliente2()
      .subscribe(cliente => {
        console.log(cliente);
        this.cliente2 = cliente;
        console.log(this.cliente2.nombre);
      });

      this.ReservaService.getReserva2()
    .subscribe(reserva => {
      console.log(reserva);
      this.reserva2 = reserva;
      console.log(this.reserva2.fecha_entrada);
    });

  }
  onSubmit() {

  }

  envio() {
    console.log(this.cliente2.tarjeta);
        swal("Reserva", "Se ha realizado la reserva de manera exitosa", "success");
        this.router.navigate(['/resumen'])
  }
  updateCard() {
    this.cardnumber = this.cardnum.split(/[\_\s]+/ig).join('');
    this.type = cardValidator.number(this.cardnumber);
  }
  /* create(): void {
    this.clienteService.create(this.cliente2)
      .subscribe(cliente => {

      }
      );
  } */
  // callall(){
  //   this.clienteService.create(this.cliente)
  //   .subscribe(cliente => {

  //   }
  //   );
  // this.HuespedesPadre.emit({})
  // }
}
