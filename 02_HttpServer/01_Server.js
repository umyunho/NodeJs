//Node.js에 포함된 함수, 기능과 문법을 이용해서 웹호스팅을 할 수 있는 서버를 구축
//Node가 제공하는 라이브러리중 서버 구축에 필요한 기능과 함수를 담고 있는 http모듈(객체)을 require
const { error } = require('console');
const http=require('http');
//http모듈의 내용을 불러와서 http라는 변수에 저장하여 사용
// 객체 형식으로 불러와서 저장한 형태로 http.함수이름(), http.변수이름 처럼 사용

//http.createServer((request, response)=>{});
//createServer함수:node.js 자바스크립트로 만든 http서버가 설정&실행되게 하는 함수
//(request,response)=>{}: 서버에 클라이언트가 요청이 있을때 실행할 명령들이 들어간다.

//서버생성
const server01 = http.createServer((req,res)=>{
    //req는 요청을 받고, res는 응답을 보냄
    //req에 클라이언트로부터 요청이 들어오면 res로 응답
    res.write('<h1>Hellow Node Server!!</h1>');
    res.end('<h2>Wellcome to My Node Server!!</h2>');
});

//서버오픈
// server01.listen(3000,()=>{console.log('3000포트에서 서버가 오픈되었습니다.');});
//3000은 포트번호, 익명함수는 서버오픈과 동시에 실행할 명령들이 들어갑니다.
//서버 변수를 사용하지 않는 간단 표현 예시 : http.createServer((req,res)=>{}).listen();

server01.listen(3000);
server01.on('listening',()=>{console.log('3000포트에서 서버 시작');});
server01.on('error',(error)=>{console.error(error);});


const server02 = http.createServer((req,res)=>{
    //req는 요청을 받고, res는 응답을 보냄
    //req에 클라이언트로부터 요청이 들어오면 res로 응답
    res.write('<h1>Hellow Node Server 02!!</h1>');
    res.end('<h2>Wellcome to My Node Server02!!</h2>');
});
server02.listen(3001,()=>{console.log('3001포트에서 서버가 오픈되었습니다.');});
