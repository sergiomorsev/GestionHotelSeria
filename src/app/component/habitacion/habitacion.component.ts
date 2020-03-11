import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, Validators } from '@angular/forms';
import { ReservaService } from 'src/app/servicio/reserva.service';
import { Reserva } from 'src/app/component/habitacion/reserva';
//import { HabitacionTarjetaComponent } from '../habitacion-tarjeta/habitacion-tarjeta.component';
import { HeroesService } from '../../servicio/habitacionTarje.service';
//import { Reserva } from '../habitacion/reserva';
import { Habitacion } from '../add-habitacion/habitacion';
import {HabitacionService} from '../../servicio/habitacion.service'
@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.component.html',
  styleUrls: ['./habitacion.component.css'],
  styles: [`
  .custom-day {
    text-align: center;
    padding: 0.185rem 0.25rem;
    display: inline-block;
    height: 2rem;
    width: 2rem;
  }
  .custom-day.focused {
    background-color: #e6e6e6;
  }
  .custom-day.range, .custom-day:hover {
    background-color: rgb(2, 117, 216);
    color: white;
  }
  .custom-day.faded {
    background-color: rgba(2, 117, 216, 0.5);
  }
`
  ],
})
export class HabitacionComponent implements OnInit {
 
 public  habitaciones2 :  Habitacion = new Habitacion()

  public reserva: Reserva = new Reserva()
  public habitacion: Habitacion = new Habitacion()

  ngOnInit() {
   /*  this.habitacionService.getHabitacion(this.habitacion.id)
    .subscribe(habitacion => {
      console.log(habitacion);
      this.habitaciones2 = habitacion;
    });
this.cargarHabitacion(); */
  }
  cargarHabitacion(): void{
/*     this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.habitacionService.getHabitacion(id).subscribe( (habitacion) => this.habitacion = habitacion)
      }
    }) */
  }
  /*  this.clienteService.getCliente2()
   .subscribe(cliente => {
     console.log(cliente);
     this.cliente2 = cliente;
     console.log(this.cliente2.nombre);
   }); */
  //calendario
  hoveredDate: NgbDate;

  fromDate: NgbDate;
  toDate: NgbDate;
  constructor(private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    calendar: NgbCalendar,
    private reservaService: ReservaService,
    //private habitacionTarjeta:HabitacionTarjetaComponent,
    private habitacionService: HabitacionService
 
  ) {
    this.fromDate = calendar.getToday();

    this.toDate = calendar.getNext(calendar.getToday());
  }
  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
    /*  console.log(this.fromDate);
     console.log(this.toDate); */
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }

  //fin calendario
  /* fecha() {
    this.reservaService.create(this.reserva)
      .subscribe(Reserva => {

      }

      );
      console.log(this.fromDate);
      console.log(this.toDate);
  }
   */
  fecha() {
    
    var d = this.fromDate.day;
    var m = this.fromDate.month;
    var y = this.fromDate.year;
    let fecha_entrada1 = d + "-" + m + "-" + y;
    this.reserva.fecha_entrada = fecha_entrada1
    console.log(fecha_entrada1)

    var d2 = this.toDate.day;
    var m2 = this.toDate.month;
    var y2 = this.toDate.year;
    let fecha_salida1 = d2 + "-" + m2 + "-" + y2;
    this.reserva.fecha_salida = fecha_salida1;
    console.log(fecha_salida1)

    this.reservaService.create(this.reserva)
      .subscribe(reserva => {

      }

      );
  }
}


