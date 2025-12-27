import { create } from "@/http/controllers/category/create";
import { FastifyInstance } from "fastify";

export async function categoryRoutes(app: FastifyInstance) {
    app.post('/category', create)
}