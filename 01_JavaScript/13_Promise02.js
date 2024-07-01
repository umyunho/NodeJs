//Promise의 다른 실행 형태

let condition = true;

function callPromise(){
    const pm = new Promise(
        (resolve, reject)=>{
            //이곳에 파일 입출력 명령 또는 네트워크 송수신 명령이 기술
            if(condition){
                console.log("1:resolve");
                resolve('값1');
            }else{
                console.log("2:reject");
                reject();
            }
        }
    );
    return pm;
}

//let pm = callPromise();
//pm.then().catch().finally();

callPromise()
.then(()=>{
    console.log("3.성공");
})
.catch(()=>{
    console.log("4.실패");
})
.finally(()=>{
    console.log("5.프로미스 종료");
});
console.log("6. 종료");




async function func(){
    try{
        let result = await callPromise()
        console.log("비동기 실행 결과:",result);
    }catch(err){ 
        console.log(err); //console.error()은 console.log()와 크게 차이는 없지만 에러 출력시 주로 사용됨
    }
}
func();
