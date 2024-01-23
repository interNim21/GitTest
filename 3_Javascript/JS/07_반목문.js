/*for(let num = 1; num <= 5; num++) {
    // 조건식이 true인 경우 반복 수행할 코드;
    console.log("통과!");
}*/

function check1() {
    let result = ""; //빈 문자열

    for(let num = 1; num <= 5; num++) {
        console.log(num);

        result += num;
        // result = result + num;
        //    "1" =    ""    + 1 (1턴)
        //   "12"   =   "1"  +  2 (2턴)
        //   "123"  =   "12" +  3  (3턴)
        //  "1234" =   "123" +  4 (4턴)
        //   "12345" = "123" + 5 (5턴)
        //                     6
    }
    console.log(result);

}

function check2() {
    // 1부터 10까지 1씩 증가하여 출력
    for(let num = 1; num <= 10; num++) {
        console.log(num);
    }
}

function check3() {
    // 1부터 20까지 1씩 증가하며 출력
    for(let num = 1; num <= 20; num++) {
        console.log(num);
    }
}

function check4() {
    // 5부터 15까지 1씩 증가하며 출력 
    for(let num = 5; num <= 15; num++) {
        console.log(num);
    }
}

function check5() {
    // 1부터 30까지 2씩 증가하며 출력
    for(let num = 1; num <= 30; num += 2) {
        console.log(num);
    }
}

function check6() {
    // 1부터 10까지 모든 정수의 합
    let sum = 0; // 합계를 저장하기 위한 변수
    for(let num = 1; num <= 10; num++) { // num 1 ~ 10 까지 변한다.
        console.log(num);
        sum += num;
    }

    console.log(sum);

}



// const number = document.getElementById("number");
// const result = document.getElementById("result");

// function sumFn(number) {
//     let sum = 0;
//     for(let num = 1; num <= number.value; num++) {
//         sum += num;
//     } 
//     console.log(sum);
// }


// function executeFn2() { 
//     const number = document.getElementById("number");
//     const result = document.getElementById("result");
//     let sum = 0;
//     for(let num = 1; num <= number.value; num++) {
//         sum += num;
//     }

//     result.innerText = sum;
//     console.log(sum);
// }

function sumFn() {
    // input에 작성된 값을 얻어와 저장함
    const start = Number(document.getElementById("inputNumber1-1").value);
    const end = Number(document.getElementById("inputNumber1-2").value);

    // 결과를 출력하기 위한 요소 얻어와 저장
    const result = document.getElementById("result");

    // 합계를 저장할 변수
    let sum = 0;

    // start부터 end 까지 1씩 증가하는 for 문
    for(let num = start; num <= end; num++){
        sum += num; //num 값을 sum 에 누적한다.


    }
    result.innerText = sum;
}

function executeFn2() {
    const start = Number(document.getElementById("inputNumber2-1").value);
    const end = Number(document.getElementById("inputNumber2-2").value);
    const val = Number(document.getElementById("inputNumber2-3").value);
    

    // 결과를 출력하기 위한 ul 요소 얻어와 저장
    const ul = document.getElementById("result2"); // ul 태그


    ul.innerHTML = ""; // 이전에 ul에 작성된 내용을 삭제함.
    // start 부터 end 까지 val 씩 증가한다.
    for(let num = start; num <= end; num += val){
        ul.innerHTML += `<li>${num}</li>`;
    }
}

// 요소.innerText = `<li>${num}</li>`;
// -> 요소의 내용으로 문자열을 대입
// -> HTML 태그를 해석하지 않고 문자열 그대로 복사함

// 요소.innerHTML = `<li>${num}</li>`;
// -> HTML 태그를 해석해서 화면에 태그의 본 기능대로 출력
    


