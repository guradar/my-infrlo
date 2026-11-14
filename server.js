// 个人链接页后端：只干三件事——托管静态页面、返回服务器时间、计数访问人数
// 关键：端口必须读环境变量 PORT（Infrlo 要求应用监听 5000，写死端口会 Bad Gateway）
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

let visits = 0; // 存在内存里，应用重启后归零，演示用

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/time', (req, res) => {
  res.json({ time: new Date().toISOString() });
});

app.get('/api/visits', (req, res) => {
  visits += 1;
  res.json({ visits });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`server running at http://localhost:${PORT}`);
});
