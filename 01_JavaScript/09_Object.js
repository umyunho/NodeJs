//하나의 변수안에 여러속성(멤버변수) & 멤버 메서드들을 생성해놓고 객체지향 프로그래밍을 할 수 있다.
//{} 중괄호 안에 key(요소의 이름)와 value(요소의 값)이 ':'(콜른)으로 구분되어서 존재하는 값들의 집합
var objectVar = {a:10, b:20};
var product = { name:'냉장고', 제조사:'대한민국'};
var obj = {};

// 배열의 자료형
console.log("objectVar : ", typeof(objectVar));
console.log("product : ", typeof(product));
console.log("obj : ", typeof(obj));

console.log("{ a:10. b:20} : ", typeof({a:10,b:20}));
console.log("{ name:냉장고. 제조사:'대한민국'} : ", typeof({ name:'냉장고', 제조사:'대한민국'}));
console.log("{} : ", typeof({}));

// 객체의 값
console.log("objectVar.a : ", objectVar.a, " objectVar.b : ", objectVar.b);
console.log("product.name : ", product.name, "product.b :", product.제조사);
console.log("objectVar.a : ", objectVar['a'], " objectVar.b : ", objectVar['b']);
console.log("product['name'] : ", product['name'], "product['제조사'] :", product['제조사']);
console.log("------------------------------------");
//자바스크립트의 객체는 별도의 클래스 선언 없이, {}중괄호 안에 직접 속성(키:값)들으 넣는 순간 객체(object)로 인식되어 사용되어진ㄴ다. 값들의 자료형은 제한이 없으며, "객체안의 객체","객체안의 배열"등 모든 형태의 자료가 속성들로 구성 가능
var obj1 ={
    useNumber:273,
    useString:'문자열',
    useBoolean:true,
    useObject:{ a:'1', b:'2'},
    useArray:[1,2,3,4,5],
}

for( var k in obj1){
    console.log(`${k} : ${obj1[k]}`);
}