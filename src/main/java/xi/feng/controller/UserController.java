package xi.feng.controller;

import java.util.Date;
import java.util.List;


import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import xi.feng.entity.Result;
import xi.feng.entity.ResultCode;
import xi.feng.entity.User;
import xi.feng.repository.UserRepository;

@RestController
public class UserController {
	@Autowired
	private UserRepository userDao;
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	@RequestMapping(path = "/index", method = RequestMethod.POST, consumes = "application/json")
	public Result index(@RequestBody User user) {
		String username = user.getUser_account();
		String password = user.getUser_pwd();
		if (StringUtils.isEmpty(username) || StringUtils.isEmpty(password)) {
			return new Result(-2,"用户名或密码不能为空！");
		}
		//查询用户是否存在
		Query query = new Query(Criteria.where("user_account").is(user.getUser_account()).and("user_pwd").is(user.getUser_pwd()));
		user = userDao.findUserByQuery(query);
		if (user != null) {
			return new Result(ResultCode.SUCCESS);
		} else {
			return new Result(ResultCode.CHECKUSER);
		}
	}
	/**
	 * 分页查询用户列表
	 * @param start
	 * @param length
	 * @param keyword
	 * @return
	 */
	@RequestMapping("/getUserInfo")
	public Result getUserInfo (Integer start, Integer length, String keyword) {
		logger.info("getUserInfo param:" + start + "," + length + "," + keyword);
		if (start == null ) {
			start = 0;
		}
		if (length == null ) {
			length = 10;
		}
		Query query = new Query();
		if (StringUtils.isNotEmpty(keyword)) {
			Criteria criteriaOk = new Criteria();
			query.addCriteria(
					criteriaOk.orOperator(Criteria.where("user_account").regex(keyword),
							Criteria.where("user_phone").regex(keyword)));
		}
		Long total = userDao.getCount(query);
		//分页查询
		query.limit(length).skip(start*length);
		List<User> list = userDao.findUserListByQuery(query);
		logger.info("getUserInfo result:" + list);
		return new Result(ResultCode.SUCCESS, list,total);
	}
	/**
	 * 添加用户
	 */
	@RequestMapping(path = "/addUser", method = RequestMethod.POST, consumes = "application/json")
	public Result addUser(@RequestBody User user) {
		logger.info("addUser params:" + user.toString());
		//查询用户是否存在
		User oldUser = userDao.findUserByUserName(user.getUser_account());
		if (oldUser!= null && user.equals(oldUser)) {
			return new Result(-2,"用户已经存在！");
		}
		user.setCreate_time(new Date());
		user.setLast_modify_time(new Date());
		userDao.saveUser(user);
		return new Result(ResultCode.SUCCESS);
	}
	/**
	 * 删除用户
	 * @param _id
	 * @return
	 */
	@RequestMapping("/deleteUser")
	public Result deleteUser (Long _id) {
		logger.info("deleteUser params:" + _id);
		userDao.deleteUserById(_id);
		return new Result(ResultCode.SUCCESS);
	}
	
	/**
	 * 根据ID查询用户
	 * @param _id
	 * @return
	 */
	@RequestMapping("/getUserById")
	public Result getUserById (Long _id) {
		logger.info("getUserById params:" + _id);
		User user = userDao.getUserById(_id);
		return new Result(ResultCode.SUCCESS, user);
	}
	
	@RequestMapping("/updateUserById")
	public Result updateUserById (@RequestBody User user) {
		logger.info("updateUserById params:" + user.toString());
		user.setLast_modify_time(new Date());
		userDao.editUser(user);
		return new Result(ResultCode.SUCCESS);
	}
}
