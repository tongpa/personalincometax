import { Component, OnInit } from '@angular/core';
import { SampleFieldService } from './services/fields/samplefield-control.service';
import { PITService } from './services/fields/pit.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SampleFieldService, PITService]
})
export class AppComponent  implements OnInit{
  fieldsincomedefault: any[];
  fieldsallowance: any[];
  fieldspersonal: any[];

   

  isLinear:boolean = true;
  pitService: PITService;
  constructor(service: SampleFieldService
    , pitService: PITService
  ) {
    this.pitService = pitService;
    this.fieldsincomedefault = service.getFields();
    this.fieldsallowance = service.getFieldsAllowance();
    this.fieldspersonal = service.getFieldsPersonalData();
    this.pitService.getItemsIncomeDefault().then( (res) => {
      if (res.error == false){
          console.log(res.items);
          let itemdefault = service.initfield(res.items);
          console.log("itemdefault");
          console.log(itemdefault);
          this.fieldsincomedefault = itemdefault;
      }
  });
  }


  ngOnInit() {
  }

  
}
