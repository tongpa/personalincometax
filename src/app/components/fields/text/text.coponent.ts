import { Component, Input } from '@angular/core';
import { FieldComponent }              from '../../../models/field.component';

 
export class TextFiedComponent extends  FieldComponent<string>{
   
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
  
}
