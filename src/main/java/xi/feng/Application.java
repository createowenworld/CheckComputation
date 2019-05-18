package xi.feng;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;


@SpringBootApplication // same as @Configuration @EnableAutoConfiguration @ComponentScan
@ServletComponentScan //springboot 增加过滤器需要在启动类增加注解
public class Application {	
	public static void main(String[] args) {	
		SpringApplication.run(Application.class, args);	
	}
}

