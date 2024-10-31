import { IProduct } from "@/types/product.interface";

class LikeService {
    private data: IProduct[] = [];

    async addLike(contactValues: IProduct) {
         this.data.push(contactValues);
        this.data = await this.getUniqueProducts();
        
        return this.data;
    }

    async getAll() {
        return await this.data;
    }

    private getUniqueProducts(): IProduct[] {
        const uniqueMap = new Map<number, IProduct>();

        for (const product of this.data) {
            if (!uniqueMap.has(product.id)) {
                uniqueMap.set(product.id, product);
            }
        }

        return Array.from(uniqueMap.values());
    }
}

export default new LikeService();
