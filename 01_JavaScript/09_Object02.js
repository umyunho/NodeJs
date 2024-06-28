// 객체와 string 자료의 변수&함수 이름 활용
let sayNode = ()=>{
    console.log('Node');
}
let myName = 'NodeJs';

let myobj = {
    // 이름이 myName인 멤버변수를 만들고, 그 값으로 'node.js'라는 string값을 저장하려고함
    //myName:'Nodejs',
    // myName:myName,       // 값이 쓰일 위치에 동일한 값을 갖고있는 변수 이름을 사용
    //멤버변수의 이름과 대이ㅣㅂ할 값을 갖고 있는 변수이름이 같다면
    myName,
    // 위와 같이 한번만 사용해도 myName:myName, 이렇게 사용한 것으로  인식
    //  sayNode : ()=>{
    //     console.log('Node');
    //  }
    
    //sayNode : sayNode,
    sayNode,

};   // 위에 선언한 myName값이 함수 내부의 동일한 이름의 변수에 대입되는것
console.log("멤버변수 myName 값 : ", myobj.myName);
console.log("멤버변수 myNode 값 : ", myobj.sayNode);
myobj.sayNode();

const obj2 = {myName, sayNode};

console.log("---------------------------------------");
// obj3객체를 만들고 es6이라는 멤버변수를 만들고, 'fantastic'라는 값을 저장하려고 한다면
const obj3 = {};
//obj3.es6 = 'fantastic';
//obj3[`es6']= 'fantastic';
let v = 'ES';
obj3[v+'6'] = 'Fantastic';
console.log("멤버변수 ES6 값 : ", obj3.ES6);

// 위 내용을 모두 종합한 객체 생성
const newObj = {
    myName,
    sayJS : ()=>{console.log('JS');},
    sayNode,
    [v+6]: 'Fanstastic',
};
console.log(newObj.myName); //myName
newObj.sayNode(); //Node
newObj.sayJS(); //JS
console.log(newObj.ES6); //Fantastic






