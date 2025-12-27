import { create } from "@/http/controllers/product/create";
import { FastifyInstance } from "fastify";
import { findAllProducts } from "@/http/controllers/product/find-all-products";
import { findProduct } from "@/http/controllers/product/find-products";
import { update } from "@/http/controllers/product/update";
import { deleteProduct } from "@/http/controllers/product/delete";

export async function productRoutes(app: FastifyInstance) 
{
    app.get('/product', findAllProducts)
    app.get('/product/:id', findProduct)
    app.post('/product', create)
    app.put('/product/:id', update)
    app.delete('/product/:id', deleteProduct)
}