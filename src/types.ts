export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  isVeg: boolean;
  image: string;
  isPopular?: boolean;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}

export interface OrderDetails {
  name: string;
  phone: string;
  houseNo: string;
  street: string;
  area: string;
  landmark: string;
  city: string;
  pinCode: string;
  specialInstructions: string;
  paymentMethod: 'cod' | 'upi';
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}
