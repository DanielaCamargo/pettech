import { create } from "@/http/controllers/user/create"
import { FastifyInstance } from "fastify"
import { findUser } from "@/http/controllers/user/find-user"

export async function userRoutes(app: FastifyInstance) {
    app.get("/user/:id", findUser)
    app.post("/user", create)
}