package xi.feng.repository.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Component;

import com.mongodb.client.result.UpdateResult;

import xi.feng.entity.User;
import xi.feng.repository.UserRepository;
import xi.feng.util.DaoUtils;

@Component
public class UserRepositoryImpl implements UserRepository {

    @Autowired
    private MongoTemplate mongoTemplate;

    /**
     * 创建对象
     * @param user
     */
    @Override
    public void saveUser(User user) {
    	user.setUser_id(DaoUtils.getPrimaryId("t_oc_user"));
        mongoTemplate.save(user);
    }

    /**
     * 根据用户名查询对象
     * @param userName
     * @return
     */
    @Override
    public User findUserByUserName(String userName) {
        Query query=new Query(Criteria.where("user_account").is(userName));
        User user =  mongoTemplate.findOne(query , User.class);
        return user;
    }

    /**
     * 更新对象
     * @param user
     */
    @Override
    public long updateUser(User user) {
        Query query = new Query(Criteria.where("id").is(user.getUser_id()));
        Update update = new Update().set("user_account", user.getUser_account()).set("user_pwd", user.getUser_pwd());
        //更新查询返回结果集的第一条
        UpdateResult result =mongoTemplate.updateFirst(query,update,User.class);
        //更新查询返回结果集的所有
        // mongoTemplate.updateMulti(query,update,UserEntity.class);
        if(result!=null)
            return result.getModifiedCount();
        else
            return 0;
    }

    /**
     * 删除对象
     * @param id
     */
    @Override
    public void deleteUserById(Long id) {
        Query query=new Query(Criteria.where("_id").is(id));
        mongoTemplate.remove(query, User.class);
    }

	@Override
	public User findUserByQuery(Query query) {
		 User user =  mongoTemplate.findOne(query , User.class);
	     return user;
	}
	
	@Override
	public List<User> findUserListByQuery(Query query) {
		List<User> list =  mongoTemplate.find(query, User.class);
	     return list;
	}
	@Override
	public Long getCount(Query query) {
		return mongoTemplate.count(query, "t_oc_user");
	}
	@Override
	public User getUserById (Long _id) {
		 Query query = new Query(Criteria.where("_id").is(_id));
		return findUserByQuery(query);
	}
	@Override
	public void editUser (User user) {
		mongoTemplate.save(user);
	}
}