/**
 * Hello World
 */
// public class TestPro {
//   /* 第一个Java程序
//    * 它将输出字符串 Hello World
//    */
//   public static void main(String[] args) {
//       System.out.println("Hello World"); // 输出 Hello World
//   }
// }

/**
 * 基本数据类型
 */
// public class TestPro {
//   static boolean bool;
//   static byte by;
//   static char ch;
//   static double d;
//   static float f;
//   static int i;
//   static long l;
//   static short sh;
//   static String str;

//   public static void main(String[] args) {
//       System.out.println("Bool :" + bool);
//       System.out.println("Byte :" + by);
//       System.out.println("Character:" + ch);
//       System.out.println("Double :" + d);
//       System.out.println("Float :" + f);
//       System.out.println("Integer :" + i);
//       System.out.println("Long :" + l);
//       System.out.println("Short :" + sh);
//       System.out.println("String :" + str);
//   }
// }

/**
 * 变量类型
 */

// 局部变量
// public class TestPro {
// public static void main(String[] args) {
// int num = 2;
// System.out.println(num);
// }
// }

// 实例变量
// public class TestPro {
// public int num;

// public TestPro(int arg) {
// num = arg;

// }

// public void printNum() {
// System.out.println(num);
// }
// public static void main(String[] args) {
// TestPro one = new TestPro(31);
// one.printNum();
// }
// }

// 类变量 静态变量
// public class TestPro {
// static int num;

// public static void main(String[] args) {
// System.out.println((num));
// }
// }

// public class TestPro {
// public static void main(String[] args) {
// int a = 10;
// int b = 20;
// int c = 25;
// int d = 25;
// System.out.println("a + b = " + (a + b) );
// System.out.println("a - b = " + (a - b) );
// System.out.println("a * b = " + (a * b) );
// System.out.println("b / a = " + (b / a) );
// System.out.println("b % a = " + (b % a) );
// System.out.println("c % a = " + (c % a) );
// // System.out.println("a++ = " + (a++) );
// // System.out.println("a++a = " + (a) );
// // System.out.println("a-- = " + (a--) );
// // System.out.println("a--a = " + (a) );
// // 查看 d++ 与 ++d 的不同
// // System.out.println("d++ = " + (d++) );
// // System.out.println("d++d = " + (d) );
// System.out.println("++d = " + (++d) );
// }
// }

// 循环
// public class TestPro {
//   public static void main(String[] args) {
//     // while
//     // int i = 0;
//     // while(i <= 10) {
//     // System.out.println("i=> " + i);
//     // i++;
//     // }

//     // do while
//     // int i = 11;
//     // do {
//     // // 必定执行
//     // System.out.println("i=> " + i);
//     // i++;
//     // } while (i <= 10);

//     // for
//     // for(int i = 0; i <= 10; i++) {
//     // System.out.println("i=> " + i);
//     // }

//     // 增强for
//     // int[] numbers = { 10, 20, 30 };
//     // for (int num : numbers) {
//     //   System.out.println("num => " + num);
//     // }

//     // break continue 
//     // String [] names = { "Tom", "Jerry", "David" };
//     // for(String name: names) {
//     //   // if (name == "Jerry") break;
//     //   if (name == "Jerry") continue;
//     //   System.out.println("names =>" + name);
//     // }
//     // System.out.println("next");

//   }
// }

// StringBuffer 和 StringBuilder 字符操作
// public class TestPro {
//   public static void main(String[] args) {
//     StringBuilder sb = new StringBuilder(10);
//     sb.append("hello");
//     System.out.println("sb => " + sb);
//     sb.append("world");
//     System.out.println("sb => " + sb);
//     sb.delete(5, 10);
//     System.out.println("sb => " + sb);
//   }
// }

// 数组
// public class TestPro {
//   public static void main(String[] args) {
//   //   double [] nums = new double[10];
//   //   System.out.println("nums =>" + nums[0]);
//   //   nums[0] = 5.6;
//   //   nums[1] = 4.5;
//   //   nums[2] = 3.3;
//   //   nums[3] = 13.2;
//   //   nums[4] = 4.0;
//   //   nums[5] = 34.33;
//   //   nums[6] = 34.0;
//   //   nums[7] = 45.45;
//   //   nums[8] = 99.993;
//   //   nums[9] = 11123;

//   //   double total = 0;
//   //   System.out.println("nums =>" + nums[0]);
//   //   for(double num : nums) {
//   //     total += num;
//   //   }
//   //   // for(int i = 0; i < nums.length; i++) {
//   //   //   total += nums[i];
//   //   // }
//   //   System.out.println("total =>" + total);
//   // }

