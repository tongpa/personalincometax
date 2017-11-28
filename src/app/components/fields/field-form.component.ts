import { Component, Input,Output, EventEmitter  } from '@angular/core';
import { FormGroup }        from '@angular/forms';
 

import { FieldComponent }            from '../../models/field.component';
@Component({
  selector: 'app-field',
  template: `
  <div [formGroup]="form">
  <table class="example-full-width" cellspacing="0">
  <tr>
    <td class="example-full-width">
        <div [ngSwitch]="field.controlType" class="example-container"> <!--  class="example-container" -->
        <mat-form-field *ngSwitchCase="'textbox'" flex>
          <mat-hint align="end">{{field.hintLabel|| ''}}</mat-hint>
          <input matInput  
            [formControlName]="field.key"
            [id]="field.key" 
            [type]="field.type"
            placeholder="{{field.label}}"> 
        </mat-form-field>    

        <mat-form-field *ngSwitchCase="'number'" flex>
          <mat-hint align="end">{{field.hintLabel|| ''}}</mat-hint>
          <input matInput
            [formControlName]="field.key"
            [id]="field.key" 
            [type]="field.type"
            [min]="field.min" [max]="field.max"
            placeholder="{{field.label}}"> 
        </mat-form-field>
        
        <mat-form-field *ngSwitchCase="'dropdown'" flex>
          <mat-hint align="end">{{field.hintLabel|| ''}}</mat-hint>
          <mat-select
            [id]="field.key" 
            [formControlName]="field.key" 
            placeholder="{{field.label}}">
              <mat-option *ngFor="let opt of field.options" 
                [value]="opt.key">{{opt.value}}
              </mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field *ngSwitchCase="'datefield'" flex>
          <mat-hint align="end">{{field.hintLabel|| ''}}</mat-hint>
          <input matInput
            [id]="field.key" 
            [formControlName]="field.key"
            [matDatepicker]="picker" 
            placeholder="{{field.label}}"> 
              <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
        <mat-datepicker touchUi="true" #picker></mat-datepicker>   
        </mat-form-field>     

      </div>
    </td>
    <td>
    <div *ngIf="field.showDelete">
      <button mat-mini-fab color="primary" (click)="sendMessage()"><mat-icon>delete</mat-icon></button>
    </div>
     
    </td>
</tr></table>


    
    
    
</div>

  `,
/*  template: `
  <div [formGroup]="form">
  <label [attr.for]="field.key">{{field.label}}</label>
 
  <div [ngSwitch]="field.controlType">
 
    <input *ngSwitchCase="'textbox'" [formControlName]="field.key"
            [id]="field.key" [type]="field.type"> 
    <select [id]="field.key" *ngSwitchCase="'dropdown'" [formControlName]="field.key">
      <option *ngFor="let opt of field.options" [value]="opt.key">{{opt.value}}</option>
    </select> 
  </div> 
  <div class="errorMessage" *ngIf="!isValid">{{field.label}} is required</div>
</div>
  `,*/
})
export class DynamicFormFieldComponent {
  @Input() field: FieldComponent<any>;
  @Input() form: FormGroup;
  @Output() messageEvent = new EventEmitter<string>();
  get isValid() { return this.form.controls[this.field.key].valid; }

  sendMessage() {
    this.messageEvent.emit("Hello");
  }
}