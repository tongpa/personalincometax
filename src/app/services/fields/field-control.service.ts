import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FieldComponent }            from '../../models/field.component';
@Injectable()
export class FieldControlService {
  constructor() { }
  
  toFormGroup(fields: FieldComponent<any>[] ) {
    let group: any = {};

    fields.forEach(field => {
      group[field.key] = field.required ? new FormControl(field.value || '', Validators.required)
                                              : new FormControl(field.value || '');
    });
    console.log(group);
    return new FormGroup(group);
  }

  addFormGroup(group:any, field: FieldComponent<any>){
    console.log(group);
    group.addControl(field.key, field.required ? new FormControl(field.value || '', Validators.required)
    : new FormControl(field.value || ''));    
  }

  calculate(fields: FieldComponent<any>[], value:any){
    fields.forEach(field => {
      console.log(field.key);
      if (value.hasOwnProperty(field.key) ) {
        console.log(value[field.key]);
      }
    });
  }
}