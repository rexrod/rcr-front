import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation, Inject } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { DialogStatus } from './dialog-status.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'fury-dialog-status',
  templateUrl: './dialog-status.component.html',
  styleUrls: ['./dialog-status.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DialogStatusComponent implements AfterViewInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogStatus,
  private dialogRef: MatDialogRef<DialogStatusComponent>,
            ) {
  }

  ngAfterViewInit() {

  }

  confirm() {
    this.dialogRef.close(this.data);
  }
}
