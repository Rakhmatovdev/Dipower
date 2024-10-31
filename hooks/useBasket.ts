import basketService from '@/service/basket.service';
import { IProduct } from '@/types/product.interface';
import { useQuery } from '@tanstack/react-query';

const useBasket = () => {
  return useQuery<IProduct[]>({queryKey:['Basket'],queryFn: async () => {
    const allProducts = await basketService.getAll();
    return allProducts;
  }});
};

export default useBasket;
