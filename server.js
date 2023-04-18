// 导入http模块
const http = require('http');

// 创建服务器
const server = http.createServer();

// 监听端口
server.listen(8080, () => {
  console.log('http://127.0.0.1:8080/');
});
