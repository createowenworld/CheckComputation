package xi.feng.repository.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

import com.mongodb.client.result.UpdateResult;

import xi.feng.repository.RepositoryDao;

public class MongoDBRepository implements RepositoryDao {
	 @Autowired
	 private MongoTemplate mongoTemplate;

	@Override
	public <T> void save(T t) {
		mongoTemplate.save(t);
	}

	@Override
	public <Q, U, T> Long update(Q  q, U u, Class<T> c) {
		//更新查询返回结果集的第一条
        UpdateResult result =mongoTemplate.updateMulti((Query) q, (Update) u, c);
      //更新查询返回结果集的所有
        // mongoTemplate.updateMulti(query,update,UserEntity.class);
        if(result!=null)
            return result.getModifiedCount();
        else
            return 0L;
	}

	@Override
	public <T, Q> T find(Q q, Class<T> c) {
		return mongoTemplate.findOne((Query) q, c);
	}

	@Override
	public <T, Q> List<T> findList(Q q, Class<T> c) {
		return mongoTemplate.find((Query) q, c);
	}

	@Override
	public <T> T findById(Long id, Class<T> c) {
		Query query = new Query(Criteria.where("_id").is(id));
		return find(query, c);
	}

	@Override
	public <Q> Long getCount(Q q, String collectionName) {
		return mongoTemplate.count((Query) q, collectionName);
	}

	@Override
	public <T> Long deleteById(Long id, Class<T> c) {
		Query query = new Query(Criteria.where("_id").is(id));
		return mongoTemplate.remove(query, c).getDeletedCount();
	}

	@Override
	public <T, Q> Long deleteMore(Q q, Class<T> c) {
		return mongoTemplate.remove((Query) q, c).getDeletedCount();
	}

}
