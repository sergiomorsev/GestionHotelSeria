import { Component, OnInit } from '@angular/core';
import {HabitacionService} from 'src/app/servicio/habitacion.service'
import { HabitacionComponent } from '../habitacion/habitacion.component';
import {Habitacion} from 'src/app/component/add-habitacion/habitacion'
import swal from 'sweetalert';
@Component({
  selector: 'app-add-habitacion',
  templateUrl: './add-habitacion.component.html',
  styleUrls: ['./add-habitacion.component.css']
})
export class AddHabitacionComponent implements OnInit {
  public habitacion: Habitacion = new Habitacion();
  constructor(private habitacionService:HabitacionService ) { }

  ngOnInit() {
  }
/*   envio() {
    console.log('enviado')
   //this.habitacion.precio += '€';
   console.log('enviado2')
    this.habitacionService.create(this.habitacion)
      .subscribe(habitacion => {

      }

      );
     
  } */
envio() {
  swal("Habitación añadida", "La habitación se ha añadido correctamente" , "success");
}
}
