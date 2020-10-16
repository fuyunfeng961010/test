// 原本代码
// import 'package:flutter/material.dart';

// void main() {
//   runApp(MyApp());
// }

// class MyApp extends StatelessWidget {
//   // This widget is the root of your application.
//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       title: 'Flutter Demo',
//       theme: ThemeData(
//         // This is the theme of your application.
//         //
//         // Try running your application with "flutter run". You'll see the
//         // application has a blue toolbar. Then, without quitting the app, try
//         // changing the primarySwatch below to Colors.green and then invoke
//         // "hot reload" (press "r" in the console where you ran "flutter run",
//         // or simply save your changes to "hot reload" in a Flutter IDE).
//         // Notice that the counter didn't reset back to zero; the application
//         // is not restarted.
//         primarySwatch: Colors.blue,
//         // This makes the visual density adapt to the platform that you run
//         // the app on. For desktop platforms, the controls will be smaller and
//         // closer together (more dense) than on mobile platforms.
//         visualDensity: VisualDensity.adaptivePlatformDensity,
//       ),
//       home: MyHomePage(title: 'Flutter Demo Home Page'),
//     );
//   }
// }

// class MyHomePage extends StatefulWidget {
//   MyHomePage({Key key, this.title}) : super(key: key);

//   // This widget is the home page of your application. It is stateful, meaning
//   // that it has a State object (defined below) that contains fields that affect
//   // how it looks.

//   // This class is the configuration for the state. It holds the values (in this
//   // case the title) provided by the parent (in this case the App widget) and
//   // used by the build method of the State. Fields in a Widget subclass are
//   // always marked "final".

//   final String title;

//   @override
//   _MyHomePageState createState() => _MyHomePageState();
// }

// class _MyHomePageState extends State<MyHomePage> {
//   int _counter = 0;

//   void _incrementCounter() {
//     setState(() {
//       // This call to setState tells the Flutter framework that something has
//       // changed in this State, which causes it to rerun the build method below
//       // so that the display can reflect the updated values. If we changed
//       // _counter without calling setState(), then the build method would not be
//       // called again, and so nothing would appear to happen.
//       _counter++;
//     });
//   }

//   @override
//   Widget build(BuildContext context) {
//     // This method is rerun every time setState is called, for instance as done
//     // by the _incrementCounter method above.
//     //
//     // The Flutter framework has been optimized to make rerunning build methods
//     // fast, so that you can just rebuild anything that needs updating rather
//     // than having to individually change instances of widgets.
//     return Scaffold(
//       appBar: AppBar(
//         // Here we take the value from the MyHomePage object that was created by
//         // the App.build method, and use it to set our appbar title.
//         title: Text(widget.title),
//       ),
//       body: Center(
//         // Center is a layout widget. It takes a single child and positions it
//         // in the middle of the parent.
//         child: Column(
//           // Column is also a layout widget. It takes a list of children and
//           // arranges them vertically. By default, it sizes itself to fit its
//           // children horizontally, and tries to be as tall as its parent.
//           //
//           // Invoke "debug painting" (press "p" in the console, choose the
//           // "Toggle Debug Paint" action from the Flutter Inspector in Android
//           // Studio, or the "Toggle Debug Paint" command in Visual Studio Code)
//           // to see the wireframe for each widget.
//           //
//           // Column has various properties to control how it sizes itself and
//           // how it positions its children. Here we use mainAxisAlignment to
//           // center the children vertically; the main axis here is the vertical
//           // axis because Columns are vertical (the cross axis would be
//           // horizontal).
//           mainAxisAlignment: MainAxisAlignment.center,
//           children: <Widget>[
//             Text(
//               'You have pushed the button this many times:',
//             ),
//             Text(
//               '$_counter',
//               style: Theme.of(context).textTheme.headline4,
//             ),
//           ],
//         ),
//       ),
//       floatingActionButton: FloatingActionButton(
//         onPressed: _incrementCounter,
//         tooltip: 'Increment',
//         child: Icon(Icons.add),
//       ), // This trailing comma makes auto-formatting nicer for build methods.
//     );
//   }
// }
// 测试代码
// import 'package:flutter/material.dart';

//主函数（入口函数），下面我会简单说说Dart的函数
// void main() => runApp(MyApp());

