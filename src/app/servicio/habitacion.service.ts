import { Injectable } from "@angular/core";
// import { CLIENTES } from 'src/app/component/eliminar-huesped/habitaciones.json';
//import { Habitacion } from "src/app/component/add-habitacion/habitacion";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
//import { AddHabitacionComponent } from "src/app/component/add-habitacion/add-habitacion.component";

@Injectable()
export class HabitacionService {
 private heroes:Heroe[] = [
    {
      id:1,
      nombre: "Suite Prenium",
      bio: "Suite de 1 dormitorio(s), Camas: 1 Grande, Vista a la ciudad",
      img: "assets/img/habitacion.jpg",
      precio: 150
    },
    {
      id:2,
      nombre: "Suite presidencial",
      bio: "Camas: 1 Grande,Vistas a la Giralda",
      img: "assets/img/habitacion2.jpg",
      precio: 150
    },
    {
      id:3,
      nombre: "Suite Grand",
      bio:
        "Suite de 1 dormitorio(s), Camas: 1 Grande, Vista a la ciudad, Terraza",
      img: "assets/img/habitacion3.jpg",
      precio: 150
    },
    {
      id:4,
      nombre: "Suite Royal",
      bio:
        "Suite de 1 dormitorio(s), Camas: 1 Grande, Vista a la ciudad, Terraza",
      img: "assets/img/habitacion4.jpg",
      precio: 150
    },
    {
      id:5,
      nombre: "Habitacion Deluxe",
      bio: "Suite de 1 dormitorio(s), Camas: 2 pequeñas, Vista a la ciudad",
      img: "assets/img/habitacion.jpg",
      precio: 150
    },
    {
      id:6,
      nombre: "Habitacion Estándar",
      bio:
        "Suite de 1 dormitorio(s), Camas: 2 Pequeñas, Vista a la ciudad, Baño compartido",
      img: "assets/img/habitacion2.jpg",
      precio: 150
    },
    {
      id:7,
      nombre: "Habitacion Gran Deluxe",
      bio: "Suite de 1 dormitorio(s), Camas: 2 Pequeñas, Vista a la giralda",
      img: "assets/img/habitacion3.jpg",
      precio: 150
    },
    {
      id:8,
      nombre: "Habitacion",
      bio: "",
      img: "assets/img/habitacion.jpg",
      precio: 150
    }
  ];

  constructor() {
    console.log("que pasa gente");
  }

  getHeroes() {
    return this.heroes;
  }
  
}
export interface Heroe{
  id:number
  nombre: string;
  bio: string;
  img: string;
  precio:number;
  idx?: number;
};

