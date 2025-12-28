import { UserRepository } from "@/repositories/pg/user.repositories"
import { SigninUseCase } from "@/use-cases/signin"

export function makeSigninUseCase() {
    const userRepository = new UserRepository()

    const signinUseCase = new SigninUseCase(userRepository)

    return signinUseCase
}