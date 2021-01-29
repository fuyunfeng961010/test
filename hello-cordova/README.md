## hello-cordova
`hello-cordova app`

## release包 数字签名加密 外壳更新
`更改 config.xml中的 version && version-time时间`

`cordova build android --release`

`name.keystore放置apk同目录`

`执行 jarsigner -verbose -keystore name.keystore -signedjar insp-app.apk android-armv7-debug.apk name.keystore -tsa http://sha256timestamp.ws.symantec.com/sha256/timestamp`

`密码：02200059`

`得到最终的insp-app.apk`

## 安装指定的apk
`adb install platforms/android/app/build/outputs/apk/debug/app-debug.apk`

## 下载 Android 设备上的 SQLite 文件
`adb shell "run-as gds.insp.pda chmod 666 /data/data/gds.insp.pda/databases/insp.db"`

`adb exec-out run-as gds.insp.pda cat databases/insp.db > newinsp.db`

## 打包下载资源连接超时或失败
`切换maven数据源  "https://maven.aliyun.com/repository/google"`

## cordova-android 高版本 连接本地ip调试 cleartext not permltted
`只需将此行添加到platform / android / app / src / main / AndroidManifest.xml文件`
`<application android:hardwareAccelerated="true" android:icon="@mipmap/ic_launcher" android:label="@string/app_name" android:supportsRtl="true" android:usesCleartextTraffic="true">`