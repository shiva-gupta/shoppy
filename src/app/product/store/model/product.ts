import { Category } from './category';

export interface Product {
  id?: number;
  title?: string;
  description?: string;
  images?: string[];
  category?: Category;
}
