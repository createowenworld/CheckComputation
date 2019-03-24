package springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

//返回json字符串的数据，直接可以编写RESTFul的接口
@RestController 
// @SpringBootApplication声明让spring boot自动给程序进行必要的配置
@SpringBootApplication 
// 配置拦截前缀
@RequestMapping("/springboot") 
public class SpringBootTest {	
	@RequestMapping(value = "/{name}", method = RequestMethod.GET)
	public String sayWorld(@PathVariable("name") String name) {	
		return "Hello " + name;	
	} 	
	public static void main(String[] args) {	
		SpringApplication.run(SpringBootTest.class, args);	
	}
}


