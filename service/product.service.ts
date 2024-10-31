import { ICreateContact, IProduct } from "@/types/product.interface";
import axios from "axios";

class ProductService {
  private URL = "http://localhost:5001/api/data";

  async getAll() {
    return axios.get<IProduct[]>(`${this.URL}`);
  }

  async getById(id: string) {
    return axios.get<IProduct>(`${this.URL}/${id}`);
  }

  async postContact(contactValues:ICreateContact){
return axios.post<any,any ,ICreateContact>(`${this.URL}`,contactValues)
  }
}
export default new ProductService();
