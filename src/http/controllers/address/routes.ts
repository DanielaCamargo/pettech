import { create } from '@/http/controllers/address/create'
import { FastifyInstance } from 'fastify'
import { findAddress } from '@/http/controllers/address/find-address'

export async function addressRoutes(app: FastifyInstance) {

    app.post('/address', create)
    app.get('/address/person/:personId', findAddress)
}