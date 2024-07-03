const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');

const app = express();
app.set('port', process.env.PORT||3000);

app.use('/', express.static(path.join(__dirname,'public')));    //일반 static
app.use('/img', express.static(path.join(__dirname,'uploads')));    //업로드용 static

app.use(express.json());
app.use(express.urlencoded({extended:false}));
dotenv.config();
//쿠키와 세션
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
    session(
        {
            resave:false,
            saveUninitialized:false,
            secret:process.env.COOKIE_SECRET,
            cookie:{
                httpOnly:true,
                secure:false,
            },
        }
    )
);

const indexRouter = require('./Routers/index');
const membersRouter = require('./Routers/members');
const boardsRouter = require('./Routers/boards');

app.use('/',indexRouter);
app.use('/members',membersRouter);
app.use('/boards', boardsRouter);



//에러라우터
app.use((req,res,next)=>{
    console.log(404);
    res.send('404 에러입니다.');
});
app.use((err,req,res,next)=>{
    //res.send('서버 에러입니다.');
    console.error(err);
});


app.listen(app.get('port'), ()=>{console.log(app.get('port'),"포트서버 오픈");});

