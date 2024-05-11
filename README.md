## 知了-高仿知乎专栏
> 使用 Typescript + Vue3 开发

完美的Vue实践项目是怎么样的？
- 数据的展示一最好是有多级复杂数据的展示
- 数据的创建 - 可以发散出多个功能
- 组件的抽象一循序渐进的组件开发
- 整体状态数据结构的设计和实现
- 权限管理和控制
- 真实的后端API

[原型图](https://whimsical.com/Djb2TcWsLTPeapFdM3NaX)

### 知识点
Typescript

- 简单类型
- 复杂类型
- 接口-Interface
- 类 - Class
- 泛型 - Generics
- 声明文件

Vue3
- Ref 和 Reactive
- watch 和 computed
- 生命周期
- 自定义函数 Hooks
- Teleport 和 Suspense
- 全局 API 修改
- 复杂组件设计和实现

Vue Router
- 基本用法
- 动态路由匹配
- 导航守卫
- 路由元信息

Vuex
- 基本概念
- State
- Getter
- Mutation
- Action
- 中大型Store 结构设计与实现

前后端结合
- Axios 基础和用法
- swagger 在线调试异步请求
- JSON web token 实现权限验证
- axios 拦截器实现全局处理
- 前端缓存设计与实现
- 文件上传原理和组件实现

项目部署
- 生产环境概念
- 构建代码
- 部署到云主机
- 使用脚本自动部署

更多内容
- Bootstrap 基础和用法
- Vue cli 用法
- Restful API 设计理念

样式库：
- [Bootstrap](https://v5.getbootstrap.com) 
- [Tailwind CSS](https://tailwindcss.com)
- [Foundation](https://get.foundation/develop/getting-started.html)

开发流程：
将UI划分出组件的层级
创建应用的静态版本
[原型图](https://whimsical.com/Djb2TcWsLTPeapFdM3NaX)

CloimnList组件使用Bootstrap美化
1. 引入 Bootstrap
```
// bootstrap打包后提供的最小样式文件、方便使用其一系列class
import 'bootstrap/dist/css/bootstrap.min.css'
```

2. 创建 Row 和 Col
使用 Bootstrap 的 Row 和 Col 组件来创建布局。Row 用于包裹 Col，Col(12)用于定义网格系统中的列。

查阅文档 [Grid](https://getbootstrap.com/docs/5.3/layout/grid/)
```
<div class="container">
  <div class="row">
    <div class="col">
    </div>
  </div>
</div>
```

3. Card
[查阅文档](https://getbootstrap.com/docs/5.3/components/card/)
```
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```

4. Global Header
两个状态：登录前 & 后
[原型图](https://whimsical.com/Djb2TcWsLTPeapFdM3NaX)
[组件描述](https://carbon.now.sh/WSs1tRbX6fgdNJrhkGyi)
使用[Navbar](https://getbootstrap.com/docs/5.3/components/navbar/)
