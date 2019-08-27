package xi.feng.repository;

import java.util.List;

import org.springframework.data.mongodb.core.query.Query;

import xi.feng.entity.User;
import xi.feng.entity.Vender;

/**
 * 厂家dao层接口类
 * @author xi-xi
 *
 */
public interface VenderRepository {
	/**
	 * 持久化厂家信息
	 */
	void saveVender();
	/**
	 * 更新厂家信息
	 * @return 更新数量
	 */
	long updateVender();
	/**
	 * 查看厂家信息列表
	 * @param query 查询条件
	 * @return 厂家信息list
	 */
	List<Vender> findUserListByQuery(Query query);
	/**
	 * 获取数量
	 * @param query
	 * @return
	 */
	long getCount(Query query);
	/**
	 * 查询一个厂家信息
	 * @param query 查询条件
	 * @return 厂家信息
	 */
	Vender findVenderByQuery(Query query);
	/**
	 * 查询一个厂家信息
	 * @param Long 厂家ID
	 * @return 厂家信息
	 */
	Vender findVenderById(Long vender_id);
	/**
	 * 删除一条厂家信息
	 * @param id
	 * @return
	 */
	Vender deleteVenderById (Long id);
}
