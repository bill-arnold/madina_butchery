
import React from 'react';
import { MeatCategory, Product } from './types';

export const SLOGAN = "kula Nyama, Beba Chuma";
export const BRAND_NAME = "Madina Butchery";
export const LOCATION = "South C, Nairobi";
export const PHONE_NUMBER = "+254700000000";

export const Logo: React.FC<{ className?: string }> = ({ className = "h-10 w-auto" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 50C20 33.4315 33.4315 20 50 20C66.5685 20 80 33.4315 80 50C80 66.5685 66.5685 80 50 80C33.4315 80 20 66.5685 20 50Z" fill="#9f1239" />
    <path d="M45 35L55 35L52 65H48L45 35Z" fill="white" />
    <path d="M40 68H60V72H40V68Z" fill="white" />
    <path d="M65 45C65 53.2843 58.2843 60 50 60C41.7157 60 35 53.2843 35 45H65Z" fill="#fb923c" />
  </svg>
);

export const PRODUCTS: Product[] = [
  {
    id: 'b1',
    name: 'Prime Steak (Beef)',
    category: MeatCategory.BEEF,
    description: 'Aged prime cuts for the best nutritional value.',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80&w=400',
    popular: true
  },
  {
    id: 'm1',
    name: 'Young Mbuzi (Goat)',
    category: MeatCategory.MBUZI,
    description: 'Tender goat meat sourced ethically from local farmers.',
    image: 'https://images.unsplash.com/photo-1448907503123-67254d59ca4f?auto=format&fit=crop&q=80&w=400',
    popular: true
  },
  {
    id: 'p1',
    name: 'Kienyeji Chicken',
    category: MeatCategory.POULTRY,
    description: 'Free-range healthy chicken for your family.',
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'l1',
    name: 'Lamb Chops',
    category: MeatCategory.LAMB,
    description: 'Succulent and lean lamb chops.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400'
  }
];

export const PREPARATIONS = [
  'Whole Cut',
  'Cubes (Karanga)',
  'Mince (Keema)',
  'Steaks',
  'Chops',
  'Stir-fry Strips'
];
