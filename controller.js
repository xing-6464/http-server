const fs = require('fs');

module.exports = {
  index(res) {
    fs.readFile('./index.html', 'utf-8', (err, data) => {
      res.write(data);
      res.end();
    });
  },

  user(postData, res) {
    console.info(postData);
  },
};
