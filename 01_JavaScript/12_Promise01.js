//함수와 비슷한 기능으 갖고 있는 "객체"
//객체내에 익명함수 하나를 품고 있고,
//익명함수를 실행하고 결과를 보관하고 있따기.
//결과가 필요할떄 함수실행결과를 전달 받아 사용할 수 있게 해주는 구조의 객체
//비동기식 실행


//  promise 객체의 전달인수 없는 선어눔ㄴ.
//const pm = new Promise(/*익명함수*/);
//promise 객체는 생성자의 전달인수로 현재 promise객체의 기능을 갖는 익명함수를 전달하여야 생성됨.

// promise 객체 생성 예
const pm = new Promise( ( resolve, reject)=>{ });

let func = (resolve, reject)=>{}
const pm1 = new Promise(func);
// ----------------------------------객체 생성

// 매개변수 resolve 와 reject에는  함수가 전달되서 resolve(), reject() 형식으로 함수가 호출되는 명령이 작성
const pm2 = new Promise((resolve,reject)=>{
    resolve();
    // 또는 reject();
});
//resolve와 reject변수에 전달되는 함수는 promise객체가 자체적으로 전달
//-------------------------result와 resolve의 객체

// 익명함수 안에서 promise에 부여된 임무를 위한 코드들이 실행되면서 같이 resolve(), reject()가 선택 실행
const pm3 = new Promise((resolve, reject)=>{
    // 명령1, 명령2...
    if(/*조건 */ true /*or false*/){
        resolve();
    }else{
        reject();
    }
});
//----------------------------------------

// resolve()와 reject() 함수를 호출할떄, 이 promise객체를 사용할 지점에 전달인수를 전달 할 수 있다.
const pm4 = new Promise((resolve, reject)=>{
    // 명령1, 명령2...
    if(/*조건 */ true /*or false*/){
        resolve('성공');
    }else{
        reject('실패');
    }
});
// 위에 넣은 전달인수는 반드시 string데이터여야 하는것은 아니다. 어떤 유형의 데이터가 전달될 수 있다.
// 주로 promise결과를 사용할 고셍서 유용하게 사용할 데이터를 전달
// string, number,배열, 객체 등 모두 전달 가능

// promise 객체의 실행결과 활용(결과를 품고있는 객체를 필요에 의해 필요할때에 별도로 활용 가능)
//pm4.then();
//pm4.catch();
//pm4.then().catch();
pm4
.then( ()=>{} )
.catch( ()=>{} );
//resolve()가 호출되는 경우 then안의 익명함수가 실행되고,
//reject()가 호출되거나 pm에 오류가 있는 경우 catch안의 익명함수가 실행

pm4
.then( (message)=>{
    console.log(message);
} )
.catch( (message)=>{
    console.log(message);
} );
//resolve와 reject에 전달된 값들은 위의 message매개변수에 저장

console.log("---------------------------------");
let condition = true; //특정 상황을 만들기 위한 상태값.

const pm5 = new Promise( (resolve,reject)=>{
    if(condition){
        resolve("condition 값은 true입니다.");
    }else{
        reject("condition값은 false입니다.");
    }
});
//console.log("다른명령 or 딴짓");
//console.log("다른명령 or 딴짓");
//console.log("다른명령 or 딴짓");
//console.log("다른명령 or 딴짓");
//console.log("다른명령 or 딴짓");
pm5
.then((msg)=>{
    console.log(msg);
})
.catch((msg)=>{
    console.log(msg);
})
.finally(()=>{
    console.log('Promise가 종료되었씁니다.');
});

console.log("다른명령 or 딴짓");
console.log("다른명령 or 딴짓");
console.log("다른명령 or 딴짓");
console.log("다른명령 or 딴짓");
console.log("다른명령 or 딴짓");
console.log('프로그램이 종료됩니다.');








