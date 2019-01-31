import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
// import { SessionStoreService } from '../../../module/store/session/session-store.service';
import { Subscription } from 'rxjs';
import { Utils } from 'app/utils/utils';
import { fadeOutAnimation } from '../common/route.animation';
import { MatSnackBar } from '@angular/material';
import { CompanyControllerService, CompanyDTO } from 'app/module/performa';
import { ToolbarUserButtonComponent } from '../toolbar/toolbar-user-button/toolbar-user-button.component';
import { SessionService } from 'app/service/session.service';
//import { CookieService } from 'ngx-cookie-service;


@Component({
  selector: 'fury-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fadeOutAnimation],
  providers: [SessionService]
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  inputType = 'password';
  visible = false;
  public sessionSub: Subscription;
  photoUrl: string;
  companies: CompanyDTO[] = [];
  selectedCompanyId = 1;
  
  //toolbarUserButton;
  
  constructor(private router: Router,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private login: LoginService,
    private companyPerformaApi: CompanyControllerService,
    // private companyService: CompanyService,
    public snackBar: MatSnackBar,
    public session: SessionService,
    // private sessionStore: SessionStoreService,
  ) { 
    localStorage.clear();
    //this.toolbarUserButton = ToolbarUserButtonComponent;
  }

  ngOnInit() {
    this.form = this.fb.group({
      idCompany: ['', Validators.required],
      enroll: ['', Validators.required],
      password: ['', Validators.required]
    });
    localStorage.clear();
    //this.loadData();
  }

  send() {
    this.visible = true;
    this.login.login(this.form.get('enroll').value, this.form.get('password').value).then(
      success => {
        //this.session.loadUser();
        this.router.navigate(['/dashboard-lives']);
        //console.log(success);
      },
      error => {
        console.log(error);
        this.visible = false;
        this.snackBar.open('Usuário Inválido!','OK',{
          duration: 30000,
          panelClass: ['blue-snackbar']
        });
      }
    );
    //this.visible = false;
  }

  show() {
    this.inputType = 'text';
    this.visible = true;
    this.cd.markForCheck();
  }

  hide() {
    this.inputType = 'password';
    this.visible = false;
    this.cd.markForCheck();
    this.send();
  }

  public loadData(): void {
    //this.getCompanies();
    // this.sessionSub = this.sessionStore.getSession$().subscribe(res => {
    // console.log(res);
    // this.user = res.user;
    // this.isExpiredSession = res.isExpiredSession;
    // this.hasError = res.error;
    // });
  }

  get dateFooter(): string {
    const date = new Date().toLocaleDateString('en-GB');
    // Date formatting for footer
    const d = date.split('/');
    const m = Utils.mesPorExtenso(d[1]);
    return d[0] + ' de ' + m.charAt(0).toUpperCase() + m.substr(1) + ' de ' + d[2];

  }

  getCompanies() {
    this.companyPerformaApi.getAllUsingGET1(0).subscribe(
      data => {
        // console.log(data)
        this.companies = data.content;
        // this.selectCompanyTransire();
      },
      error => {
        if (error.status === 0 || error.status === 404) {
          //this.snackBar.open('Esse serviço está indisponível no momento.', 'OK', {});
        }
      }
    );
  }

}