// 声明MyApp类
// class MyApp extends StatelessWidget {
//   //重写build方法
//   @override
//   Widget build(BuildContext context) {
//     //返回一个Material风格的组件
//     return MaterialApp(
//       title: 'Welcome to Flutteraa',
//       home: Scaffold(
//         //创建一个Bar，并添加文本
//         appBar: AppBar(
//           title: Text('Welcome to Flutter'),
//         ),
//         //在主体的中间区域，添加一个hello world 的文本
//         body: Center(
//           child: Text('Hello World'),
//         ),
//       ),
//     );
//   }
// }

// 公共的引入
import 'package:flutter/material.dart';

// 主函数（入口函数），下面我会简单说说Dart的函数
void main() => runApp(MyApp());

// Text
// class MyApp extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       title: 'Text widget',
//       home: Scaffold(
//         body: Center(
//             child: Text(
//           'Hello JSPang  ,非常喜欢前端，并且愿意为此奋斗一生。我希望可以出1000集免费教程。Hello JSPang  ,非常喜欢前端，并且愿意为此奋斗一生。我希望可以出1000集免费教程。',
//           textAlign: TextAlign.left,
//           maxLines: 2,
//           overflow: TextOverflow.ellipsis,
//           style: TextStyle(
//             fontSize: 16.0,
//             color: Color.fromARGB(255, 255, 150, 150),
//             decoration: TextDecoration.underline,
//             decorationStyle: TextDecorationStyle.solid,
//           ),
//         )),
//       ),
//     );
//   }
// }

// Container
// class MyApp extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       title: 'Text widget',
//       home: Scaffold(
//         body: Center(
//           child: Container(
//             child: new Text(
//               'Hello JSPang',
//               style: TextStyle(fontSize: 40.0),
//             ),
//             alignment: Alignment.topLeft,
//             width: 400.0,
//             height: 400.0,
//             // color: Colors.lightBlue,
//             // padding:const EdgeInsets.all(10.0),
//             padding: const EdgeInsets.fromLTRB(30.0, 30.0, 0.0, 0.0),
//             margin: const EdgeInsets.all(0),
//             decoration: new BoxDecoration(
//                 gradient: const LinearGradient(colors: [
//                   Colors.lightBlue,
//                   Colors.greenAccent,
//                   Colors.purple
//                 ]),
//                 border: Border.all(width: 1.0, color: Colors.red)),
//           ),
//         ),
//       ),
//     );
//   }
// }

// Image
// class MyApp extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       title: 'Text widget',
//       home: Scaffold(
//         appBar: AppBar(
//           title: Text('Welcome to Flutter'),
//         ),
//         body: Center(
//           child: Container(
//             child: new Image.network(
//               'https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg',
//               scale: 1.0,
//               // fit: BoxFit.fitHeight,
//               // color: Colors.greenAccent,
//               // colorBlendMode: BlendMode.darken,
//             ),
//             alignment: Alignment.topCenter,
//             width: 1000.0,
//             height: 500.0,
//             // color: Colors.lightBlue,
//           ),
//         ),
//       ),
//     );
//   }
// }

// listview  纵向
// class MyApp extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       title: 'Text widget',
//       home: Scaffold(
//         appBar: AppBar(
//           title: Text('Welcome to Flutter'),
//         ),
//         body: new ListView(children: <Widget>[
//           // new ListTile(
//           //     leading: new Icon(Icons.access_time),
//           //     title: new Text('access_time')),

//           //  new ListTile(
//           //     leading: new Icon(Icons.access_time),
//           //     title: new Text('access_time2'))
//           new Image.network(
//             'https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg',
//             scale: 1.0,
//           ),
//           new Image.network(
//             'https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg',
//             scale: 1.0,
//             color: Colors.greenAccent,
//             colorBlendMode: BlendMode.darken,
//           ),
//           new Image.network(
//             'https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg',
//             scale: 1.0,
//           ),
//         ]),
//       ),
//     );
//   }
// }

