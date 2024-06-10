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

5. 高可用的下拉菜单组件
点击按钮

下拉菜单

[查阅文档](https://getbootstrap.com/docs/5.3/components/dropdowns/)

使用dropdownitem组件：状态

点击外部区域自动隐藏
1. 在mounted时候添加click事件，在unmounted的时候将事件删除
2. 拿到Dropdown的DOM元素从而判断，点击的内容是否被这个元素包含

### 前端设计
#### 表单
[原型图](https://whimsical.com/Djb2TcWsLTPeapFdM3NaX)

整个From会触发它下面每一项有验证规则的Item的验证流程，并根据问题显示出来。

某个事件可以触发：Blur

每一个可以有多个验证规则，称之为Rule
- 不为空
- 长度
- 大小
- 特殊格式

验证未通过
- 出现具体的警告

采用[Bootstrap表单案例](https://getbootstrap.com/docs/5.3/forms/overview/)
form-label：文本
form-text：（可选）帮助文本
```
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

支持v-model:
- 自定义组件
- 更新值时发送一个事件`context.emit('update:modelValue', targetValue)`
```
// vue2 自定义组件
<my-component v-model='val' />
<my-component :value='val' @input='val = arguments[0]' />

// 非同寻常的表单元素
<input type="checkbox" :checked='val' @change=''>

// vue3 compile 以后的结果
<my-component v-model='foo' />
h(Comp, {
  modelValue: foo,
  'onUpdate:modelValue': value => (foo = value)
})
```

输入框支持默认属性

[非Prop的Attribute](https://v2.cn.vuejs.org/v2/guide/components-props.html#%E9%9D%9E-Prop-%E7%9A%84-Attribute)
不希望继承：inheritAttrs: false

Validate组件需求分析

Form：语义化ValidateInput组件
[原型图](https://whimsical.com/Djb2TcWsLTPeapFdM3NaX)
某个事件可以触发
- Blur

每一个可以有多个验证规则，称之为Rule
- 不为空
- 长度
- 大小
- 特殊格式

验证未通过
- 出现具体的警告

[具名插槽](https://v2.cn.vuejs.org/v2/guide/components-slots.html#%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BD)

[处理边界情况-访问子组件实例或子元素](https://v2.cn.vuejs.org/v2/guide/components-edge-cases.html#%E8%AE%BF%E9%97%AE%E5%AD%90%E7%BB%84%E4%BB%B6%E5%AE%9E%E4%BE%8B%E6%88%96%E5%AD%90%E5%85%83%E7%B4%A0)

[程序化的事件侦听器](https://v2.cn.vuejs.org/v2/guide/components-edge-cases.html#%E7%A8%8B%E5%BA%8F%E5%8C%96%E7%9A%84%E4%BA%8B%E4%BB%B6%E4%BE%A6%E5%90%AC%E5%99%A8)

通过 `$on(eventName, eventHandler)` 侦听一个事件

通过 `$once(eventName, eventHandler)` 一次性侦听一个事件

通过 `$off(eventName, eventHandler)` 停止侦听一个事件

#### SPA(Single Page Application)应用

[History API](https://developer.mozilla.org/zh-CN/docs/Web/API/History)接口允许操作浏览器的曾经在标签页或者框架里访问的会话历史记录。

介绍：

一种WEB应用程序或网站

在和用户交互的时候当用户不会跳转到其他的页面

由JS实现URL变换和动态变换HTML的内容


优点:

速度快，第一次下载完成静态文件，跳转不需要再次下载

体验好，整个交互趋手无缝，更倾向于原生应用

为前后端分离提供了实践场所

VueJs官方路由管理器[Vue Router](https://router.vuejs.org/zh/)

路由需求：需要URL_id。[URL结构](https://nodejs.org/api/url.html#url_the_whatwg_url_api)
https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash

配置路由main.ts、动态路径绑定：以冒号开头
http://localhost:8080/column/12?search=123#foo

一对多：添加columnDetail页面


#### 状态管理工具：[Vuex](https://vuex.vuejs.org/zh/)
全局对象的弊端：

- 数据不是响应式的
- 数据修改无法追踪
- 不符合组件开发的原则

状态管理工具的基本原则：

- 一个类似 object 的全局数据结构一称之为 store
- 只能调用一些特殊的方法来实现数据修改

Vuex的核心是Store

store包含应用中大多数状态（State）

特点：
- 状态存储是响应式的
- 不能直接改变store中的状态，唯一途径就是显示地提交（commit）mutation

#### 添加新建文章页面
[原型图](https://whimsical.com/Djb2TcWsLTPeapFdM3NaX)

#### 导航守卫|Vue Router
```vue
router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !store.state.user.isLogin) {
    next({ name: 'login' })
  } else {
    next()
  }
})
```

#### 路由守卫-使用元信息完成权限管理
[路由元信息](router.vuejs.org/zh/guide/advanced/meta.html)

定义路由的时候可以配置`meta`字段

### 前后端分离开发

#### RESTful API 设计理念
HTTP 动词
- GET ( SELECT)：从服务器取出资源（一项或多项）
- POST (CREATE)：在服务器新建一个资源
- PUT ( UPDATE）：在服务器更新资源
- PATCH (UPDATE)：在服务器更新资源
- DELETE (DELETE)：从服务器删除资源

常见状态码

- `200 OK` - [GET]：服务器成功返回用户请求的数据 
- `201 CREATED` - [POST/PUT/PATCH]：用户新建或修改数据成功
- `204 NO CONTENT` - [DELETE]：用户删除数据成功
- `401 Unauthorized` - [*]：表示用户没有权限（令牌、用户名、密码错误）
- `403 Forbidden` - [*]：表示用户得到授权（与401错误相对），但是访问是被禁止的
- `404 NOT FOUND` - [*]：用户发出的请求针对的是不存在的记录，服务器没有进行操作

Endpoints

- `GET /columns`：列出所有专栏
- `GET /columns/:id`：列出某个专栏的信息
- `GET /columns/:id/posts`：列出某个专栏的所有文章
- `POST /columns/:id/posts`：在某个专栏创建文章（需要权限）
- `GET /posts/:id`：列出某个文章的信息
- `POST /users/login`：用户登录
- `GET /users/current`：获取当前用户登录信息（需要权限）