// }

// 多维数组
// import java.util.Arrays;
// public class TestPro {
//   public static void main(String[] args) {
//     int arrs[][] = {
//       {1, 2, 3},
//       {4, 5},
//       {6, 7, 8}
//     };
//     // System.out.println(arrs[0]);
//     // System.out.println(arrs[1][1]);
//     // for(int [] nums : arrs) {
//     //   for(int num : nums) {
//     //     System.out.println(num);
//     //   }
//     // }

//     System.out.println(Arrays.deepToString(arrs));
//   }
// }

// 方法
// public class TestPro {

//   static int getMax(int num1, int num2) {
//     return num2 > num1 ? num2 : num1;
//   }

//   // 同名方法重载
//   static double getMax(double num1, double num2) {
//     return num2 > num1 ? num2 : num1;
//   }
//   public static void main(String[] args) {
//     System.out.println("int => " + getMax(5, 6));
//     System.out.println("double => " + getMax(5.6, 6.1));
//     for(String arg: args) {
//       System.out.println("arg => " + arg);
//     }
//   }
// }

// 方法的构造方法
// public class TestPro{
//   static class Person{
//     public String name = "";
//     Person(String name) {
//       this.name = name;
//     }
//     public static void main(String[] args) {

//     }
//   }

//   public static void main(String[] args) {
//     Person person1 = new Person("person1");
//     Person person2 = new Person("person2");
//     System.out.println("person1 => " + person1.name);
//     System.out.println("person2 => " + person2.name);
//   }
// }

// 可变参数
// public class TestPro{
//   static int getMax(int... nums) {
//     int result = 0;
//     if (nums.length == 0) {
//       System.out.println("not passed");
//       return result;
//     }

//     for(int num: nums) {
//       if (num > result) {
//         result = num;
//       }
//     }

//     return result;
//   }
//   public static void main(String[] args) {
//     System.out.println("getMax => " + getMax());
//     System.out.println("getMax int [] => " + getMax(new int[]{1, 8, 2, 3, 4}));
//   }
// }

//使用 BufferedReader 在控制台读取字符
// import java.io.*;

// public class TestPro {
//   public static void main(String[] args) throws IOException {
//     // char c;
//     // // 使用 System.in 创建 BufferedReader
//     // BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//     // System.out.println("输入字符, 按下 'q' 键退出。");
//     // // 读取字符
//     // do {
//     // c = (char) br.read();
//     // System.out.println(c);
//     // } while (c != 'q');

//     BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//     String str;
//     System.out.println("Enter lines of text.");
//     System.out.println("Enter 'end' to quit.");
//     do {
//       str = br.readLine();
//       System.out.println(str);
//     } while (!str.equals("end"));
//   }
// }

// 文件写入 读取
// import java.io.*;

// public class TestPro {
//   public static void main(String[] args) throws IOException {

//     File f = new File("a.txt");
//     FileOutputStream fop = new FileOutputStream(f);
//     // 构建FileOutputStream对象,文件不存在会自动新建

//     OutputStreamWriter writer = new OutputStreamWriter(fop, "UTF-8");
//     // 构建OutputStreamWriter对象,参数可以指定编码,默认为操作系统默认编码,windows上是gbk

//     writer.append("中文输入");
//     // 写入到缓冲区

//     writer.append("\r\n");
//     // 换行

//     writer.append("English");
//     // 刷新缓存冲,写入到文件,如果下面已经没有写入的内容了,直接close也会写入

//     writer.close();
//     // 关闭写入流,同时会把缓冲区内容写入文件,所以上面的注释掉

//     fop.close();
//     // 关闭输出流,释放系统资源

//     FileInputStream fip = new FileInputStream(f);
//     // 构建FileInputStream对象

//     InputStreamReader reader = new InputStreamReader(fip, "UTF-8");
//     // 构建InputStreamReader对象,编码与写入相同

//     StringBuffer sb = new StringBuffer();
//     while (reader.ready()) {
//       sb.append((char) reader.read());
//       // 转成char加到StringBuffer对象中
//     }
//     System.out.println(sb.toString());
//     reader.close();
//     // 关闭读取流

//     fip.close();
//     // 关闭输入流,释放系统资源

//   }
// }

// 创建文件夹
import java.io.File;

public class TestPro {
  public static void main(String[] args) {
    String dirname = "/tmp/user/fufy/bin";
    File d = new File(dirname);
    // 现在创建目录
    d.mkdirs();
  }
}