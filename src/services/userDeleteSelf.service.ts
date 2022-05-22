import { AppDataSource } from "../data-source"
import { User } from "../entities/user.entity"

const userDeleteSelfService = async (id:string) => {
    
    const userRepository = AppDataSource.getRepository(User)

    await userRepository.delete(id);

    return true
}

export default userDeleteSelfService