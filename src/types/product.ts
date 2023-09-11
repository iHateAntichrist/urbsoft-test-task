export interface Product {
  id: number;
  image: string;
  title: string;
  price: string | null;
  isDiscount: boolean;
  newPrice: string | null;
  isMain: boolean;
}
