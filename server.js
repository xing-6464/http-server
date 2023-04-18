// 导入http模块
const http = require('http');
const fs = require('fs');
const url = require('url');

// 创建服务器
const server = http.createServer();

// 监听端口
server.listen(8081, () => {
  console.log('http://127.0.0.1:8081/');
});

server.on('request', (req, res) => {
  if (req.method === 'GET') {
    console.info(url.parse(req.url, true).query.id);
    if (req.url == '/') {
      fs.readFile('./index.html', 'utf-8', (err, data) => {
        res.write(data);
        res.end();
      });
    }
  }
});
