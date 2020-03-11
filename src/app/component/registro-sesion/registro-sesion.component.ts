import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { Registro } from './Registro';
import {ClienteService} from '../../servicio/cliente.service';
import {Cliente} from '../../component/confirmar-reserva/cliente'
//import {ConfirmarReservaComponent} from 'src/app/component/confirmar-reserva/confirmar-reserva.component'
import swal from 'sweetalert';
@Component({
  selector: 'app-registro-sesion',
  templateUrl: './registro-sesion.component.html',
  styleUrls: ['./registro-sesion.component.css']
})
export class RegistroSesionComponent implements OnInit {

  registerForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  public cliente: Cliente = new Cliente()


  ngOnInit() {
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private clienteService: ClienteService
  ) {
  }
  onSubmit(){
    
  }


  callall() {
    console.log("le estoy dando");
        swal('Cliente Registrado', "Se ha registrado correctamente", 'success');
        this.router.navigate(['/resumen'])
  }
}



