
import { Component, Inject, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource, MatSnackBar } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';

import { Profile } from 'app/models/profiles/profiles.model';
import { Observable, ReplaySubject } from 'rxjs';
import { ListColumn } from 'app/core/common/list/list-column.model';
import { MOCK_DATA } from '../profiles.fake';
import { filter } from 'rxjs/operators';
import { Module } from 'app/models/profiles/modules.model';


@Component({
  selector: 'fury-profile-create-update',
  templateUrl: './profile-create-update.component.html',
  styleUrls: ['./profile-create-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileCreateUpdateComponent implements OnInit {

  subject$: ReplaySubject<Profile[]> = new ReplaySubject<Profile[]>(1);
  data$: Observable<Profile[]> = this.subject$.asObservable();
  profile: Profile[];
  form: FormGroup;
  mode: 'create' | 'update' = 'create';
  // optionControl = new FormControl();
  // options: Profile[];
  // filteredOptions: Observable<Profile[]>;
  @Input()
  columns: ListColumn[] = [
    { name: 'Status', property: 'active', visible: true, isModelProperty: true },
    // { name: 'Id', property: 'id', visible: true, isModelProperty: true },
    { name: 'Módulo', property: 'name', visible: true, isModelProperty: true },
    { name: 'Visualizar', property: 'view', visible: true, isModelProperty: true },
    { name: 'Cadastrar', property: 'create', visible: true, isModelProperty: true },
    { name: 'Alterar', property: 'update', visible: true, isModelProperty: true },
    { name: 'Deletar', property: 'delete', visible: true, isModelProperty: true },
  ] as ListColumn[];
  dataSource: MatTableDataSource<Profile> | null;
  modules: Module[] = [];

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<ProfileCreateUpdateComponent>,
    public snackBar: MatSnackBar,
    // private apiProfile: ProfileControllerService,
    private fb: FormBuilder) {
    // load the profile
    //     this.apiProfile. getAllUsingGET1().
    //     subscribe(noti => {
    //                       this.profile =  <Profile[]>noti;
    // });
    // A lista vem de um getallModules

    const _modules = MOCK_DATA;
    for (const item of _modules) {
      this.modules.push({ id: item.id, name: item.name, active: false, view: false, update: false, delete: false });
    }


    // // this.apiPart.getAllUsingGET().subscribe(
    // //   success => {
    //     // preenche o array de opções
    //     this.options = success;
    //     // Remove os objetos já cadastrados
    //     this.defaults.parts.map((_obj) => {
    //       const o = this.options.find(a => a.id === _obj.id);
    //       this.options.splice(this.options.indexOf(o), 1);
    //   //   });

    //   // },
    //   // error => {
    //   //   if (error.status === 0 || error.status === 404 || error.status === 500) {
    //   //     this.snackBar.open('Esse serviço está indisponível no momento.', 'OK', {
    //   //     });
    //   //   }
    //   // });
    // passa a lista dos modulos com os nomes
    // insere o dados em brancos
    // fica nesse formato
    // => [id, nome, idCompany, view, create, update, delete, active]
    // instance the form group for mode Update and Create
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      modules: new FormControl(), // aqui é a lista
    });

  }

  loadData() {
    // this.apiProfile.getAllUsingGET()
    //   .subscribe(profiles => {
    //     this.profiles = profiles;
    //     this.dataSource.data = profiles;
    //      this.paginator.firstPage();
    //   },
    //    error => {
    //        if (error.status === 0 || error.status === 404) {
    //            this.snackBar.open('Esse serviço está indisponível no momento.', 'OK', {
    //            });
    //        }
    //    });
    this.dataSource.data = this.modules;
  }


  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    // loads the data from the main table
    this.loadData();
    // console.log(this.visibleColumns);

    // apply filters
    this.data$.pipe(
      filter(Boolean)
    ).subscribe((modules) => {
      this.modules = modules;
      this.dataSource.data = modules;
    });

    if (this.defaults) { // <-- do you have data from the main screen?
      this.mode = 'update';
      this.dataSource.data = this.defaults.modules;
      // Used in the Update Mode to fill the fields
      this.form = this.fb.group({
        id: [this.defaults.id || null],
        name: [this.defaults.name],
        modules: [this.defaults.modules]
      });
      
      if(this.defaults.mode === 'copy'){
        // A copia tem o mesmo comportamento do create, só que os modulos são preenchidos
        this.mode = 'create';
        this.dataSource.data = this.defaults.profile.modules;
        this.form = this.fb.group({
          id: [this.defaults.profile.id || null],
          name: [null],
          modules: [this.defaults.profile.modules]
        });
      }

    } else { // <-- don't have data :( = Mode Create
      this.mode = 'create';
      this.defaults = {} as Profile; // takes blank :)
    }

  }

  createOrUpdate(){
    if (this.mode === 'create') {
      this.createProfile();
    } else if (this.mode === 'update') {
      this.updateProfile();
    }
  }

  save() {
    // verifica nome
    this.verifyName().then(
      _success => {
          if (_success && _success.length) {
            this.form.get('name').setErrors({ 'invalid': true });
            this.snackBar.open('Esse nome já existe! Tente outro.', 'OK', {
              duration: 10000
            });
          } else {
            this.createOrUpdate();
          }
        }
    ).catch(
      _error => {
        console.log(_error);
      }
    );
  }

  createProfile() {
    // send the color as object instead of value
    const profile = this.form.value;
    this.dialogRef.close(profile);
  }

  updateProfile() {
    // send the color as object instead of value
    const profile = this.form.value;
    profile.id = this.defaults.id;
    this.dialogRef.close(profile);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }

  verifyName(): Promise<any> {
    const name = this.form.get('name').value;

    // se estiver nulo, volta
    if (!name) { return Promise.reject(); }
    // se for igual ao anterior, volta também
    if (name === this.defaults.name) { return Promise.resolve(true); }
    
    const data = {
      name: name,
      idCompany: this.form.get('idCompany').value,
    };

    // const promise = this.apiProfile.getByNameUsingPOST(data).
    //   toPromise();

    // return promise;
  }
}

