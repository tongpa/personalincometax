import { Component, Input } from '@angular/core';
import { FieldComponent }              from '../../../models/field.component';

export class NumberFiedComponent extends FieldComponent<number>{
  controlType = 'number';
  type: number;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
  
}
