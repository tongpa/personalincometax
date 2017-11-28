export class  Item {

  id_item:number;
  name:string;
  id_item_field: number;
  id_item_field_type: number;
  id_item_income: number;
  label:string;
  default_value: string;
  min: number;
  max: number;
  order: number;
  hint_label: string;
  item_field: string;

  constructor(options: {
      id_item?: number,
      name?: string,
      id_item_field?: number,
      id_item_field_type?: number,
      id_item_income?: number,
      label?:string,
      default_value?: string,
      min?: number,
      max?: number,
      order?: number,
      hint_label?: string,
      item_field?: string
    } = {}) {
    this.id_item = options.id_item || null;
    this.name = options.name || '';
    this.id_item_field = options.id_item_field || null;
    this.id_item_field_type = options.id_item_field_type || null;
    this.id_item_income = options.id_item_income || null;
    this.label = options.label || null;
    this.default_value = options.default_value || null;
    this.min = options.min || 0;
    this.max = options.max === undefined ? this.min+ 100 : options.max;
    this.order = options.order === undefined ? 1 : options.order;
    this.hint_label = options.hint_label || null;
    this.item_field = options.item_field === undefined ? "textbox" : options.item_field;

  }
}

export class PITApi { 
  //survey: Project[];
  items: Item[]; 
  total: number;
  error:boolean;
  message:string;
}