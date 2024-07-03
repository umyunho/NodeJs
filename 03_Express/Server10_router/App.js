const express = require('express');

const app = express();
app.set('port', process.env.PORT||3000);

//app.get('/',(req,res)=>{    res.sendFile("<h1>Router 학습</h1>");});
//외부에 생성되고 클라이언트의 요청에 응답할 수 있는 router들을 갖고 있는 파일을 require한다
const indexRouter= require('./Routers');
// 어느폴더에 있든 그 안의 index.js는 파일이름을 쓰지 않아도 index.js가 require된다.

app.use('/',indexRouter);
// 요청 ->http://localhost:3000/
// indexRouter내의 router.get('/',(req,res)=>{})와 연결
// 요청 ->http://localhost:3000/about
// indexRouter내의 router.get('/about',(req,res)=>{})와 연결

const userRouter = require('./Routers/user');
app.use('/user', userRouter);
// 요청 ->http://localhost:3000/user
// userRouter내의 '/'와 연결
// 요청 ->http://localhost:3000/user/search
// userRouter내의 '/search'와 연결



app.listen(app.get('port'), ()=>{console.log(app.get('port'),"포트서버 오픈");});