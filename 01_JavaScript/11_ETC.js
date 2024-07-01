// 배열의 복사
let arr1 = [1,2,3,4];

// 참조값의 복사
let arr2 = arr1;
console.log("참조값의 복사 - 변경전-------------------");
console.log(arr1);
console.log(arr2);
arr1[0] = 100; 
console.log("참조값의 복사 - 변경후-------------------");
console.log(arr1);
console.log(arr2);

// 배열 요소의 복사
let arr3 = [... arr1];
console.log("배열요소의 복사 - 변경전-------------------");
console.log(arr1);
console.log(arr3);
arr1[1] = 200;
console.log("배열요소의 복사 - 변경후-------------------");
console.log(arr1);
console.log(arr3);

console.log("배열요소의 복사 - 복사와 동시에 요소 추가-------------------");
arr4 = [...arr1, 5]; // 복사와 동시에 요소 추가
console.log(arr4);
console.log("두 배열의 병합------------------------------")
arr5 = [...arr1, ...arr3]; 
console.log(arr5);


console.log("\n--------------------------------------");
/*
// 배열과 객체의 구조분해

// 배열의 구조분해
let arr6 = [];
arr6.push("abcd");
arr6.push(100);
arr6.push({'a':200});

let arr7 = [0, 1,2,3];
let zero,one,two,three,four,five;
// zero = arr7[0];
// one = arr7[1];
// two = arr7[2];
// three = arr7[3];

// 갯수를 조절해 분해할당 하고싶지않은 값 조절가능
// [zero, one,two] = arr7;

//  다수의 요소의 배열에서 중가에 일부를 제외할때
// [zero, , ,three] = arr7;

// 배열요소 갯수보다 변수의갯수가 많으면 undefined
[zero, one,two,three,four,five] = arr7;
// console.log(zero, one,two,three,four,five);

// 2차원, 3차원의 복잡한 배열의 구조분해
let arr8 = [0, 1, 2, [300,400]];
// 형태를막춰 구조분해연산 실행
[zero, one,two,[three, four]] = arr8;
console.log(zero, one,two,three,four);
*/

// 객체의 구조분해
let obj = {one:1, nine:9};
// 객체의 구조분해는 구조분해와 동시에 변수 생성하며 실행하는것이 보통
let {one, nine} = obj;
console.log(one, nine);
// 필드명을 이용해 구조분해가능, 이름이 맞지않으면 undefined
let {a1, a2} = obj;
console.log(a1, a2);


// 이미 정의 되어있는 변수로 구조분해를 한다면 괄호로 묶어서 실행
let three, four;
let obj1 = {three:3, four:4};
// {three, four} = obj1 // 에러 : 이미 생선된 변수로 구조분해하는 경우
({three, four} = obj1);// 객체를 별도의 변수에 저장하는 연산으로 '='이 쓰이는 것이 아니라 구조분해 하는것으로 인식되게 하기 위해 ()를 사용.
console.log(three,four);
console.log("\n--------------------------------------");

// 구조분해를 이용한 함수의 매개변수
function func4( {one, two, three}){
    console.log( one, two, three);
}

let obj2 = {one:1, two:2, three:3};
func4(obj2);

func4( { one:4, two:5, three:6});

console.log("\n--------------------------------------");

function func5(a){
    console.log(a.one, a.plus.two, a.plus.five);
}
let obj3 = {one:5, plus:{two:2, five:5}};
func5(obj3);



console.log("\n--------------------------------------");
// 구조분해 및 매개변수의 기본값(default value)

// 배열 구조분해 기본값
let [ ar1, ar2, ar3 = 5] = [1,2]; //구조분해 되는 변수에 기본값을 넣어서 전달값이 없어도 적용되게 함
//let [ ar1, ar2, ar3 = 5] = [1,2,]; // 이 경우 기본값 3은 지워지고 입력값 300이 ar3 변수에 대입

console.log( ar1, ar2,ar3);
//객체 구조분해 기본값
let{ob1,ob2=7}={ob1:6};

//let{ob1,ob2=7}={ob1:6, obj:700};  // 이 경우 기본값 7은 지워지고 입력값 700이 obj2변수에 대입
console.log(ob1,ob2);

console.log("\n--------------------------------------");

let funcEX = ( a= 100)=>{
    return a *20;
}
let result = funcEX();
console.log(`result : ${result}`);

