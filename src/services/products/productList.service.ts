import { AppDataSource } from "../../data-source";
import { Product } from "../../entities/product.entity";

const productLisService = async () => {
    const productRepository = AppDataSource.getRepository(Product)

    const productList = await productRepository.find()

    return productList
}

export default productLisService