import {Request, Response} from "express";
import productService from '../services/product.service';

const  createProduct = async (req:Request, res:Response): Promise<void>=>
{
    try {
        const productData = req.body;
        const newProduct = await productService.addProduct(productData);
        res.status(201).json(newProduct);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create product' });
      }
}
    


const getAllProducts = async (req:Request  , res:Response) =>{

    const products = await productService.getAllProducts();
    res.json(products);
}

const updateProduct = async (req:Request, res:Response) =>{
    const updatedProduct = await productService.updateProduct(req.params.sku,req.body);
    res.json({message: 'Product Updated successfully',updatedProduct});
}


export default {createProduct,getAllProducts,updateProduct}