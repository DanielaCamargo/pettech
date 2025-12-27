import { AddressRepository } from "@/repositories/pg/address.repository"
import { CreateAddressUseCase } from "@/use-cases/create-address"

export function makeCreateAddressUseCase() {
    const addressRepository = new AddressRepository()

    const makeCreateAddressUseCase = new CreateAddressUseCase(addressRepository)

    return makeCreateAddressUseCase
}