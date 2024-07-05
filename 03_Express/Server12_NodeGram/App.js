const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const dotenv = require('dotenv');

const app = express();
app.set( 'port', process.env.PORT || 3000 );

app.use('/', express.static(path.join(__dirname, 'public'))); // 일반 static 폴더 설정
app.use('/img', express.static(path.join(__dirname, 'uploads')));  // upload 용 static 설정
app.use(express.json());  
app.use(express.urlencoded({ extended: false })); 

dotenv.config(); 
app.use( cookieParser( process.env.COOKIE_SECRET ) );  
app.use(
    session(
        {   
            resave: false,
            saveUninitialized: false,
            secret: process.env.COOKIE_SECRET ,
            cookie: {     // session-cookie 설정    
                httpOnly: true,
                secure: false,
            },
        }
    )
); 

const indexRouter = require('./Routers');
const userRouter = require('./Routers/user');
const feedRouter = require('./Routers/feed');

app.use('/',indexRouter);
app.use('/user',userRouter);
app.use('/feed',feedRouter);

app.use((req,res,next)=>{
    const err = new Error( `${req.method}-${req.url}-라우터가 존재하지 않습니다.`);
    err.status = 404;
    next(err);
});
app.use((err,req,res,next)=>{
    let message = err.message;
    res.status(err.status);
    console.log(message);
    res.send('에러에요')
});



app.listen(app.get('port'), ()=>{console.log(app.get('port'),"포트서버 오픈");});