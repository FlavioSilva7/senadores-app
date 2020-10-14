import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SenadoresService } from 'src/app/senadores/senadores.service';
import { DespesaSenador } from '../../../senadores/senador.model';
@Component({
  selector: 'app-senador-detail',
  templateUrl: './senador-detail.component.html',
  styleUrls: ['./senador-detail.component.css'],
})
export class SenadorDetailComponent implements OnInit {
  senador: DespesaSenador;
  constructor(
    private senadoresService: SenadoresService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.senadoresService.getDespesa(id).subscribe((despesa) => {
      this.senador = despesa;
      console.log(this.senador);
    });
  }
}
