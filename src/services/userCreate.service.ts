import { AppDataSource } from "../data-source";
import { IUserCreate, } from "../interfaces/user";
import { User } from "../entities/user.entity";
import bcrypt from "bcrypt"
import { AppError } from "../errors/appError";
import {Cart} from "../entities/cart.entity"

const userCreateService = async ({name, email, password, age}: IUserCreate) => {

    const userRepository = AppDataSource.getRepository(User)
    const cartRepository = AppDataSource.getRepository(Cart)

    const users = await userRepository.find()

    const emailAlreadyExist = users.find(item => item.email === email)

    if (emailAlreadyExist){
        throw new AppError(409,"Email already exists")
    }

    const cart = new Cart()
    cart.subtotal = 0

    cartRepository.create(cart)
    await cartRepository.save(cart)

    const user: any = new User()
    user.name = name
    user.email = email
    user.age = age
    user.password = bcrypt.hashSync(password, 10)
    user.cart = cart

    userRepository.create(user)
    await userRepository.save(user)

    return user
}

export default userCreateService