
import { Component, Inject, OnInit  } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
  HttpResponse, HttpEvent }                           from '@angular/common/http';

import { Transport } from 'app/models/transports/transports.model';
import { environment } from 'environments/environment.dev';
import { Rastreador } from 'app/models/rastreadores/rastreadores.model';
import { RastreadoresControllerService } from 'app/containers/rastreadores/rastreadores.service';

@Component({
  selector: 'fury-transport-create-update',
  templateUrl: './transport-create-update.component.html',
  styleUrls: ['./transport-create-update.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [RastreadoresControllerService]
})
export class TransportCreateUpdateComponent implements OnInit {

  transport: Transport[];
  form: FormGroup;
  mode: 'create' | 'update' = 'create';
  rastreadores: Rastreador[];
  selected: string;
  selectedSegment: string;
  progress = false;
  hideElement = true;

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
            private http: HttpClient,
            public snackBar: MatSnackBar,
            private dialogRef: MatDialogRef<TransportCreateUpdateComponent>,
            private apiRastreador: RastreadoresControllerService,
            //private apiTransport: TransportControllerService,
            private fb: FormBuilder) {
              this.apiRastreador.getAll().
              subscribe(rast => {

                // if(obj.myProperty !== undefined) {
                // }

                this.rastreadores = [];
                for(var i=0; i < rast.data.length; i++){
                  //console.log(rast.data[i]);
                  if(!rast.data[i].vehicle){
                    this.rastreadores.push(rast.data[i]);
                  }
                }
              
                //this.rastreadores =  <Rastreador[]>rast.data.find(x => x.vehicle === undefined );
                //this.rastreadores = <Rastreador[]>rast.data;
              });

            // load the transport
            //     this.apiTransport. getAllUsingGET1().
            //     subscribe(noti => {
            //                       this.transport =  <Transport[]>noti;
            // });
            // instance the form group for mode Update and Create
            this.form = new FormGroup({
              _id: new FormControl(),
              type: new FormControl(),
              vehiclePlate: new FormControl(),
              capacity: new FormControl(),
              thirdCompany: new FormControl(),
              idRastreador: new FormControl(),
              description: new FormControl(),
              segment: new FormControl(),
            });

  }

  ngOnInit() {

    if (this.defaults) { // <-- do you have data from the main screen?
      this.mode = 'update';
      // Used in the Update Mode to fill the fields
      console.log(this.fb);
      this.form = this.fb.group({
        _id: [this.defaults._id || null],
        type:  {value:[this.defaults.type], disabled: true}, //[this.defaults.type],
        vehiclePlate: [this.defaults.vehiclePlate],
        capacity: [this.defaults.capacity],
        thirdCompany: [this.defaults.thirdCompany],  
        idRastreador: [this.defaults.idRastreador],
        description: [this.defaults.description],      
        segment: {value:[this.defaults.segment], disabled: true},
      });

    } else { // <-- don't have data :( = Mode Create
      this.defaults = {} as Transport; // takes blank :)
    }

  }

  save() {
    //console.log('entrou aqui');
    if (this.mode === 'create') {
      this.createTransport();
    } else if (this.mode === 'update') {
      this.updateTransport();
    }
  }

  saveCustom() {

    if (this.mode === 'create') {
    // UPLOAD
      this.progress = true;
      this.upload()
        .then(success => {
          // console.log(success);
          //this.form.get('picture').setValue(success);
          this.progress = false;
          this.createTransport();
        })
        .catch(error => {
          // const _error = JSON.parse(error.error);
          // this.snackBar.open(_error[0].title ? _error[0].title : 'Erro ao tentar criar o transporte.',
          //   'OK', {
          //     duration: 10000
          //   });
          console.log(error);
          this.progress = false;
        });
    } else if (this.mode === 'update') {
      this.updateTransport();
    }
  }

  createTransport() {
    // send the color as object instead of value
    const transport = this.form.value;
    console.log(transport);
    this.dialogRef.close(transport);
  }

  updateTransport() {
    // send the color as object instead of value
    //console.log('entrou aqui');
    console.log(this.form.value);
    console.log(this.defaults);
    const transport = this.form.value;
    transport.id = this.defaults.id;
    transport.segment = this.defaults.segment;
    transport.type = this.defaults.type;
    this.dialogRef.close(transport);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }

  upload(): Promise<any> {

    // const promise = this.http.post(environment.origin.parts + '/parts/upload', _uploadData, { responseType: 'text' })
    //   .toPromise();

    let token = localStorage.getItem('token');
    console.log(token);
    const httpOptions = {
        headers: new HttpHeaders({
        "Content-Type":  "application/x-www-form-urlencoded",
        "Authorization": "Bearer " + `${token}`
        }),
    };

    let transport = this.form.value;

    const formData = new URLSearchParams();
    // append your data
    // formData.set('type', transport.type);
    formData.set('vehiclePlate', transport.vehiclePlate);
    formData.set('type', this.selected);
    formData.set('segment', this.selectedSegment);
    formData.set('capacity', transport.capacity);
    formData.set('thirdCompany', transport.thirdCompany);
    //formData.set('segment', transport.segment);
    formData.set('description', transport.description);
    
    console.log(formData.getAll);
    console.log(formData.toString());
    console.log(httpOptions);

    const promise = this.http.post(environment.origin.transports +'/transports/registertransport',formData.toString(),httpOptions).toPromise();

    return promise;
  }

  typeChanged(value){
    if(value == 'Carreta'){
      this.selectedSegment = 'Carga';
    }else if(value == 'Ônibus'){
      this.selectedSegment = 'Funcionarios';
    }else if(value == 'Carro'){
      this.selectedSegment = 'Funcionarios';
    }
  }
}

