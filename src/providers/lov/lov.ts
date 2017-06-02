import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {EstadoTarefa} from "../../model/EstadoTarefa";

@Injectable()
export class LovProvider {

  getTarefasStates():Array<EstadoTarefa>{
    return [EstadoTarefa.NOVA,EstadoTarefa.EXECUTANDO,EstadoTarefa.FINALIZADA]
  }

}
