import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserUpdate } from "../../interfaces/user";

const userUpdateService = async (id: string, data: IUserUpdate) => {

    const userRepository = AppDataSource.getRepository(User)

    await userRepository.update(id, { ...data });

    return 
}

export default userUpdateService