//a 매개변수가 배열일떄의 기본값
let getTotal= ([one,two] = [10,20])=>(one + two);

//result = getTotal();
//console.log(`return Value : ${result}`);
console.log(`return Value : ${getTotal( )}`);
console.log(`return Value : ${getTotal([30,40] )}`);

//매개변수가 객체일때의 기본값
let getValue = ({two:value} = {two:200})=>(value*20)
console.log(`return Value : ${getValue({two:300})}`);
console.log(`return Value : ${getValue()}`);

console.log("\n-------------------------------------------------");

// 디스트럭처링 :  객체의 필드명을 문자열의 연산으로 조합하여 생성
let item = {
    ["one" + "two"]:12
};
console.log(`item객체의 멤버변수 one,two의 값 ${item.onetwo}`);

// item변수에 앞서 저장한 객체를 지우고 "tennis"라는 string데이터를 저장
item = "tennis";

let sports = {
    [item]:1,
    [item + "Game"]: "윔블던",
    [item + "Method"](){
        return this[item];
    }
};
console.log(`sports 객체의 멤버들 - tennis:${sports.tennis} tennisGame:${sports.tennisGame} tennisMethod:${sports.tennisMethod()}`);

console.log("\n-------------------------------------------------");

//내장된 객체 : Number객체
// 표현 가능한 양의 정수 max값
console.log("1. 표현가능한 양의 정수 max값 : ", Number.MAX_SAFE_INTEGER);
console.log("2. Math.pow(2,53) -1:", Math.pow(2,53)-1);
//Math.pow(a,b) : a의 b승

// -9007199254740991
console.log("3. 표현가능한 음의 정수 min값 :", Number.MIN_SAFE_INTEGER);
console.log(" 4. -(Math.pow(2,53)-1 : ", -(Math.pow(2,53)-1));

console.log("\n-------------------------------------------------");
// Numnber 객체에서 사용할 함수(메서드)
// 대상 데이터가 정수인지 아닌지를 판별
// "Number.isInteger() 함수의 사용" 
let v = 0;
console.log("1. 0 :", Number.isInteger(v));
console.log("2. 1.0 :", Number.isInteger(1.0)); // 소수점 아래가 0이기떄문에 정수로 인식
console.log("3. -123 :", Number.isInteger(-123));
console.log("4. '12' :", Number.isInteger("12")); //false
console.log("5. 1.02 :", Number.isInteger(1.02));//false
console.log("6. Nan :", Number.isInteger(NaN));//false
console.log("7. true :", Number.isInteger(true));//false
//  변수에 저장된 자료의 자료형을 알 수 있는 함수 typeof가 있지만 이는 자료형을 리턴해줄 뿐, 필요에 의해 숫자인지 아닌지를 구분까지 하지는 못해서, 숫자가 반드시 필요한 경우의 구분을  Number.isInteger로 구분.


console.log("\n-------------------------------------------------");


//string 데이터와 number 데이터와의 관계
// 자바에서 'A' -> integer로 형변환하면 (int)'A' ->65 (int)'B'->66 (char)67->'C'
//#$%&
console.log("1:", String.fromCodePoint(35,36,37,38));   //#$%&
console.log("2:", String.fromCodePoint(65,66,67,68));   //ABCD
console.log("3:", String.fromCodePoint(97,98,99,100));  //abcd
console.log("4:", String.fromCodePoint(48,49,50,51));   //0123
console.log("5:", String.fromCharCode(0x31,0x32,0x33));    //16진수로 표현
console.log("5:", String.fromCharCode(44032,44033,44034,44035));    // 가각갂갃

console.log("\n-------------------------------------------------");

//startsWith : 대상 문자들이 지정한 글자로 시작하면 true 그렇지않으면 false
let target = "123가나다";
console.log("1:", target.startsWith(123));  //true
console.log("2:", target.startsWith("23"));  //false
console.log("3:", target.startsWith("가나",3));  //인덱스3부터 "가나"로 시작 true
console.log();

target = "123가나다";
console.log(target.endsWith("가나다")); //true
console.log(target.endsWith("가나")); //false
console.log(target.endsWith("가나",5)); //true 인덱스5(끝글자) 가(4)나(5)
console.log();
target = "123가나다라456";
console.log("1:", target.includes(2));      //true
console.log("2:", target.includes("가나"));      //true
console.log("3:", target.includes("12",5));      //false
