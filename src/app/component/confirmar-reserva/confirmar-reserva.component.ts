import { Component, OnInit, Input, Output } from '@angular/core';
//import { Reserva } from './Reserva';
import { ClienteService } from '../../servicio/cliente.service';
import { Cliente } from './cliente';
//import { UltimoPasoComponent } from 'src/app/component/ultimo-paso/ultimo-paso.component';
import {Reserva} from '../habitacion/reserva';
import {ReservaService} from '../../servicio/reserva.service'




@Component({
  selector: 'app-confirmar-reserva',
  templateUrl: './confirmar-reserva.component.html',
  styleUrls: ['./confirmar-reserva.component.css']
})
export class ConfirmarReservaComponent implements OnInit {

  //  public reserva: Reserva;
  //  public reservas: Array<Reserva>;

  public cliente: Cliente = new Cliente();
  private reserva2: Reserva = new Reserva()

  //foo:'nombre';


  //cliente = new Cliente(18, '', '');

  constructor(private ReservaService: ReservaService,private ClienteService: ClienteService) {
    //  this.reserva = new Reserva("", "", "", "","");
    //    this.reservas = [
    //    ];
  }

  ngOnInit() {
    this.ReservaService.getReserva2()
    .subscribe(reserva => {
      console.log(reserva);
      this.reserva2 = reserva;
      console.log(this.reserva2.fecha_entrada);
    });
  }
  onSubmit() {
    //this.reservas.push(this.reserva);
  }

  callall() {

    this.ClienteService.create(this.cliente)
      .subscribe(cliente => {

      }

      );
  }

}
