import { Product as ProductInterface } from "../interfaces/product.interface";
import { Product } from "../models/Product";


const addProduct = async (product:Product): Promise<Product> => {
    const newProduct = Product.create(product);
    return Product.save(newProduct);
}

     const  getAllProducts = async() =>{
        return await  Product.find();
    }
    // update product by sku code
    const  updateProduct =  async (sku:string, options:Partial<Product>) =>
    {
            return await Product.createQueryBuilder().update().set(options).where("sku = :sku",{sku}).execute();
    }
  const  getProductBySku =  async (sku:string) => {
        return  await Product.findOneBy({sku});
    }



export default {addProduct,updateProduct, getProductBySku,getAllProducts}