// // listview  横向
// class MyApp extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       title: 'Text widget',
//       home: Scaffold(
//         body: Center(
//           child: Container(
//               height: 200.0,
//               child: new ListView(
//                 scrollDirection: Axis.horizontal,
//                 children: <Widget>[
//                   new Container(
//                     width: 180.0,
//                     // color: Colors.lightBlue,
//                     child: new Image.network(
//                       'https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg',
//                       scale: 1.0,
//                     ),
//                   ),
//                   new Container(
//                     width: 180.0,
//                     // color: Colors.amber,
//                     child: new Image.network(
//                       'https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg',
//                       scale: 1.0,
//                     ),
//                   ),
//                   new Container(
//                     width: 180.0,
//                     // color: Colors.deepOrange,
//                     child: new Image.network(
//                       'https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg',
//                       scale: 1.0,
//                     ),
//                   ),
//                   new Container(
//                     width: 180.0,
//                     // color: Colors.deepPurpleAccent,
//                     child: new Image.network(
//                       'https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg',
//                       scale: 1.0,
//                     ),
//                   ),
//                 ],
//               )),
//         ),
//       ),
//     );
//   }
// }

// listview  横向  组件拆分
// class MyList extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return ListView(
//       scrollDirection: Axis.horizontal,
//       children: <Widget>[
//         new Container(
//           width: 180.0,
//           // color: Colors.lightBlue,
//           child: new Image.network(
//             'https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg',
//             scale: 1.0,
//           ),
//         ),
//         new Container(
//           width: 180.0,
//           // color: Colors.amber,
//           child: new Image.network(
//             'https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg',
//             scale: 1.0,
//           ),
//         ),
//         new Container(
//           width: 180.0,
//           // color: Colors.deepOrange,
//           child: new Image.network(
//             'https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg',
//             scale: 1.0,
//           ),
//         ),
//         new Container(
//           width: 180.0,
//           // color: Colors.deepPurpleAccent,
//           child: new Image.network(
//             'https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg',
//             scale: 1.0,
//           ),
//         ),
//       ],
//     );
//   }
// }

// class MyApp extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       title: 'ListView widget',
//       home: Scaffold(
//         body: Center(
//           child: Container(height: 200.0, child: MyList()),
//         ),
//       ),
//     );
//   }
// }

// ListView.builder 动态列表
// import 'package:flutter/material.dart';
// void main () => runApp(MyApp(
//   items: new List<String>.generate(1000, (i)=> "Item $i")
// ));

// class MyApp extends StatelessWidget{

//   final List<String> items;
//   MyApp({Key key, @required this.items}):super(key:key);
//   @override
//   Widget build(BuildContext context ){
//       return MaterialApp(
//         title:'ListView widget',
//         home:Scaffold(
//           body:new ListView.builder(
//             itemCount:items.length,
//             itemBuilder:(context,index){
//               return new ListTile(
//                 title:new Text('${items[index]}'),
//               );
//             }
//           )
//         ),
//       );
//   }
// }

// GridView 网格列表
// class MyApp extends StatelessWidget{
//   @override
//   Widget build(BuildContext context ){
//       return MaterialApp(
//         title:'ListView widget',
//         home:Scaffold(
//           body:GridView.count(
//             padding:const EdgeInsets.all(20.0),
//             crossAxisSpacing: 10.0,
//             crossAxisCount: 4,
//             children: <Widget>[
//               const Text('I am Jspang'),
//               const Text('I love Web'),
//               const Text('jspang.com'),
//               const Text('我喜欢玩游戏'),
//               const Text('我喜欢看书'),
//               const Text('我喜欢吃火锅')
//             ],
//           )
//         ),
//       );
//   }
// }

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'ListView widget',
      home: Scaffold(
          appBar: AppBar(
            title: Text('Welcome to Flutter'),
          ),
          body: GridView(
            gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 3,
                mainAxisSpacing: 2.0,
                crossAxisSpacing: 2.0,
                childAspectRatio: 0.7),
            children: <Widget>[
              new Image.network(
                  'http://img5.mtime.cn/mt/2018/10/22/104316.77318635_180X260X4.jpg',
                  fit: BoxFit.cover),
              new Image.network(
                  'http://img5.mtime.cn/mt/2018/10/10/112514.30587089_180X260X4.jpg',
                  fit: BoxFit.cover),
              new Image.network(
                  'http://img5.mtime.cn/mt/2018/11/13/093605.61422332_180X260X4.jpg',
                  fit: BoxFit.cover),
              new Image.network(
                  'http://img5.mtime.cn/mt/2018/11/07/092515.55805319_180X260X4.jpg',
                  fit: BoxFit.cover),
              new Image.network(
                  'http://img5.mtime.cn/mt/2018/11/21/090246.16772408_135X190X4.jpg',
                  fit: BoxFit.cover),
              new Image.network(
                  'http://img5.mtime.cn/mt/2018/11/17/162028.94879602_135X190X4.jpg',
                  fit: BoxFit.cover),
              new Image.network(
                  'http://img5.mtime.cn/mt/2018/11/19/165350.52237320_135X190X4.jpg',
                  fit: BoxFit.cover),
              new Image.network(
                  'http://img5.mtime.cn/mt/2018/11/16/115256.24365160_180X260X4.jpg',
                  fit: BoxFit.cover),
              new Image.network(
                  'http://img5.mtime.cn/mt/2018/11/20/141608.71613590_135X190X4.jpg',
                  fit: BoxFit.cover),
              new Image.network(
                  'http://img5.mtime.cn/mt/2018/11/16/115256.24365160_180X260X4.jpg',
                  fit: BoxFit.cover),
              new Image.network(
                  'http://img5.mtime.cn/mt/2018/11/20/141608.71613590_135X190X4.jpg',
                  fit: BoxFit.cover),
            ],
          )),
    );
  }
}

