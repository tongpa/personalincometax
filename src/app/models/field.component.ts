export class  FieldComponent<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  min:number;
  max:number;
  hintLabel: string;
  showDelete:boolean=true;

  

  constructor(options: {
      value?: T,
      key?: string,
      label?: string,
      required?: boolean,
      order?: number,
      controlType?: string,
      min?:number,
      max?:number,
      hintLabel?: string,
      showDelete?:boolean
    } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.min = options.min || 0;
    this.max = options.max === undefined ? this.min+ 100 : options.max;
    this.hintLabel = options.hintLabel || '';
    this.showDelete = options.showDelete  === undefined ? true: options.showDelete ;
    
  }
}