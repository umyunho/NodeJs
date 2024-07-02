const express = require('express');
const path = require('path');

const app = express();
app.set('port',process.env.PORT || 3000); //process.env.PORT. 시스템 포트번호
//라우터:app.get() 또는 app.post()등...
//미들웨어 :라우터 안에 있는 익명함수
//req가 요청을 받아서 미들웨어를 실행하고, 그안에서 res로 응답

//1.req가 요청받은 url없이, 미들웨어만 실행하기 위한 리우터
//모든 라우터들이 실행되기 전 공통 코드가 실행되는 라우터 :app.use();
//보통 다른 라우터들의 위쪽에 작성
// 모든 라우터들이 실행되기전 실행의 대상으로 인식
//서버에서 각 url별로 해야할 일들 외에 공통으로 작업해야

app.use((req,res,next)=>{
    console.log('모든 요청에 실행됩니다.');
    //공통 실행 라우터를 포함 모든 라우터는 해당 미들웨어 실행후 종료
    // 다음 라우터로 이동하지 않는것이 평균
    //공통 실행 라우터는 자신도 실행되고 해당url의 라우터도 실행되게 하기위해, 매개변수에 next를 넣고,익명함수 끝에 next()함수를 호출하여 다음 코드들이 실행되게 이어준다.
    next();
    //모든 라우터에 next가 있지만 사용하지않아서 생략된 상태
    // url을 포함한 라우터를 다른곳으로 이동할 필요가 없어서 사용하지 않을뿬
    //필요하면 사용가능
    // next()가 없으면 현재 미들웨어 라우터에서 요청에 대한 응답이 종료되고 더이상 이동하지 않음
    // 공통 코드 미들웨어를 위한 라우터는 반드시 next()를 사용
});

//2. 특정 url에서만 실행할 동통 코드 라우터(이하 미들웨어)
app.use('/loginForm',(req,res,next)=>{
    console.log('loginForm요청에만 실행됩니다.');
    next();
});

//get과 post등 모든 method에서 리퀘스트 키워드만 같으면 실행
//실행 후 next()로 인해 제어권이 아래로 이동하여, 해당 get나 post등이 추가 실행
//----------------------



//3.에러가 발생했을떄 사용하는 미들웨어도 있다.
//     정상 라우터 또는 공통 미들웨어 실행중 에러가 발생했을때
// app.use((req,res,next)=>{
//     //throw new Error("서버-에러를 발생했습니다.");
//     // 현재 코드는 에러의 상세내용이 console창에도 나오고 브라우저 창에도 나온다ㅏ.
//     try {
//         throw new Error("서버-에러를 발생했습니다.");
//     } catch (err) {
//         console.error(err);
//         next(err);  //서버에서 받은 에러내용을 담고 next로 이동
//         //next가 err을 전달 인수로 가지면 에러처리 미들웨어로 이동하라는 뜻
//         //에러처리 라우터는 보통 현재 서버 프로그래밍의 가장 아래에 기술.
//     }
//     //브라우저에 에러내용을 나오지않게 하려면 1차적으로 try-catch를 이용하고
//     //두번째로 에러처리 라우터를 만들어서 사용
//});




app.get('/',(req,res, next)=>{
    res.sendFile(path.join(__dirname, '/index.html') );
});

app.get('/loginForm',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'/loginForm.html'));
});

// 4. 에러처리 라우터
app.use((err,req,res,next)=>{
    console.error(err);
    res.status(200).send('에러내용을 브라우저에 표출하지 않습니다.');
});

//5. 404 에러처리
// 위의 모든 라우터를 검색하다 해당 라우터가 없어서 현재 미들웨어를 만나면 404에러가 발생한것이므로, 이 미들웨어 맨 아래 또는 에러처리 라우터 바로 위에 위치시킨다.
app.use((req,res,next)=>{
    res.status(404).send('404 에러 발생');  //400과 500은 위험
})


app.listen(app.get('port'), ()=>{console.log(app.get('port'),"포트서버 오픈");});