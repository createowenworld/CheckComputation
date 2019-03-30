package xi.feng.util;


import java.io.UnsupportedEncodingException;

import org.apache.commons.lang.StringUtils;

/**
 * 数据库操作相关操作工具类
 * @author xi-xi
 *
 */
public class DaoUtils {
	/**
	 * 生成指定表的主键ID
	 * @param CollectionName
	 * @return
	 */
	public static Long getPrimaryId (String CollectionName) {
		Long _id = System.currentTimeMillis();
		if  (StringUtils.isNotBlank(CollectionName)) {
			StringBuffer sbf = new StringBuffer();
			sbf.append(ASCIIUtils.getFourDigitNumber(ASCIIUtils.getAsciiNumberAmass(ASCIIUtils.stringToAscii(CollectionName)))).append(_id);
			_id = Long.parseLong(sbf.toString());
		}
		return _id;
	}	
	
	public static void main(String[] args) {
		Long _id = getPrimaryId("t_oc_user");
		System.out.println(_id);
	}
}
