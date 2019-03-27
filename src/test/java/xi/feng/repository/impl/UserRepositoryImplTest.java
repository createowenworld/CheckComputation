package xi.feng.repository.impl;

import static org.junit.Assert.*;

import java.util.Date;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import xi.feng.Application;
import xi.feng.entity.User;
import xi.feng.repository.UserRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes=Application.class)// 指定spring-boot的启动类 
public class UserRepositoryImplTest {
	@Autowired
	private UserRepository userDao;
	@Test
	public void testSaveUser() {
		User user = new User();
		user.setUser_id(System.currentTimeMillis());
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

}
