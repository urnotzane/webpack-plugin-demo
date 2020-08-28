# webpack-plugin-demo
webpack插件开发demo

## 步骤
- 创建一个类CommentsToEachJs；
- 重写CommentsToEachJs的apply方法；
- 在apply里根据webpack的钩子写入插件的主要功能。

## 文件
```
- dist                -> 打包后的文件
- plugins             -> webpack插件文件夹
  - comments-to-each-js.js
- src                 -> 被打包的代码
  - index.js
  - name.js
  - index.html
- webpack.config.js   -> webpack配置
```