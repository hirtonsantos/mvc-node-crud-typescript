import { Request, Response } from "express";
import { IProduct } from "../../interfaces/product";
import productLisService from "../../services/products/productList.service";

const productLisController = async (req: Request, res: Response) => {

    const productList: IProduct[] = await productLisService()

    return res.json(productList)
}

export default productLisController