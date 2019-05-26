package xi.feng.entity;

import org.springframework.beans.factory.annotation.Autowired;

public class Result {
	private int code;
	private String msg;
	private Object data;
	private Long recordsTotal;
	private Long draw;
	private Long recordsFiltered;

	public Result(ResultCode resultCode, Object data) {
		this(resultCode);
		this.data = data;
	}

	public Result(ResultCode resultCode, Object data, Long recordsTotal) {
		this(resultCode);
		this.data = data;
		//数据库中符合条件数据总数
		this.recordsTotal = recordsTotal;
		this.draw = recordsTotal;
		this.recordsFiltered = recordsTotal;
	}
	public Result(ResultCode resultCode) {
		this.code = resultCode.getCode();
		this.msg = resultCode.getMsg();
	}
	public Result (int code, String msg) {
		this.code = code;
		this.msg = msg;
	}
	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}

	public Long getRecordsTotal() {
		return recordsTotal;
	}

	public void setRecordsTotal(Long recordsTotal) {
		this.recordsTotal = recordsTotal;
	}

	public Long getDraw() {
		return draw;
	}

	public void setDraw(Long draw) {
		this.draw = draw;
	}

	public Long getRecordsFiltered() {
		return recordsFiltered;
	}

	public void setRecordsFiltered(Long recordsFiltered) {
		this.recordsFiltered = recordsFiltered;
	}
}
