
//break 확인
function check1() {
    // 1부터 10까지 1씩 증가하다가 5가 되면 멈춤

    for(let i = 1; i <= 10; i++) {
        console.log("i :", i);

        if(i === 5) break;
        
    }
}

// 무한 반복하는 while문 멈추기
function check2() {

    let i = 1;
    // 10 초과 시 멈춤
    while(true) {
        // true 일 때 반복 수행하는 코드 작성
        console.log("i :", i++);

        if(i > 10) break; // 가장 가까운 반복문을 종료한다.
    }
}

//countinue 확인하기
function check3() {
    
    // 1부터 20까지 출려, 단 3의 배수는 건너뛴다.
    for(let i = 1; i <= 20; i++) {
    
        // 3의 배수인 경우
        if(i % 3 === 0) continue; 

        // 3의 배수인 경우 이 아래 코드는 실행하지 않는다.
        console.log("i :", i);

    }
}

//  1부터 30까지 1씩 증가 출력
//  단, 홀수 또는 10의 배수는 건너뛰기

function check4() {

    for(let i = 1; i <= 30; i++) {
        if(i % 10 === 0) continue;
        if(i % 2 == 1) continue;

        console.log("i : ",i);
    }

}


// 0~9까지 5줄 출력
// - 각 줄에서 4의 배수는 건너뛰기
// - 3번쨰 줄 출력 후 멈추기



function check5() {
    for(let i = 0; i <= 5; i++) {

        let str = "";
        for(let j = 0; j < 10; j++) {

            // 0을 제외한 4의 배수인 경우
            if(j != 0 && j % 4 == 0) continue;
            str += j;
        }
        console.log(str);

        //3번째 줄 출력후 멈춤
        if(i == 3) break;
    }
}


const randomNumber = Math.floor(Math.random()*100);
const count

function startGame() {
    if(var i = randomNumber) {

        
    }

    
}

