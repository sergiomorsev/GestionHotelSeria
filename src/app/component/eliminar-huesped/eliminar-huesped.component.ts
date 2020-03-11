import { Component, OnInit } from "@angular/core";
import { Cliente, cliente } from "./cliente";

import { ClienteService } from "../../servicio/cliente.service";
import swal from "sweetalert2";
@Component({
  selector: "app-eliminar-huesped",
  templateUrl: "./eliminar-huesped.component.html",
  styleUrls: ["./eliminar-huesped.component.css"]
})
export class EliminarHuespedComponent implements OnInit {
  clientes: Cliente[];
  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    this.clienteService
      .getClientes()
      .subscribe(clientes => (this.clientes = clientes));
  }
  delete(cliente: Cliente): void {
    swal
      .fire({
        title: "Está seguro?",
        text: `¿Seguro que desea eliminar a este cliente?`,
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!",
        cancelButtonText: "No, cancelar!",
        confirmButtonClass: "btn btn-success",
        cancelButtonClass: "btn btn-danger",
        buttonsStyling: false,
        reverseButtons: true
      })
      .then(result => {
        if (result.value) {
          swal.fire(
            '¡Eliminado!',
            'Se ha eliminado correctamente',
            'success'
          )
        }
      })
  }
}
