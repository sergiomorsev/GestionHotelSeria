
import { Cliente } from '../eliminar-huesped/cliente';
import { Component } from '@angular/core';
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../../servicio/cliente.service';
import { AdministradorService } from '../../servicio/administrador.service';
import { variablesCliente } from '../../servicio/variables';
import { variablesAdmin } from '../../servicio/variable.admin'
import { Administrador } from '../../component/confirmar-reserva/administrador'
import swal from 'sweetalert';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
   oculto = false;
  loginForm: FormGroup;
  errorMessage: string = '';
  clientes: Cliente[];
  admins: Administrador[];
  constructor(
    private clienteService: ClienteService,
    private variables: variablesCliente,
    private router: Router,
    private fb: FormBuilder,
    private variableAdmin: variablesAdmin,
    private administradorService: AdministradorService
  ) {
    this.clientes = variables.prueba;
    this.createForm();
    this.admins = variableAdmin.pruebaAdmin;
    this.createForm();
  }
   

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  login(){
    var email2 = (<HTMLInputElement>document.getElementById("email")).value;
    var pass2 = (<HTMLInputElement>document.getElementById("pass")).value;
   
       if(email2 == "cliente" && pass2 == "cliente"){
        this.router.navigate(['/addHab'])
        this.variables.prueba=this.clientes;
        swal("Inicio de sesion", "Se ha iniciado de manera exitosa", "success");  
         
       }
       
       else if(email2 == "admin" && pass2 == "admin"){
        this.router.navigate(['/InicioSesion'])
        this.variableAdmin.pruebaAdmin=this.admins;  
        swal("Inicio de sesion admin", "Se ha iniciado de manera exitosa como administrador", "success");  
         this.oculto = true;
       }else{
        swal('Error', 'Introduce el código correctamente', 'error')
       }
      
     console.log(this.clientes);
     
   }
   onKeyUp(codigo){
     this.clienteService.getCodigo(codigo).subscribe(
       clientes => this.clientes = clientes
     );
     this.administradorService.getCodigo(codigo).subscribe(
      admins => this.admins = admins
    );
       console.log(codigo);
       
   }

}

