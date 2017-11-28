import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { FieldComponent }             from '../../models/field.component';
import { FieldControlService }        from '../../services/fields/field-control.service';
import { PITService }                 from '../../services/fields/pit.service';

import { DropdownComponent } from '../../components/fields/dropdown/dropdown.coponent';
import { TextFiedComponent }  from '../../components/fields/text/text.coponent';
import { NumberFiedComponent }  from '../../components/fields/number/number.coponent';
import { DateFiedComponent }  from '../../components/fields/datefield/datefield.coponent';
import { DialogShowItemComponent } from '../../components/panel/dialogshowitem.component';

@Component({
  selector: 'app-dynamic-form',
 // styleUrls: [ '../../app.component.css'],
 
  template: `
  <mat-card>
   
 <mat-card-content>
    <mat-toolbar>
      <div class="blockcenter"></div>
        <button mat-raised-button (click)="openDialog();" 
        *ngIf="addfields" >Add</button>
    </mat-toolbar>
 


    <mat-divider md-inset></mat-divider>

      <form (ngSubmit)="onSubmit()" [formGroup]="form" layout layout-align="center" layout-padding>
        <div *ngFor="let field of fields" class="form-row">
          <app-field [field]="field" [form]="form" (messageEvent)="receiveMessage($event)" ></app-field>
        </div>
      </form>
      <div *ngIf="payLoad" class="form-row">
        <strong>Saved the following values</strong><br>{{payLoad}}
      </div>

    </mat-card-content>
    <mat-card-actions align="end" > <!--align="end" -->
      <button mat-raised-button  matStepperPrevious><i class="material-icons mat-18">keyboard_arrow_left</i>Back</button>
      <div class="blockcenter"></div>
      <button mat-raised-button matStepperNext color="primary" (click)="onSubmit()"  [disabled]="!form.valid">Save</button>
    </mat-card-actions>
  </mat-card>
  `,
  providers: [ FieldControlService ]
})
export class FieldsFormComponent implements OnInit {
 
  @Input() fields: FieldComponent<any>[] = [];
  @Input() addfields: number = 0;  
  form: FormGroup;
  payLoad = '';
  lastOrder:number = 999;
  lastIndex:number = 1;

  additemsData:any[] = [];
  deletedItem:any[] = [];

  constructor(private fcs: FieldControlService,
              private pitService: PITService,
              public dialog: MatDialog) {  }
 
  ngOnInit() {
    this.form = this.fcs.toFormGroup(this.fields);
    this.lastOrder = this.fields.length + 1;    
    this.getAddItems(this.addfields);

  }
 
  onSubmit() {
    console.log(this.form.value);
    this.payLoad = JSON.stringify(this.form.value);
    //debugger;
    this.fcs.calculate(this.fields, this.form.value);
  }


  addField(item:any):void{

    let data:any = new NumberFiedComponent({
      key: item.id_item,
      label: item.name,
      value: item.default_value,
      required: true,
      type: item.item_field,
      order: this.lastOrder,            
      hintLabel: item.hint_label,
      min: item.min,
      max:item.max
    });

    this.fields.push( data );

    this.fcs.addFormGroup(this.form,  data);
    this.lastIndex = this.lastIndex + 1;
    this.lastOrder = this.lastOrder + 1;
    //this.form = this.fcs.toFormGroup(this.fields);

  }

  receiveMessage($event) {
    console.log($event);
  }

  public openDialog():void{
    let dialogRef = this.dialog.open(DialogShowItemComponent, {
      width: '250px',
      data: { items:this.additemsData}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      let selectItem = this.additemsData.find(x => x.id_item=== result) ;
      let index = this.additemsData.indexOf(selectItem);

      this.additemsData.splice(index, 1);

      
      this.addField(selectItem);
      this.deletedItem.push(selectItem);

      console.log(this.deletedItem);
    });
  }


  public getAddItems(choose:number):void{
    if (choose == 1){
        this.pitService.getItemsIncome().then( (res) => {
          if (res.error == false){
              //console.log(res.items);
              this.additemsData = res.items;
          }
      });
    }
    if (choose ==2){
      
      this.pitService.getItemsAllowance().then( (res) => {
        if (res.error == false){
            //console.log(res.items);
            this.additemsData = res.items;
        }
      });
    }
  }
}