# 我的个人链接页

一个超小的 Node.js 个人链接页，部署在 Infrlo 免费档上就能跑。不用数据库，不用绑卡。

## 本地运行

```bash
npm install
npm start
```

打开 http://localhost:5000

## 部署到 Infrlo

1. 把这个仓库推到你自己的 GitHub
2. Infrlo 控制台新建应用，选 Public Git URL，填这个仓库地址，分支 main
3. 构建命令：`npm install`
4. 运行命令：`npm start`
5. 环境变量：`PORT=5000`
6. 部署成功后打开分配的地址就能看到

## 改成你自己的

- 改 `public/index.html` 里的名字、简介和四个链接
- 头像那个字也在 `index.html` 里改

## 说明

- 访问人数存在内存里，应用重启后归零，演示用
- 端口读环境变量 `PORT`，不要写死，否则 Infrlo 上会报 Bad Gateway
