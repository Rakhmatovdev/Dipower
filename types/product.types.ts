export type ContactMassage = {
    name: string
    email: string
    phone:number
    massage:string
  }

  export interface Time {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }


  type Product = {
    image: string;
    name: string;
    price: number;
    sale: number;
    rating: number;
    count: number;
    id: number;
  };
  
  export interface ProductsProps {
    products: Product[],
    time:boolean,
    title:string,
    name:string
  }


  export interface Time {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

type Sale = {
    title: string;
    time:string
  };

  export interface SaleProps {
    sale: Sale;
  }