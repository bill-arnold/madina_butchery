
export enum MeatCategory {
  BEEF = 'Beef',
  MBUZI = 'Mbuzi',
  POULTRY = 'Poultry',
  LAMB = 'Lamb',
  OFFAL = 'Offal'
}

export interface Product {
  id: string;
  name: string;
  category: MeatCategory;
  description: string;
  pricePerKg?: number;
  image: string;
  popular?: boolean;
}

export interface OrderStep {
  id: number;
  label: string;
}

export interface MeatCut {
  name: string;
  category: MeatCategory;
}

export interface OrderFormData {
  category: MeatCategory | '';
  cut: string;
  weight: number;
  preparation: string;
  name: string;
  phone: string;
  location: string;
  notes: string;
}