// ROW 水平布局

// 不灵活
// class MyApp extends StatelessWidget{
//   @override
//   Widget build(BuildContext context ){
//       return MaterialApp(
//         title:'ListView widget',

//         home:Scaffold(
//           appBar:new AppBar(
//             title:new Text('水平方向布局'),
//           ),
//           body:new Row(
//             children: <Widget>[
//               new RaisedButton(
//                 onPressed: (){

//                 },
//                 color:Colors.redAccent,
//                 child:new Text('红色按钮')
//               ),
//               new RaisedButton(
//                 onPressed: (){

//                 },
//                 color:Colors.orangeAccent,
//                 child: new Text('黄色按钮'),
//               ),
//               new RaisedButton(
//                 onPressed: (){

//                 },
//                 color:Colors.pinkAccent,
//                 child:new Text('粉色按钮')
//               )
//             ],
//           )
//         ),
//       );
//   }
// }

// 灵活
// class MyApp extends StatelessWidget{
//   @override
//   Widget build(BuildContext context ){
//       return MaterialApp(
//         title:'ListView widget',

//         home:Scaffold(
//           appBar:new AppBar(
//             title:new Text('水平方向布局'),
//           ),
//           body:new Row(
//             children: <Widget>[
//               Expanded(child:new RaisedButton(
//                 onPressed: (){
//                 },
//                 color:Colors.redAccent,
//                 child:new Text('红色按钮')
//               )),
//               Expanded(child:new RaisedButton(
//                 onPressed: (){
//                   },
//                   color:Colors.orangeAccent,
//                   child: new Text('黄色按钮'),
//                 )

//               ),
//               Expanded(child:new RaisedButton(
//                 onPressed: (){
//                 },
//                 color:Colors.pinkAccent,
//                 child:new Text('粉色按钮')
//               )
//               )
//             ],
//           )
//         ),
//       );
//   }
// }

// 灵活 不灵活 混用
// class MyApp extends StatelessWidget{
//   @override
//   Widget build(BuildContext context ){
//       return MaterialApp(
//         title:'ListView widget',

//         home:Scaffold(
//           appBar:new AppBar(
//             title:new Text('水平方向布局'),
//           ),
//           body:new Row(
//             children: <Widget>[
//              new RaisedButton(
//                 onPressed: (){

//                 },
//                 color:Colors.redAccent,
//                 child:new Text('红色按钮')
//             ),
//             Expanded(child:new RaisedButton(
//                 onPressed: (){

//                   },
//                   color:Colors.orangeAccent,
//                   child: new Text('黄色按钮'),
//                 )

//               ),
//             new RaisedButton(
//                 onPressed: (){
//                 },
//                 color:Colors.pinkAccent,
//                 child:new Text('粉色按钮')
//               )
//             ],
//           )
//         ),
//       );
//   }
// }

