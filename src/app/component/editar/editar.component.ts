import { Component, OnInit } from "@angular/core";
import {Cliente} from '../../component/confirmar-reserva/cliente'
import { ClienteService } from "../../servicio/cliente.service";
import { Router, ActivatedRoute } from "@angular/router";
import swal from "sweetalert2";

@Component({
  selector: "app-editar",
  templateUrl: "./editar.component.html"
})
export class EditarComponent implements OnInit {
  /* public cliente: Cliente = new Cliente() */
  public titulo: string = "Crear Cliente";
  public cliente: Cliente = new Cliente()
  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    cliente:Cliente
  ) {}

  ngOnInit() {
    /*     this.cargarCliente() */
  }

  /*  cargarCliente(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.clienteService.getCliente(id).subscribe( (cliente) => this.cliente = cliente)
      }
    })
  } */

  update(): void {
    /*     console.log(this.cliente); */

    /*     this.clienteService.update(this.cliente) */

    this.router.navigate(["/clientes"]);
    swal.fire(
      "Cliente Actualizado",
      `Cliente actualizado con éxito!`,
      "success"
    );
  }
}
