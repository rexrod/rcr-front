
export class SlaModel {
     id?: number;
     sla: string;

     constructor(sla){
       this.id = sla.id;
       this.sla = sla.sla;
     }

  //TODO remover
}
