package xi.feng.repository;

import xi.feng.entity.User;

public interface UserRepository {

	public void saveUser(User user);
	public User findUserByUserName(String userName);
	 public long updateUser(User user);
	 public void deleteUserById(Long id);
}
