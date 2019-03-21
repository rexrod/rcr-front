import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation, Inject } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { DialogRastreador } from './dialog-rastreador.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Rastreador } from 'app/models/rastreadores/rastreadores.model';
import { RastreadoresControllerService } from 'app/containers/rastreadores/rastreadores.service';

@Component({
  selector: 'fury-dialog-status',
  templateUrl: './dialog-rastreador.component.html',
  styleUrls: ['./dialog-rastreador.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [RastreadoresControllerService],
})
export class DialogRastreadorCustomComponent implements AfterViewInit {

  rastreadores: Rastreador[];
  selectedValue: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogRastreador,
  private dialogRef: MatDialogRef<DialogRastreadorCustomComponent>,
  private apiRastreador: RastreadoresControllerService,
            ) {
    this.apiRastreador.getAll().
    subscribe(rast => {

      // if(obj.myProperty !== undefined) {
      // }

      this.rastreadores = [];
      for(var i=0; i < rast.data.length; i++){
        console.log(rast.data[i]);
        if(!rast.data[i].vehicle){
          this.rastreadores.push(rast.data[i]);
        }
      }     
    }); 
  }

  ngAfterViewInit() {

  }

  confirm() {
    if(this.data.type == 'add'){
      this.data.trackerSerial = this.selectedValue;
    }
    this.dialogRef.close(this.data);
  }
}
