import { Component, OnInit } from "@angular/core";
//import { HeroesService } from '../../servicio/habitacionTarje.service';
import { Router } from "@angular/router";
//import { Heroe } from '../../interfaz/interefaz';
import { Habitacion } from "../../component/add-habitacion/habitacion";
import { HabitacionService } from "src/app/servicio/habitacion.service";

@Component({
  selector: "app-habitaciones",
  templateUrl: "./habitaciones.component.html",
  styleUrls: ["./habitaciones.component.css"]
})
export class HabitacionesComponent implements OnInit {
  private habitacion2: Habitacion = new Habitacion();
  habitaciones: Habitacion[] = [];
  //heroes:Heroe[] = [];
  constructor(
    private habitacionService: HabitacionService,
    private router: Router
  ) {}

  ngOnInit() {
    /*       this.habitacionService.getHabitacion(1)
      .subscribe(habitacion => {
        console.log(habitacion);
        this.habitacion2 = habitacion;
        console.log(this.habitacion2.nombre); */
  }

  // this.heroes = this._heroesService.getHeroes();

  // console.log( this.heroes );
}
/*  verHeroe( id:number ){
      this.router.navigate( ['/habitacion',id] );
    } */
