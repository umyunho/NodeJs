//배열 자료를 반복실행을 이용하여 학생단위의 객체로 저장하고 다시 객체 배열로 구성하여 for문을 이용하여 학생별로 출력

const names = ['홍길동','홍길서','홍길남','홍길북'];
const kors = [99, 83, 84, 64];
const mats = [29, 63, 84, 44];
const engs = [79, 33, 44, 34];

const students = [];
//위 배열에 생성자로 생성된 학생객체를 요소로 추가하세요(반복문 이용)
function student( name, korean, math, english){
    this.name = name;
    this.kors = korean;
    this.math = math;
    this.eng = english;
}
// 배열에 요소를 추가하는 명령 : students.push(std);


//[{name:'홍길동',kor, math, eng},{},{},{}]

//let std1 = {};
//let std2 = {};
//let std3 = {};
//let std4 = {};

//std1.name = names[0];
//std2.name = names[1];
//std3.name = names[2];
//std4.name = names[3];

//std1.kor = kors[0];
//std2.kor = kors[1];
//std3.kor = kors[2];
//std4.kor = kors[3];

// let std1 = student(names[0], kors[0], math[0], engs[0]);
// let std2 = student(names[1], kors[1], math[1], engs[1]);
// let std3 = student(names[2], kors[2], math[2], engs[2]);
// let std4 = student(names[3], kors[3], math[3], engs[3]);

//students.push(std1);
//students.push(std2);
//students.push(std3);
//students.push(std4);

for( let i=0; i<names.length; i++){
    const std = new student(names[i], kors[i], mats[i], engs[i]);
    students.push(std);
}

for( std of students){
    console.log(std);
}