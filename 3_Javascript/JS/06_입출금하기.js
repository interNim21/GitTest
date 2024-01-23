//prompt: 사용해보기
function test() {
    const password = prompt("비밀번호를 입력해주세요.");

    // 확인 -> 입력한 문자열
    // 취소 -> null

    if(password == null) {
        alert("취소");
    } else {
        
        if(password == "1234") {
            alert("비밀번호 일치.");
        } else {
            alert("비밀번호 불일치.");
        }
    }
}

const output = document.getElementById("output");
const amount = document.getElementById("amount");

let balance = 10000;
const password = "1234";

output.inertText = balance;



function deposit() {
    if(amount.ariaValueMax.length == 0) { 
        alert("금액을 입력해주세요.");  
    } else {    
        balance += Number(amount.value);
        // balance = balance + Number(amount.value);
        output.innerText = balance;
        
        amount.value = "";

        
    }
        
}


    function withdrawal() {
        if(amount.value.length == 0) {
            alert("금액을 입력해주세요.");
       
        } else {
            const password = prompt("비밀번호를 입력해주세요.");
            if(password == null) {
                alert("취소");
            } else {
                // 비밀번호가 불일치   
                if(password != "1234") {
                    alert("비밀번호 불일치");
                } else { //비밀번호가 일치할 경우
                    const money = Number(amount.value);

                    //출금할 금액이 잔액보다 큰 경우
                    if(monet > balance) {
                        alert("출금 금액이 잔액보다 클 수 없습니다")
                        
                    } else { // 출금할 금액이 잔액보다 작거나 같은 경우
                        //balance = balance - money;
                        balance -= money;
                        output.innerText = balance;
                        amount.value = ""; //input에 작성된 값 없애기

                        alert(`${money}원이 출금 되었습니다. 잔액 : ${balance}원`)
                   
                }
        
            }
        }
    }
}
