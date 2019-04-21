package xi.feng.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;

import groovy.util.logging.Slf4j;

//注册器名称为customFilter,拦截的url为所有
@WebFilter(filterName="customFilter",urlPatterns={"/*"})
@Slf4j
public class CustomFilter implements Filter {
	@Override
	public void destroy() {
		// TODO Auto-generated method stub
	}

	@Override
	public void doFilter(ServletRequest srequest, ServletResponse sresponse, FilterChain filterChain)
			throws IOException,ServletException {
		// TODO Auto-generated method stub
		HttpServletRequest request =(HttpServletRequest) srequest;
		System.out.println("this isMyFilter,url :"+request.getRequestURI());
		filterChain.doFilter(srequest,sresponse);
	}

	@Override
	public void init(FilterConfig arg0)throws ServletException {
		System.out.println("启动拦截器");
	}

}

