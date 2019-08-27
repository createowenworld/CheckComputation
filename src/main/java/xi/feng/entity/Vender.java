package xi.feng.entity;

import java.io.Serializable;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;
/**
 * t_oc_vender厂家实体类
 * @author xi-xi
 *
 */
@Document(collection="t_oc_vender") //指定存放集合
public class Vender implements Serializable{
	private static final long serialVersionUID = -3258839839160856613L;
	
	//厂家ID
	@Id
	private Long vender_id;
	//厂家名称
	private String vender_nm;
	//厂家地址
	private String vender_add;
	//厂家联系人
	private String vender_person;
	//联系电话
	private String vender_phone;
	//创建时间
	@DateTimeFormat(pattern = "YYYY-MM-dd HH:mm:ss")
	private String create_time;
	//最后修改时间
	@DateTimeFormat(pattern = "YYYY-MM-dd HH:mm:ss")
	private String last_modify_time;
	//用户ID
	private String user_id;
	
	//防止转json时精丢失
	public String getVender_id() {
		return vender_id+"";
	}
	public Long getLVender_id() {
		return vender_id;
	}
	public void setVender_id(Long vender_id) {
		this.vender_id = vender_id;
	}
	public String getVender_nm() {
		return vender_nm;
	}
	public void setVender_nm(String vender_nm) {
		this.vender_nm = vender_nm;
	}
	public String getVender_add() {
		return vender_add;
	}
	public void setVender_add(String vender_add) {
		this.vender_add = vender_add;
	}
	public String getVender_person() {
		return vender_person;
	}
	public void setVender_person(String vender_person) {
		this.vender_person = vender_person;
	}
	public String getVender_phone() {
		return vender_phone;
	}
	public void setVender_phone(String vender_phone) {
		this.vender_phone = vender_phone;
	}
	public String getCreate_time() {
		return create_time;
	}
	public void setCreate_time(String create_time) {
		this.create_time = create_time;
	}
	public String getLast_modify_time() {
		return last_modify_time;
	}
	public void setLast_modify_time(String last_modify_time) {
		this.last_modify_time = last_modify_time;
	}
	public String getUser_id() {
		return user_id;
	}
	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}
	/**
	 * 返回实体对应的数据表名
	 * @return
	 */
	public String getCollectionName () {
		return "t_oc_vender";
	}
}
