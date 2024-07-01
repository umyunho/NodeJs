//promise를 이용한 비동기 실행에서 두 작업의 실행 순서를 맞춰야할때

let pm = new Promise((resolve, reject)=>{
    console.log('== 작업 시작==');
    resolve();
});
pm
.then(()=>{
    console.log('작업1 시작');
    const wakeUpTime = Date.now() + 3000;
    while (Date.now() < wakeUpTime){}
    console.log('작업1 종료');
    // 첫번째 then에서 작업2를 위한 새로운 Promise를 리턴
    return new Promise((resolve, reject)=>{
        resolve();
    });
    // 이는 체이닝 방식으로 새로운 then을 이어서 사용할 수 있게해준다.
})
.then(()=>{
    console.log("작업2 시작");
    console.log("작업2 종료");
})
.catch((error)=>{
    console.error(error);
})
.finally(()=>{
    console.log('==작업 종료==');
});