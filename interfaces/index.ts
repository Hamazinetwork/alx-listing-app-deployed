export interface Address{
    street?: string;
    city: string;
    state: string;
    country: string;
}

export interface offer{
    bed: string;
    shower: string;
    occupants: string;
}

export interface PropertyProps{
  id: string;
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: offer;
  image: string;
  discount: any;
  description?: string;
}
//
export interface ButtonProps {
  title: string;
  style: string;}

export interface layoutProps{
  children: React.ReactNode;

}
// Pill component
export interface PillProps {
  label: string;
  isActive?: boolean;
  onClick: () => void;
}
