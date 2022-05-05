import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/models/clientes';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit {
  lista: Clientes[] = [];
  titulo: string = 'Listado de clientes';

  constructor(private service: ClienteService) {}

  ngOnInit(): void {
    this.service.listar().subscribe(lista => this.lista = lista);
  }
}
