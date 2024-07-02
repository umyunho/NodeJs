//서버 프로그래밍의 시작
//서버 운영을 위ㅣ해서 express모듈을 omport해서 express객체 변수에 저장
const express = require('express');
const app = express();//express()함수를 이용해서 서버운영 관련 객체를 변수에 저장
//익스프레스 서버는 이것만으로도 http서버의 createServer과 같은 동작이 실행

app.set('port',3000);
//app.set();:서버객체의 필드변수를 추가해서 사용할 수 있다.
//추가된 변수는 현재파일에서만 사용이되고, 서버 종료시 소멸
console.log(app.get('port'));

app.get('/',(req,res)=>{
    res.send('<h1>Hello Express~!!</h1>');
});

app.get('/about',(req,res)=>{
    res.send('<h1>Here id About Page~!!</h1>');
});

app.listen(3000, ()=>{console.log("3000포트 서버오픈...");});

// express 서버 구동 순서---
//1. npm init
//2. npm i express
// 3. npm i nodemon: 개발환경용 이므로 필수 사항은 아닙니다
// 4. app.js 또는 index.js 또는 main에 지정한 파일(서버의 시작파일)을 제작합니다
// 5. package.json의 scripts 에 "start":"nodemon app" 를 추가합니다.
// 6. npm app 또는 npm run start(npm start)로 서버를 시작합니다.
//nodemon을 사용하면 좋은점-
//1. 서버구동 및 운용에 발생한 모든 과정을 로깅으로 보여줍니다.
//2. 메러수정이 용이합니다
// 3. 일정시간이 지나거나 주요파일이 저장되면 서버가 다시 시작되므로 수정사항이 서버 수동 재시작없이 적용이 가능합니다