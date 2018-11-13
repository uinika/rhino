# Rhino

![logo](sources/assets/rhino.png)

## 开发环境（Development Environment）

```bash
➜  cd rhino
➜  npm install
➜  gulp
➜  Open browser with http://localhost:5001/dev/index.html
```

## 编译发布（Release & Build）

1. Update sources/index.html
   > Update base url for global ajax connection
2. gulp clean
   > remove all of thing within the build & release folder
3. gulp build
   > compile source code
4. gulp release
   > compress build folder to the release

## 技术栈（Technology Stack）

- [NodeJS 10.13.x](https://nodejs.org/)
- [Webpack 3.11.x](https://webpack.js.org/)
- [React 16.4s.x](https://facebook.github.io/react/)
- [Antd 3.6.x](https://ant.design/)
- [Mobx 4.3.x](https://mobx.js.org/)

## 接口定义风格（Restful Strict）

通过**URL**地址定位服务器提供的资源数据，并使用 HTTP 动词（GET、POST、DELETE、PUT）描述操作。

| HTTP 请求方式 | 操作语义 |  
| :------------ | :------- |
| `GET`         | _Query_  |
| `POST`        | _Save_   |
| `PUT`         | _Update_ |
| `DELETE`      | _Remove_ |

**GET**：`https://server.io/user/{{AGE}}`，获取年龄为`age`的用户。

**POST**：`https://server.io/user`，保存用户，用户信息通过 HTTP 协议的`payload`传递。

**PUT**：`https://server.io/user/{{NAME}}`，修改名字为`name`的用户。

**DELETE**：`https://server.io/user/{{ID}}`，删除标识为`ID`的用户。

## 前后端通信协议（Transfer Protocol）

前后端基于[CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)进行数据报文的传输。

### 头部（Head）

报文头部信息，携带每次 HTTPS 通讯状态相关的信息。

**status**：字符串类型，全部使用大写英文字母，用来表示服务器端状态代码。

- `SUCCESS`：Http response success.
- `WARNING`：Warning infomation.
- `TIMEOUT`：Login timeout.
- `BAD`：Bad request.
- `NONE`：No API founded.
- `NONSUPPORT`：Request method is not support.
- `UNSUPPORT`：Unsupported media type.
- `EXCEPTION`：Server-side exceptions.
- `RESUBMIT`: Resubmit HTTP request.

**token**：字符串类型，必选参数（_除首次登陆外_），权限密钥。

**message**: 字符串类型，必选参数，当前请求产生的服务器端信息。

**total**: 整型，可选参数，表达所请求数据在数据库当中的总条数，主要用于分页使用。

### 消息体（Body）

对象*Object*或者数组*Array*类型，用于存放真实可用的业务数据，可以为`null`值。

### 模拟数据（Mock Data）

```json
{
  "head": {
    "status": "SUCCESS",
    "message": "Your login has been successful!",
    "total": 1
  },
  "body": {
    "username": "admin",
    "password": "admin"
  }
}
```
