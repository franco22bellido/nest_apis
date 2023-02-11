import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Req, Param, NotFoundException, Query } from '@nestjs/common';
import {ProductDto} from './dto/product.dto';
import { ProductService} from './product.service';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService){}

    
    @Post('/create')
    async createPost(@Res() res, @Body() createProductDto: ProductDto){
        
        const product = await this.productService.createProduct(createProductDto);
        return res.status(HttpStatus.OK).json({
            message: 'producto creado',
            product: product
        });

    }
    @Get('/Products')
    async getAll(@Res() res){
        const products = await this.productService.getAllProducts();
        return res.status(HttpStatus.OK).json({
            product: products
        });
    }
    @Get('/product/:Id')
    async getOne(@Res() res, @Param('Id') ProductId){
        
        const product = await this.productService.getProduct(ProductId);

        if(!product) throw new NotFoundException("Product Does not exist");

        return res.status(HttpStatus.OK).json({
            message: 'one product',
            product: product
        });
    }

    @Delete('/delete')
    async deleteProduct(@Res() res,@Query('Id') ProductId) {
        const product = await this.productService.deleteProduct(ProductId);
        if(!product) throw new NotFoundException("Product Does not exist");
        return res.status(HttpStatus.OK).json({
            message: 'product deleted succesfully'
        });
    }
    @Put('/update/:id')
    async updateProduc(@Res() res, @Param('id') productId, @Body() productDto: ProductDto){
        const updatedProduct = await this.productService.updateProduct(productId, productDto);
        if(!updatedProduct) throw new NotFoundException("Product Does not exist");
        return res.status(HttpStatus.OK).json({
            message: "your product as been updated",
            updatedProduct
        });
    }
}