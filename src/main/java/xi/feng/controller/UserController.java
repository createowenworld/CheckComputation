package xi.feng.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import xi.feng.entity.Result;
import xi.feng.entity.ResultCode;
import xi.feng.entity.User;

@RestController
public class UserController {
//	@RequestMapping("/index")
//	public Result index(User user) {
//		System.out.println(user.toString());
//		return new Result(ResultCode.SUCCESS);
//	}
	
	@RequestMapping(path = "/index", method = RequestMethod.POST, consumes = "application/json")
	public Result index(@RequestBody User user) {
		System.out.println("user:" + user.toString());
		return new Result(ResultCode.SUCCESS);
	}
}
