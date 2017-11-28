import { Injectable }       from '@angular/core';

import { DropdownComponent } from '../../components/fields/dropdown/dropdown.coponent';
import { FieldComponent }              from '../../models/field.component';
import { TextFiedComponent }  from '../../components/fields/text/text.coponent';
import { NumberFiedComponent }  from '../../components/fields/number/number.coponent';
import { DateFiedComponent }  from '../../components/fields/datefield/datefield.coponent';
@Injectable()
export class SampleFieldService {

 // Todo: get from a remote source of field metadata
 // Todo: make asynchronous

  initfield(items:any[]){
    let fields: FieldComponent<any>[] = [];
    items.forEach(item => {
      let data:any = new NumberFiedComponent({
        key: item.id_item,
        label: item.name,
        value: 0,
        required: true,
        type: 'number',
        min: 0,
        max: 10000000,
        order: item.id_item,
        hintLabel: item.name,
        showDelete:false
      });  
      fields.push( data );
    });
    return fields.sort((a, b) => a.order - b.order); 
  }
 getFields() {

  

   let fields: FieldComponent<any>[] = 
    [
      new TextFiedComponent({
        key: 1,
        label: 'Salary',
        value: 100000,
        required: true,
        type: 'text',
        order: 1,
        min: 0,
        max: 10000000,
        hintLabel: 'Your salary in year',
        showDelete:false
      }),

      new NumberFiedComponent({
        key: 2,
        label: 'Bonus',
        type: 'number',
        order: 2,
        min: 0,
        max: 10000000,
        value: 1000000,
        hintLabel: 'Your bonus in year',
        showDelete:false
      }),

      new NumberFiedComponent({
        key:3,
        label: 'Incomes',
        type: 'number',
        order: 3,
        min: 0,
        max: 10000000,
        value: 1000000,
        hintLabel: 'Your incomes in year',
        showDelete:false
      })
    ];


 /*[new DropdownComponent({
       key: 'brave',
       label: 'Bravery Rating',
       options: [
         {key: 'solid',  value: 'Solid'},
         {key: 'great',  value: 'Great'},
         {key: 'good',   value: 'Good'},
         {key: 'unproven', value: 'Unproven'}
       ],
       order: 3
     }),

     new TextFiedComponent({
       key: 'firstName',
       label: 'First name',
       value: 'Bombasto',
       required: true,
       order: 1
     }),

     new TextFiedComponent({
       key: 'emailAddress',
       label: 'Email',
       type: 'email',
       order: 2
     })
   ];
*/

   return fields.sort((a, b) => a.order - b.order);
 }


 getFieldsAllowance() {
  
     let fields: FieldComponent<any>[] = 
      [
        new TextFiedComponent({
          key: 'salary',
          label: 'Salary',
          value: 100000,
          required: true,
          type: 'text',
          order: 1,
          min: 0,
          max: 10000000,
          hintLabel: 'Your salary in year',
          showDelete:false
        }),
  
        new NumberFiedComponent({
          key: 'bonus',
          label: 'Bonus',
          type: 'number',
          order: 2,
          min: 0,
          max: 10000000,
          value: 1000000,
          hintLabel: 'Your bonus in year',
          showDelete:false
        }),
  
        new NumberFiedComponent({
          key: 'incomes',
          label: 'Incomes',
          type: 'number',
          order: 3,
          min: 0,
          max: 10000000,
          value: 1000000,
          hintLabel: 'Your incomes in year',
          showDelete:false
        })
      ];

     return fields.sort((a, b) => a.order - b.order);
   }

   getFieldsPersonalData() {
    
       let fields: FieldComponent<any>[] = 
        [
          new TextFiedComponent({
            key: 'name',
            label: 'Your Name',
            value: '',
            required: true,
            type: 'text',
            order: 1,            
            hintLabel: 'Your Name',
            showDelete:false
          }),
          new DateFiedComponent({
            key: 'birthdate',
            label: 'Your Birthdate',
            value: '',
            required: true,
            type: 'date',
            order: 2,            
            hintLabel: 'Your Birthdate',
            showDelete:false
          }),

          new NumberFiedComponent({
            key: 'numchild',
            label: 'Your Children',
            value: '0',
            required: true,
            type: 'number',
            order: 3,
            min:0,
            max:3,         
            hintLabel: 'Your Children',
            showDelete:false
          }),

          new NumberFiedComponent({
            key: 'numParents',
            label: 'Your Parents',
            value: '0',
            required: true,
            type: 'number',
            order: 4,            
            min:0,
            max:2,         
            hintLabel: 'Your Parents',
            showDelete:false
          }),
        ];
  
       return fields.sort((a, b) => a.order - b.order);
     }
   
}