// index(번호)를 사용하여 여러자료를 한곳에 모아 사용하는 자료구조

// 다양한 자료를 하나의 범주안에 넣고, 인덱싱(번호)를 이용해 컨트롤 하는 변수
let array = [273, 'string', true, function(){},{},[150,170]];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[5][0]);
console.log(array[5][1]);
console.log(array);
console.log('\n---------------------------------------------\n')


let a  = array[5]; //배열의 요소중 index 5번의 자료를 변수 a에 저장
let array2 =  array; //참조값의 복사
console.log('#1')

// 배열의 내용을 볼 수 있는 방법 #1
console.log(array)
console.log('#2')

// 배열의 내용을 볼 수 있는 방법 #2
var arr = ['a', 'b', 'c'];
for( let k in arr){
    console.log(`key : ${k}, \tarr[${k}] : ${arr[k]}`);
}
console.log("for명령 종료")

// k에는 배열의 index가 차례로 하나씩 저장되면서 반복실행이 실행된다.
console.log('\n---------------------------------------------\n')
console.log('#3')


// 배열의 내용을 볼 수 있는 방법 #3;
// arr.map(); //()안의 익명함수 하나 넣을껀데 그 익명함수를 배열의 요소들을 대상으로 한번씩 실행
// arr.map( function(){}); //익명함수가 배열의 요소갯수만큼 여러번 실행, 마치 반복 실행처럼
arr.map(function(value, idx){
    //value : 배열의 요소들이 한번씩 저장될 변수
    //index : 그 요소들의 첯ㅁ자
    console.log( `index:${idx}, value:${value}`);
});
console.log("map명령 종료")
console.log('\n---------------------------------------------\n')

arr.map((value, idx)=>{
    //value : 배열의 요소들이 한번씩 저장될 변수
    //index : 그 요소들의 첯ㅁ자
    console.log( `index:${idx}, value:${value}`);
});
console.log("map명령(화살표함수) 종료")

console.log('\n---------------------------------------------\n')
console.log('#4')
// 배열의 내용을 볼 수 있는 방법 #4
for(var i = 0; i<arr.length; i++){
    console.log(`index:${i}, value:${arr[i]}`);
}

console.log('#5---------------------------------------------\n')

for(let v of arr){
    console.log( `value:${v}`);
}

console.log('#6---------------------------------------------\n')
// of를 string 자료에 적용한 경우
for(const value of "ABC"){ //"A","B","C"가 각각 VALUE에 전달
    console.log(`value : ${value}`);

}