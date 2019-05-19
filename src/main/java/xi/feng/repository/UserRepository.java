package xi.feng.repository;

import java.util.List;

import org.springframework.data.mongodb.core.query.Query;

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
	 * 根据查询条件查询一条用户信息
	 * @param query 
	 * @return 用户
	 */
	public User findUserByQuery(Query query);
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
	/**
	 *根据查询条件获取用户信息
	 * @param query
	 * @return
	 */
	List<User> findUserListByQuery(Query query);
	/**
	 * 获取数量
	 * @param query
	 * @return
	 */
	Long getCount(Query query);
}
