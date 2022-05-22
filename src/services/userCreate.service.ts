import { AppDataSource } from "../data-source";
import { IUserCreate, } from "../interfaces/user";
import { User } from "../entities/user.entity";
import bcrypt from "bcrypt"

const userCreateService = async ({name, email, password}: IUserCreate) => {

    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.find()

    const emailAlreadyExist = users.find(item => item.email === email)

    if (emailAlreadyExist){
        throw new Error("Email already exists")
    }

    const user: IUserCreate = new User()
    user.name = name
    user.email = email
    user.password = bcrypt.hashSync(password, 10)

    userRepository.create(user)
    await userRepository.save(user)

    return user
}

export default userCreateService