# package 组件

```javascript
// 引入package组件
var package = __package__;
// 引用..\topjs\bin\topjslib下的其他组件 / 插件 / 模块 ......
var _ = package.import('lodash');

// 脚本内，添加临时引用路径，使得"package.import()"不受限
package.addLibraryPath()；
// 脚本内，重置TOPJS的引用路径
package.setLibraryPath('F:/testing,E:/'); // 可批量
// 脚本内，引用路径的查看
package.libraryPaths();
```



# process组件

```js
// 引入process组件
var package = __package__;
var process = package.import('process');

// 全局目录
process.gc();
process.pid(); // 运行端口
process.argv()； // 用于系统传参，且以list形式存储参数
// 脚本内，重置TOPJS的引用路径
process.appBinDir(); // 全局配置文件路径
process.execFileDir(); // 脚本路径
process.execFileName(); // 脚本名称
process.execFileBaseName(); // 脚本名称前缀
```



 # sys组件
 ```javascript
 // 

 ```