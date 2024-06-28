//배열의 복사
let arr1 = [1,2,3,4];
// 배열의 복사 [....복사하려는 배열의 이름]

let arr2 = arr1;
console.log(arr1);
console.log(arr2);
arr1[0] = 100;
console.log(arr1);
console.log(arr2);

//배열 요소의 복사
let arr3 = [...arr1];
console.log("배열요소의 복사 - 변경전========================")
console.log(arr1);
console.log(arr3);
arr1[1]= 200;
console.log("배열요소의 복사 - 변경후========================")
console.log(arr1);
console.log(arr3);
console.log("배열요소의 복사 - 복사와 동시에 요소 추가========================")
arr4 = [...arr1,5]; //복사와 동시에 요소 추가
console.log(arr4);
console.log("두 배열의 병합========================")
arr5 = [...arr1, ...arr3];  // 복사와 동시에 요소 추가
console.log(arr5);