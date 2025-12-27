import { UserRepository } from "@/repositories/pg/user.repositories";
import { FindWithPersonUseCase } from "@/use-cases/find-with-person";

export function makeFindWithPeronUseCase() {    
    const userRepository = new UserRepository()
    const findWithPersonUseCase = new FindWithPersonUseCase(userRepository)

    return findWithPersonUseCase
}