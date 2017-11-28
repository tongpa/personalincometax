import { Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
 
import { Item, PITApi }            from '../../models/pit.model';
import { PITService } from '../../services/fields/pit.service';
@Component({
  selector: 'select-item-field', 
  providers: [ PITService],
  template: `
  <h1 mat-dialog-title>Add Items</h1>
  <div mat-dialog-content>
    <mat-form-field>
        <mat-select placeholder="{{placeholderValue}}" [(ngModel)]="selectedItem" name="item">
            <mat-option *ngFor="let item of items" [value]="item.id_item">
            {{ item.name }}
            </mat-option>
        </mat-select>
        <mat-hint align="end">Select Item</mat-hint>
    </mat-form-field>
    select : {{selectedItem}}
    </div>
    <div mat-dialog-actions>
      <button mat-button [mat-dialog-close]="selectedItem" tabindex="2">Ok</button>
      <button mat-button (click)="onNoClick()" tabindex="-1">No Thanks</button>
    </div>
  `,

})
export class DialogShowItemComponent implements OnInit{
    items:Item[];
    selectedItem:Item;
    placeholderValue:string;
    constructor( public dialog: MatDialog,
        private pitService: PITService,
        public dialogRef: MatDialogRef<DialogShowItemComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any){
            
            this.items = data.items;
        }

    ngOnInit() {
        
        
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
