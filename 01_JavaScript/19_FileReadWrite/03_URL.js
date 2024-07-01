const url = require('url');

const{URL}=url; //url객체에서 URL필드값(변수,함수,객체)만 구조분해를 통해 추출
const myURL = new URL('http://www.daum.net/book/bookList.adpx?sercate1=001001000#anchor');
console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));

console.log('---------------------');
const parseUrl = url.parse('http://www.daum.net/book/bookList.adpx?sercate1=001001000#anchor');
console.log('url.parse():', parseUrl);
console.log('urll.format():', url.format(parseUrl));
//인터넷 주소를 parse함수로 분해해서 각각의 요소들을 따로 분리하고 사용할 수 있다.
console.log(parseUrl.query);    //파싱된 주소에서 쿼리만 분리하여ㅕ 출력