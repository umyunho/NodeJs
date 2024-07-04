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
// 쿠키와 세션
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
const membersRouter = require('./Routers/members');
const boardsRouter = require('./Routers/boards');

app.use('/', indexRouter);
app.use('/members', membersRouter);
app.use('/boards', boardsRouter);


// 에러라우터
// app.use((req, res, next) => {
//     console.log(req.url + " 404");
//     res.send('404 에러입니다');
// });
app.use((err, req, res, next) => {
    //res.send('서버 에러입니다');
    console.error(err);
});
app.listen(app.get('port'),()=>{console.log(app.get('port'), 'port Open'); });