// Column 垂直布局
// class MyApp extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       title: 'ListView widget',
//       home: Scaffold(
//           appBar: new AppBar(
//             title: new Text('垂直方向布局'),
//           ),
//           // body:Column(
//           //   crossAxisAlignment: CrossAxisAlignment.start,
//           //   mainAxisAlignment: MainAxisAlignment.center,
//           //   children: <Widget>[
//           //    Center(child: Text('I am JSPang')),
//           //    Center(child: Text('my website is jspang.com')),
//           //    Center(child: Text('I love coding'))
//           //   ],
//           // )
//           body: Column(
//             mainAxisAlignment: MainAxisAlignment.center,
//             children: <Widget>[
//               Center(child: Text('I am JSPang')),
//               Expanded(child: Center(child: Text('my website is jspang.com'))),
//               Center(child: Text('I love coding'))
//             ],
//           )),
//     );
//   }
// }

// stack 层叠布局
// CircleAvatar
// class MyApp extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     var stack = new Stack(
//       alignment: const FractionalOffset(0.5, 0.8),
//       children: <Widget>[
//         new CircleAvatar(
//           // backgroundImage: new NetworkImage('https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg'),
//           // 本地图片资源 pubspec.yaml配置
//           backgroundImage: new AssetImage('images/free_stock_photo.jpg'),
//           radius: 100.0,
//         ),
//         new Container(
//           decoration: new BoxDecoration(
//               // color: Colors.lightBlue,
//               ),
//           padding: EdgeInsets.all(5.0),
//           child: new Text(
//             'JSPang 技术胖',
//             style: TextStyle(
//               fontSize: 16.0,
//               color: Color.fromARGB(255, 255, 255, 255),
//             ),
//           ),
//         )
//       ],
//     );

//     return MaterialApp(
//       title: 'ListView widget',
//       home: Scaffold(
//         appBar: new AppBar(
//           title: new Text('垂直方向布局'),
//         ),
//         body: Center(child: stack),
//       ),
//     );
//   }
// }

// Positioned
// class MyApp extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     var stack = new Stack(
//       children: <Widget>[
//         new CircleAvatar(
//           backgroundImage: new NetworkImage(
//               'https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg'),
//           radius: 100.0,
//         ),
//         new Positioned(
//           top: 10.0,
//           left: 50.0,
//           child: new Text(
//             'JSPang.com',
//             style: TextStyle(
//               fontSize: 16.0,
//               color: Color.fromARGB(255, 255, 255, 255),
//             ),
//           ),
//         ),
//         new Positioned(
//           bottom: 10.0,
//           right: 80.0,
//           child: new Text(
//             '技术胖',
//             style: TextStyle(
//               fontSize: 16.0,
//               color: Color.fromARGB(255, 255, 255, 255),
//             ),
//           ),
//         )
//       ],
//     );

//     return MaterialApp(
//       title: 'ListView widget',
//       home: Scaffold(
//         appBar: new AppBar(
//           title: new Text('层叠布局'),
//         ),
//         body: Center(child: stack),
//       ),
//     );
//   }
// }

// 卡片组件布局

// class MyApp extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     var card = new Card(
//       child: Column(
//         children: <Widget>[
//           ListTile(
//             title: new Text(
//               '吉林省吉林市昌邑区',
//               style: TextStyle(fontWeight: FontWeight.w500),
//             ),
//             subtitle: new Text('技术胖:1513938888'),
//             leading: new Icon(
//               Icons.account_box,
//               color: Colors.lightBlue,
//             ),
//           ),
//           new Divider(),
//           ListTile(
//             title: new Text(
//               '北京市海淀区中国科技大学',
//               style: TextStyle(fontWeight: FontWeight.w500),
//             ),
//             subtitle: new Text('胜宏宇:1513938888'),
//             leading: new Icon(
//               Icons.account_box,
//               color: Colors.lightBlue,
//             ),
//           ),
//           new Divider(),
//           ListTile(
//             title: new Text(
//               '河南省濮阳市百姓办公楼',
//               style: TextStyle(fontWeight: FontWeight.w500),
//             ),
//             subtitle: new Text('JSPang:1513938888'),
//             leading: new Icon(
//               Icons.account_box,
//               color: Colors.lightBlue,
//             ),
//           ),
//           new Divider(),
//         ],
//       ),
//     );

//     return MaterialApp(
//       title: 'ListView widget',
//       home: Scaffold(
//         appBar: new AppBar(
//           title: new Text('卡片布局'),
//         ),
//         body: Center(child: card),
//       ),
//     );
//   }
// }

