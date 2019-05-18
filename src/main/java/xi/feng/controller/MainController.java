package xi.feng.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import xi.feng.entity.Result;
import xi.feng.entity.ResultCode;
import xi.feng.entity.User;

@Controller
public class MainController {

    @GetMapping("/")
    public String root() {
        return "redirect:/index";
    }
    

    @GetMapping("/login")
    public String login() {
    	System.out.println("2222+++++++++++");
        return "html/login.html";
    }
    @GetMapping("/toLogin")
    public String toLogin() {
    	System.out.println("33333+++++++++++");
        return "html/index.html";
    }
    @GetMapping("/login-error")
    public String loginError(Model model) {
        model.addAttribute("loginError", true);
        model.addAttribute("errorMsg", "登录失败，用户名或密码错误");
        return "login";
    }
}