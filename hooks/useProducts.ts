"use client";
import productService from "@/service/product.service";
import { useQuery } from "@tanstack/react-query";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => productService.getAll(),
    select: ({ data }) => data,
  });
};

export const useProduct = (productId: string) => {
  return useQuery({
    queryKey: ["product", productId],
    queryFn: () => productService.getById(productId),
    select: ({ data }) => data,
    enabled: !!productId,
  });
};