// 页面导航
// 基础跳转
// import 'package:flutter/material.dart';

// void main(){
//   runApp(MaterialApp(
//     title:'导航演示1',
//     home:new FirstScreen()
//   ));
// }

// class FirstScreen extends StatelessWidget{
//   @override
//   Widget build(BuildContext context){
//     return new Scaffold(
//       appBar: AppBar(title:Text('导航页面')),
//       body:Center(
//         child:RaisedButton(
//           child:Text('查看商品详情页面'),
//           onPressed: (){
//             Navigator.push(context,new  MaterialPageRoute(
//               builder:(context) =>new SecondScreen())
//             );
//           },
//         )
//       )
//     );
//   }
// }

// class SecondScreen extends StatelessWidget{
//   @override
//   Widget build(BuildContext context){
//     return Scaffold(
//       appBar:AppBar(title:Text('技术胖商品详情页')),
//       body:Center(child:RaisedButton(
//         child:RaisedButton(
//           child:Text('返回'),
//           onPressed: (){
//             Navigator.pop(context);
//           },
//         )
//       ))
//     );

//   }
// }

// 商品列表 跳转详情
// import 'package:flutter/material.dart';

// //传递的数据结构,也可以理解为对商品数据的抽象
// class Product{
//   final String title;  //商品标题
//   final String description;  //商品描述
//   Product(this.title,this.description);
// }

// void main(){
//   runApp(MaterialApp(
//     title:'数据传递案例',
//     home:ProductList(
//       products:List.generate(
//         20,
//         (i)=>Product('商品 $i','这是一个商品详情，编号为:$i')
//       ),
//     )
//   ));
// }

// class ProductList extends StatelessWidget{
//   final List<Product> products;
//   ProductList({Key key,@required this.products}):super(key:key);
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(title:Text('商品列表')),
//       body:ListView.builder(
//         itemCount:products.length,
//         itemBuilder: (context,index){
//           return ListTile(
//             title:Text(products[index].title),
//             onTap:(){
//               Navigator.push(
//                 context,
//                 MaterialPageRoute(
//                   builder:(context)=>new ProductDetail(product:products[index])
//                 )
//               );
//             }
//           );
//         },
//       )
//     );
//   }
// }

// class ProductDetail extends StatelessWidget {
//   final Product product;
//   ProductDetail({Key key ,@required this.product}):super(key:key);

//   @override
//   Widget build(BuildContext context) {
//     return new Scaffold(
//       appBar: AppBar(
//         title:Text('${product.title}'),
//       ),
//       body:Center(child: Text('${product.description}'),)
//     );
//   }
// }

// 页面跳转 回退 参数传递
// import 'package:flutter/material.dart';

// void main(){
//   runApp(MaterialApp(
//     title:'页面跳转返回数据',
//     home:FirstPage()
//   ));
// }

// class FirstPage extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar:AppBar(title:Text("找小姐姐要电话")),
//       body:Center(
//         child: RouteButton(),
//       )
//     );
//   }
// }

// //跳转的Button
// class RouteButton extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return RaisedButton(
//       onPressed:(){
//           _navigateToXiaoJieJie(context);
//       },
//       child: Text('去找小姐姐'),
//     );
//   }

//   _navigateToXiaoJieJie(BuildContext context) async{ //async是启用异步方法

//     final result = await Navigator.push(//等待
//       context,
//       MaterialPageRoute(builder: (context)=> XiaoJieJie())
//       );

//       Scaffold.of(context).showSnackBar(SnackBar(content:Text('$result')));
//   }
// }

// class XiaoJieJie extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar:AppBar(
//         title:Text('我是小姐姐')
//       ),
//       body:Center(
//         child:Column(
//           children: <Widget>[
//             RaisedButton(
//               child: Text('大长腿小姐姐'),
//               onPressed: (){
//                 Navigator.pop(context,'大长腿:1511008888');
//               },
//             ) ,
//             RaisedButton(
//               child: Text('小蛮腰小姐姐'),
//               onPressed: (){
//                 Navigator.pop(context,'小蛮腰:1511009999');
//               },
//             ) ,
//           ],
//         )
//       ) ,
//     );
//   }
// }
