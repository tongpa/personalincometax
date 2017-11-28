import { Component, Input } from '@angular/core';
import { FieldComponent }              from '../../../models/field.component';

 
export class DropdownComponent extends  FieldComponent<string>{
   
  controlType = 'dropdown';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
  
}
