// /05_Readme_promise.js

//파일 입출력을 위한 모듈의 promise를 포함하여 로딩
const fs = require('fs').promises;
// fs의 readFile 함수 안에 Promise객체를 리턴하는 기능이 담겨있는걸 이용
console.log('파일 리딩 시작');
const pm = fs.readFile('./Readme.txt');
pm
.then((data)=>{
    console.log(data.toString());
})
.catch((err)=>{
    console.error(err);
})
.finally(()=>{});
console.log('파일 리딩 종료')

// fs.readFile('./Readme.txt')
// .then()
// .catch()
// .finally();

//readFile함수를 동기식으로 전환하여 호출 실행
async function abcd(){
    try{
    console.log('파일리딩 시작2');
    const result = await fs.readFile('./Readme.txt');
    console.log(result.toString());
    console.log('파일리딩 종료2');
    }catch(err){
        console.error(err);
    }
}
abcd();

