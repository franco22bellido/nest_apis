import { Injectable } from '@nestjs/common';
import {Model, Types} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {Product} from './interfaces/product.interface';
import {ProductDto} from './dto/product.dto';

@Injectable()
export class ProductService {

    constructor(@InjectModel('Product') private readonly productModel: Model<Product>){

    }
    async getAllProducts(): Promise<Product[]> {
        const products = await this.productModel.find();
        return products;
    }

    //el productId también puede ser string, o deberia?
    async getProduct(productId: string): Promise<Product>{
        const product = await this.productModel.findById(productId);
        return product;
    }
    async createProduct(createProductDto: ProductDto):Promise<Product>{

        const product = new this.productModel({createProductDto});
        return await product.save();
    }
    async updateProduct(productId: string, updatedProductDto: ProductDto): Promise<Product>{
        const productUpdated = await this.productModel.findByIdAndUpdate(productId, updatedProductDto,{
            new:  true
        });
        return productUpdated;

    }
    async deleteProduct(productId: string): Promise<Product>{
        const deletedProduct = await this.productModel.findByIdAndDelete(productId);
        return deletedProduct;
    }
    
}