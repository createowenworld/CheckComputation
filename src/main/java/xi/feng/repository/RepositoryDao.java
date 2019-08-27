package xi.feng.repository;

import java.util.List;




public interface RepositoryDao {
	/**
	 * 保存对象
	 * @param t 实体对象
	 */
	<T> void save (T t);
	/**
	 * 更新数据
	 * @param t 更新条件
	 * @param t 更新内容
	 * @param c 实体类型
	 * @return 更新数量
	 */
	<Q, U, T> Long update(Q q,U u, Class<T> c);
	/**
	 * 查询一条数据
	 * @param q 查询条件
	 * @param c 实体类型
	 * @return 实体对象
	 */
	<T, Q> T find(Q q, Class<T> c);
	/**
	 * 批量查询数据
	 * @param q 查询条件
	 * @param c 查询实体
	 * @return 实体集合
	 */
	<T, Q> List<T> findList (Q q, Class<T> c);
	/**
	 * 根据ID查询对象
	 * @param id 唯一标识
	 * @param c 查询实体
	 * @return 对象
	 */
	<T> T findById (Long id, Class<T> c);
	/**
	 * 获取指定条的数据量
	 * @param q 查询条件
	 * @param collectionName 表名
	 * @return
	 */
	<Q> Long getCount(Q q, String collectionName);
	/**
	 * 根据ID删除数据
	 * @param id 唯一标识
	 * @param c 
	 * @return
	 */
	<T> Long deleteById (Long id, Class<T> c);
	/**
	 * 删除满足条件的数据
	 * @param u 删除条件
	 * @param c 删除实体类型
	 * @return 删除数量
	 */
	<T, Q> Long deleteMore (Q q, Class<T> c);
}
