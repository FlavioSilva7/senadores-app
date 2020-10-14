export interface Senador {
  id: number;
  nomeSenador: string;
}

export interface Despesa {
  tipo: number;
  fornec: string;
  ano: number;
  mes: number;
  dia: number;
  valor: number;
}
export interface DespesaSenador {
  id: number;
  nomeSenador: string;
  despesas: Despesa[];
}
