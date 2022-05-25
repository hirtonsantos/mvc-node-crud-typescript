import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const userListService = () => {
  const userRepository = AppDataSource.getRepository(User)
  const users = userRepository.find()

  return users
};

export default userListService;
