const express = require('express');
const router = express.Router();
//App.js를 통해서 req가 전달되어 오고있기 때문에 app.get()등으 ㄹ쓸일이 없다.
//const app = rxpress(); X
//App.js와 연결되기 위해 라우터 기능(router)은 이용

//app.get();
//app.post();

router.get('/',(req,res)=>{
    res.send("<h1>Hello, Express router - index - '/'</h1>");
});

router.get('/about',(req,res)=>{
    res.send("<h1>Hello, Express router - index - '/about'</h1>");
});

module.exports = router;

