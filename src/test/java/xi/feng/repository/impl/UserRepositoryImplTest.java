package xi.feng.repository.impl;

import static org.junit.Assert.*;

import java.util.Arrays;
import java.util.Date;


import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import xi.feng.Application;
import xi.feng.entity.User;
import xi.feng.repository.UserRepository;
import xi.feng.util.DaoUtils;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes=Application.class)// 指定spring-boot的启动类 
public class UserRepositoryImplTest {
	@Autowired
	private UserRepository userDao;
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	@Test
	public void testSaveUser() {
		User user = new User();
		user.setUser_id(DaoUtils.getPrimaryId("t_oc_user"));
		user.setCreate_time(new Date());
		user.setLast_modify_time(new Date());
		user.setUser_account("admin");
		user.setUser_pwd("admin");
		user.setUser_nm("管理员");
		user.setUser_phone("03715201314");
		user.setUser_role("0");
		userDao.saveUser(user);
	}

	@Test
	public void testFindUserByUserName() {
		fail("Not yet implemented");
	}

	@Test
	public void testUpdateUser() {
		fail("Not yet implemented");
	}

	@Test
	public void testDeleteUserById() {
		fail("Not yet implemented");
	}
	
	@Test
	public void testFindUserByQuery () {
		Query query = new Query(Criteria.where("user_account").is("admin").and("user_pwd").is("admin"));
		User user = userDao.findUserByQuery(query);
		System.out.println(user.toString());
	}

	@Test
	public void test1 (){
		int[] nums = {-1,-2,-3,-4,-5};
		int target = -8;
		int length = nums.length;
		int [] returnIndex = new int[2];
		for (int i = 0 ;i < length - 1; i ++ ) {
			for (int j = i + 1;j < length; j ++ ) {
				if (nums[j] == target - nums[i]) {
					returnIndex[0] = i;
					returnIndex[1] = j;
				}
			}
		}
		logger.info("spring boot 集成log4j开始！");
		System.out.println("++++++++++++++++++++++++++++:" + Arrays.toString(returnIndex));
	}
}
