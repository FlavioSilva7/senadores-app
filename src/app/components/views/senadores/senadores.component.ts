import { Component, OnInit } from '@angular/core';
import { Senador } from 'src/app/senadores/senador.model';
import { SenadoresService } from 'src/app/senadores/senadores.service';

@Component({
  selector: 'app-senadores',
  templateUrl: './senadores.component.html',
  styleUrls: ['./senadores.component.css'],
})
export class SenadoresComponent implements OnInit {
  senadores: Senador[] = [];
  constructor(private senadoresService: SenadoresService) {}

  ngOnInit(): void {
    this.senadoresService.getSenadores().subscribe((senadoresLista) => {
      this.senadores = senadoresLista;
      console.log(this.senadores);
    });
  }
}
