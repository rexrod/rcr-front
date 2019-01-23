
import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';

import { Configuration } from 'app/models/configurations/configurations.model';
import { ConfigurationCreateUpdateComponent } from './configuration-create-update/configuration-create-update.component';
import { fadeOutAnimation } from 'app/core/common/route.animation';



@Component({
    selector: 'fury-configurations',
    templateUrl: './configurations.component.html',
    styleUrls: ['./configurations.component.scss'],
    animations: [fadeOutAnimation],
    encapsulation: ViewEncapsulation.None
})
export class ConfigurationsComponent implements OnInit, AfterViewInit, OnDestroy {

    configurations: Configuration[];

    constructor(
        private dialog: MatDialog,
        public snackBar: MatSnackBar,
        // private apiConfiguration: ConfigurationControllerService
    ) { }


    ngOnInit() {

    }


    user(configuration) {

        this.dialog.open(ConfigurationCreateUpdateComponent, {
            data: configuration,
        }).afterClosed().subscribe((_configuration) => {
            if (_configuration) {
                // this.apiConfiguration.updateUsingPUT1(_configuration).
                //   subscribe(
                //        success => {
                            this.snackBar.open('Item atualizado com sucesso!', 'OK', {
                                duration: 3000
                            });
                //            // Reload the table after the post
                //            this.loadData();
                //        },
                //        error => {
                //            this.snackBar.open((error.error[0] && error.error[0].title) ? error.error[0].title : 'Erro na requisição.',
                //            'OK', {
                //                duration: 10000
                //            });
                //        });
            }
        });
    }


    ngAfterViewInit() {

    }

    ngOnDestroy() {
    }


}

