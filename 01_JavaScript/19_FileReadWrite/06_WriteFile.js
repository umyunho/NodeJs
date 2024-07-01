//06_WriteFile.js

const fs = require('fs');

fs.writeFile(
    './writeMe.txt',    //쓰려는 파일이름
    '텍스트가 작성됐습니다.',   //작성하려는 내용
    (err)=>{console.error(err);}    //에러 발생시 처리할 익명함수
)