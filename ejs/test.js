var server = require('http').createServer();
var fs= require('fs');
var url= require('url');
var ejs= require('ejs');
server.on('request', function(req, res){
  var path= url.parse(req.url).pathname;
  console.log('path='+ path);
  if(path== '/welcome'){
    var emps= {
      list: [
        {
          id:1,
          name:'aaa'
        }
        ,
        {
          id:2,
          name:'bbb'
        }
        ,
        {
          id:3,
          name:'ccc'
        }
        ,
        {
          id:4,
          name:'ddd'
        }
      ]
    }
    fs.readFile('test.ejs', 'utf-8', function(error, data){
      res.end(ejs.render(data, emps));
    });
  } else {
    res.end('ok');
  }
});

server.listen(3000);
