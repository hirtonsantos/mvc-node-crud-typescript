import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const userListOneService = async (id: string) => {

  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({id: id});

  return user
};

export default userListOneService;
