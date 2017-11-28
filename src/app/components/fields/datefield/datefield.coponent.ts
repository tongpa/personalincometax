import { Component, Input } from '@angular/core';
import { FieldComponent }              from '../../../models/field.component';

export class DateFiedComponent extends FieldComponent<Date>{
  controlType = 'datefield';
  type: Date;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
  
}
