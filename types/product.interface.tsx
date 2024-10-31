export interface IProduct {
  image: string;
  name: string;
  price: number;
  sale: number;
  rating: number;
  count: number;
  id: number;
}

export interface IProducts{
    id:number
    userId:number
    title:string
    completed:boolean
}


export interface ICreateContact{
  name:string
  email:string
  phone:number
  massage:string
}