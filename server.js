// 导入http模块
const http = require('http');

// 创建服务器
const server = http.createServer();

// 监听端口
server.listen(8081, () => {
  console.log('http://127.0.0.1:8081/');
});

server.on('request', (req, res) => {
  console.info('555');

  res.setHeader('Content-Type', 'text/plain;charset=utf8');
  res.write('你好');
  res.end();
});
