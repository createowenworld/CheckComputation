package xi.feng.controller;

import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
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
}
