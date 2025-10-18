export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  zip: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
}