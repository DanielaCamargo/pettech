import { create } from "@/http/controllers/user/create"
import { FastifyInstance } from "fastify"
import { findUser } from "@/http/controllers/user/find-user"
import { signin } from "@/http/controllers/user/signin"

export async function userRoutes(app: FastifyInstance) {
    app.get("/user/:id", findUser)
    app.post("/user", create)
    app.post("/user/signin", signin)
}