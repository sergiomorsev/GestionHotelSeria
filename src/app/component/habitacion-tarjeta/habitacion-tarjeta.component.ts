import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { Habitacion } from "../../component/add-habitacion/habitacion";
import { HabitacionService, Heroe } from "../../servicio/habitacion.service";

@Component({
  selector: "app-habitacion-tarjeta",
  templateUrl: "./habitacion-tarjeta.component.html",
  styleUrls: ["./habitacion-tarjeta.component.css"]
})
export class HabitacionTarjetaComponent implements OnInit {
  //private habitacion2: Habitacion = new Habitacion()
  /*   @Input() heroe: any = {};
  @Input() id: number; */

  habitaciones: Habitacion[] = [];
  //public habitaciones: any;
  heroes: Heroe[] = [];
  constructor(
    private router: Router,
    private habitacionService: HabitacionService
  ) {}
  ngOnInit() {
    /*   this.habit();
  var img = 'assets/img/habitacion2.jpg'; */
    this.heroes = this.habitacionService.getHeroes();
  }

  pasarIndex(index) {
    console.log("he cogido la habitaciones" + index);
    
  }
  /* habit(){
  this.habitacionService.getHabitaciones()
    .subscribe(habitacion => {
      console.log(habitacion);
      this.habitaciones = habitacion;
    });

} */
  /* pasarId(){
  this.habitacionService.getHabitacion(this.habitaciones.id)
  .subscribe(habitacion => {

  }

  );
} */

  /*  verHeroe() { */

  /*       this.habitacionService.create(this.habitacion2)
        .subscribe(habitacion => {
  
        }
  
        ); */

  /*  console.log("LEEEEEEEEEROOOOOOYYYYYYYYYY") */
  // console.log(  this.index );
  /*   this.router.navigate( ['/heroe', this.id] ); */
  // this.heroeSeleccionado.emit( this.index );
  /*  } */
}
