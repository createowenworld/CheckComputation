package xi.feng.util;



import org.apache.commons.lang.StringUtils;



/**
 * ASCII操作相关方法类
 * @author xi-xi
 *
 */
public class ASCIIUtils {
	/**
	 * 数字校验
	 */
	public static final String REGEX = "^\\d+$";
	
	/**
	  * 将字符串转成ASCII的Java方法
	  * @param value
	  * @return
	  */
	 public static String stringToAscii(String value)  
	 {  
	     StringBuffer sbu = new StringBuffer();  
	     char[] chars = value.toCharArray();   
	     for (int i = 0; i < chars.length; i++) {  
	         if(i != chars.length - 1)  
	         {  
	             sbu.append((int)chars[i]).append(",");  
	         }  
	         else {
	             sbu.append((int)chars[i]);  
	         }  
	     }  
	     return sbu.toString();  
	 }  
	 /**
	  * 将ASCII转成字符串的java方法
	  * @param value
	  * @return
	  */
	 public static String asciiToString(String value)  
	 {  
	     StringBuffer sbu = new StringBuffer();  
	     String[] chars = value.split(",");  
	     for (int i = 0; i < chars.length; i++) {  
	         sbu.append((char) Integer.parseInt(chars[i]));  
	     }  
	     return sbu.toString();  
	 }  
	 /**
	  * 返回4位数数字的字符串
	  * @param value ASCII乘积字符串
	  * @return 4位数数字的字符串
	  */
	 public static String getFourDigitNumber (String value) {
		 String numString = "1111";
		 if (StringUtils.isNotBlank(value)) {
			 if (String.valueOf(Long.MIN_VALUE).equals(value)) {
				 value = String.valueOf(Long.MAX_VALUE);
			 }
			 if (value.matches(REGEX)) {
				 Long numLong = Long.parseLong(value);
				 //字符串长度
				 int length = value.length();
				if (length == 4) {
					return numLong.toString();
				} else if (length < 4) {
					numLong = Long.parseLong(value)*(length + 1L);
					//递归运算获取4位数
					numString = getFourDigitNumber(String.valueOf(numLong));
				} else {
					numLong = (long) (numLong%(length*(Math.pow(10,length%2))));
					numString = getFourDigitNumber(String.valueOf(numLong));
				}
			 }
		 } 
		 return numString;
	 }
	 /**
	  * 返回一个字符串ASCII码的乘积
	  * @param value 以逗号隔开的数字字符串（字符串ASCII组成的数字）
	  * @return ASCII乘积字符串
	  */
	 public static String getAsciiNumberAmass (String value) {
		 String numString = "";
		 if (StringUtils.isNotBlank(value)) {
			 String [] strArr = value.split(",");
			 int length = strArr.length;
			 Long numLong = 1L;
			 for (int i = 0; i < length; i++) {
				if (strArr[i].matches(REGEX)) {
					numLong = numLong*Long.parseLong(strArr[i]);
				}
			 }
			 numString = numLong.toString();
		 } else {
			 numString = "1111";
		 }
		 return numString;
	 }
	 
	 public static void main(String[] args) {   
         String str = "t_oc_user";
         String asciiResult = stringToAscii(str);
         System.out.println(asciiResult);
         String amass = getAsciiNumberAmass(asciiResult);
         System.out.println("amass:" + amass);
         String fourStr = getFourDigitNumber(amass);
         System.out.println("fourStr:" + fourStr);
         String stringResult = asciiToString(asciiResult);
         System.out.println(stringResult);
     }

}
