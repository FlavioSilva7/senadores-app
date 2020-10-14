import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SenadoresService } from 'src/app/senadores/senadores.service';
import {
  Despesa,
  DespesaSenador,
  ResumoDespesas,
} from '../../../senadores/senador.model';
@Component({
  selector: 'app-senador-detail',
  templateUrl: './senador-detail.component.html',
  styleUrls: ['./senador-detail.component.css'],
})
export class SenadorDetailComponent implements OnInit {
  resumo: any;
  despesas: Despesa;
  senador: DespesaSenador = {
    nomeSenador: '',
    despesas: [],
  };

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
      this.resumirDespesas();
    });
  }

  resumirDespesas() {
    if (this.senador.despesas.length > 0) {
      let resumo = Object.values(
        this.senador.despesas
          .map((despesa) => {
            return { tipo: despesa.tipo, valor: despesa.valor };
          })
          .reduce(
            (r, o) => (
              r[o.tipo] ? (r[o.tipo].valor += o.valor) : (r[o.tipo] = { ...o }),
              r
            ),
            {}
          )
      );
      this.resumo = resumo;
      console.log(resumo);
    }
  }
}
