package xi.feng.repository;

import xi.feng.entity.User;
/**
 * 用户信息操作接口
 * @author xi-xi
 *
 */
public interface UserRepository {
	/**
	 * 新增用户
	 * @param user 用户
	 */
	public void saveUser(User user);
	/**
	 * 根据用户名查找用户
	 * @param userName 用户名
	 * @return 用户
	 */
	public User findUserByUserName(String userName);
	/**
	 * 更新用户信息
	 * @param user
	 * @return
	 */
	public long updateUser(User user);
	/**
	 * 删除用户
	 * @param id
	 */
	public void deleteUserById(Long id);
}
