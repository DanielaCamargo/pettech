import { AddressRepository } from "@/repositories/pg/address.repository"
import { FindAddressByPersonIdUseCase } from "@/use-cases/find-address-by-person"

export function makeFindAddressByPersonUseCase() {
    const addressRepository = new AddressRepository()
    const findAddressByPersonUseCase = new FindAddressByPersonIdUseCase(addressRepository)

    return findAddressByPersonUseCase
}