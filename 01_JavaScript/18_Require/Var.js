const odd = '홀수 입니다.' ;
const even = '짝수 입니다.';

//JSP의 include와 비슷한 구조를 구성
//자바가 있는 파일을 아무런 조치없니 include해서 사용하는 반면
// 자바스크립트는 현재파일에서 공유하고자 하는 변수나 함수를 export해서 외부에 공유한 후에, 다른 파일에서 사용 가능.

//module.exports = {odd:odd, even:even};
module.exports = {odd, even}; //값이 같으면 이름만 사용해도 가능

// 만들어진 객체를 modul.exports에 저장하면 그 객체는 외부로 내보내진다.
//딱히 어느 파일로내보낸다라는 방향은 없고,
//exports 되었다라는걸 알고 있는 파일에서 require해서 사용
// module라는 단위로,. 이름은 파일이름인 Var로 exports된다.