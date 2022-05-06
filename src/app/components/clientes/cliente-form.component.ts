import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clientes } from 'src/app/models/clientes';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  titulo: string="Formulario Cliente";
  cliente: Clientes = new Clientes();
  error: any;
  constructor(private service: ClienteService, private router:Router) { }

  ngOnInit(): void {
  }
  crear(){
    this.service.crear(this.cliente).subscribe(
      cliente => {
        alert(`Cliente ${cliente.nombre} fue creado con exito!`);
        this.router.navigate(['clientes']);
      },err =>{
        if(err.status === 400){
          this.error=err.error;
        }
      }
    )
  }

}
