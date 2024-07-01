const path = require('path');
//require로 사용하는 객체들 중에는 별도의 install과정이 필요한 경우가있다.
//path.js는 외부모듈이여서 별도의 설치과정이 예정에 필요했으니, 자바스클비트와 node.js의버전업에 따라 지금은 별도 설치과정없이 require가 가능해짐

//path가 아니어도 사용 가능한 경로와 파일 관련 상수
console.log(__filename);    //현재 사용중인 파일의 이름
console.log(__dirname);     //현재 파일이 위치한 경로

console.log();
console.log('-----------------------');
console.log('path.sep:', path.sep); //경로 내부의 폴더들 구분무자

console.log('path.delimiter:', path.delimiter);
//서로 다른 경로를 같이 나타낼때 구분해주는 구분문자 - 세미콜론';'
// c:\users\java01; 와 같이 사용

console.log();
console.log('--------------------------------');
//파일이 위치한 폴더 경로를 보여줍니다.
console.log('paht.dirname():',path.dirname(__filename));
//파일의 확장자(.js)를 보여줍니다.
console.log('path.extname():', path.extname(__filename));
//파일의 이름+확장자를 보여줍니다.
console.log('path.basename():', path.basename(__filename));
//파일의 이름만 보고싶다면, 함수의 두번쨰 인자로 확장자('.js')를 넣어줍니다.
console.log('path.basename(extname제외):', path.basename(__filename, path.extname(__filename)));

let a = path.dirname(__filename)
    +'\\'   //string 데이터 내부에서 \는 두개를 써야 하나로 인식. 하나만 쓰면 \n,\t등으로 이용하겠다는 의미
    +path.basename(__filename, path.extname(__filename))
    +path.extname(__filename);

console.log("__filename :", a);
console.log("__filename :", __filename);





console.log();
//---------------------------------------
//파일의 경로를 root, dir, base, ext, name으로 분리
console.log('path.parse() :', path.parse(__filename));
// 분리된 결과를 root, dir, base, ext, name라는 필드로 객체를 구성

// 파일의 이름, 경로, 확장자 등으 ㄹ제공하고 filename에 저장된 정보처럼 조합
let filename2 = path.format(
    {
        dir:'D:\\JAVA01\\Nodejs\\03_HttpServer\\04_FileRead',
        name: 'path-formatex',
        ext:'.js',
    }
);
console.log(filename2);

console.log("------------------------------------");
console.log(path.relative('D:\\JAVA\\nodejs', 'D:\\PLSQL'));    //첫째 인수와 둘째 인수 사이의 상대경로 내역

console.log(__dirname);
 //첫째 인수에서 이동되고 찾아간 최종 경로
console.log('path.join():',path.join(__dirname, '..', '..', '..', '/nodejs') );  
console.log('path.resolve():', path.resolve(__dirname, '..', '..', '..', '/nodejs'));
//resolve와 join은 비슷하지만 '/' 표시를 절대경로나 상대경로로 보느냐가 다르다.
//resolve는 절대경로로 보기때문에 D:\\JAVA\\nodejs부터 시작하여 이동하지 못하는 경로는 무시
//join은 역시 이동하지 못하는 곳은 무시하고, 최종 결과 경로가 C:\Users\hi\nodejs가된다.