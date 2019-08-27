package xi.feng.entity;


import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import com.alibaba.fastjson.annotation.JSONField;
import com.fasterxml.jackson.annotation.JsonProperty;
/**
 * t_oc_user用户表实体类
 * @author xi-xi
 *
 */

@Document(collection="t_oc_user") //指定存放集合
public class User implements Serializable{
	private static final long serialVersionUID = -3258839839160856613L;
	//用户ID
	@Id
	@JsonProperty(value = "_id")
	private Long user_id;
	//账号
	@JsonProperty(value = "account")
	private String user_account;
	//密码
	@JSONField(serialize = false)//密码不序列化到前端JSON
	@JsonProperty(value = "pwd")
	private String user_pwd;
	//姓名
	@JsonProperty(value = "name")
	private String user_nm;
	//手机号码
	@JsonProperty(value = "phone")
	private String user_phone;
	//角色
	@JsonProperty(value = "role")
	private String user_role;
	//创建时间
	@DateTimeFormat(pattern = "YYYY-MM-dd HH:mm:ss")
	private String create_time;
	//最后修改时间
	@DateTimeFormat(pattern = "YYYY-MM-dd HH:mm:ss")
	private String last_modify_time;
	
	
	public String getUser_id() {
		return user_id + "";
	}
	public Long getLUser_id() {
		return user_id;
	}
	public void setUser_id(Long user_id) {
		this.user_id = user_id;
	}
	public String getUser_account() {
		return user_account;
	}
	public void setUser_account(String user_account) {
		this.user_account = user_account;
	}
	public String getUser_pwd() {
		return user_pwd;
	}
	public void setUser_pwd(String user_pwd) {
		this.user_pwd = user_pwd;
	}
	public String getUser_nm() {
		return user_nm;
	}
	public void setUser_nm(String user_nm) {
		this.user_nm = user_nm;
	}
	public String getUser_phone() {
		return user_phone;
	}
	public void setUser_phone(String user_phone) {
		this.user_phone = user_phone;
	}
	public String getUser_role() {
		return user_role;
	}
	public void setUser_role(String user_role) {
		this.user_role = user_role;
	}
	public String getCreate_time() {
		return create_time;
	}
	public void setCreate_time(Date create_time) {
		SimpleDateFormat sdf =  new SimpleDateFormat("YYYY-MM-dd HH:mm:ss");
		this.create_time = sdf.format(create_time);
	}
	public String getLast_modify_time() {
		return last_modify_time;
	}
	public void setLast_modify_time(Date last_modify_time) {
		SimpleDateFormat sdf =  new SimpleDateFormat("YYYY-MM-dd HH:mm:ss");
		this.last_modify_time = sdf.format(last_modify_time);
	}
	/**
	 * 返回实体对应的数据表名
	 * @return
	 */
	public String getCollectionName () {
		return "t_oc_user";
	}
	public String toString () {
		String str = "user_id:" + user_id + ",user_account:" + user_account + ",user_pwd:" + user_pwd;
		return str;
	}
	/**
	 * 用户名一样就是同一个对象
	 * @param user
	 * @return
	 */
	public boolean equals (User user) {
		return user_account.equals(user.getUser_account());
	}
}
