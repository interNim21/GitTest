<<<<<<< HEAD
function executeFn3() {
    // inputValue는 입력받은 값
=======


function executeFn3() {
    // start는 입력받은 값
>>>>>>> 36c35e14609741715d4740f35992e6d336098696
    const inputValue = Number(document.getElementById("input3").value);
    

    // 결과를 출력하기 위한 ul 요소를 들여와 저장함.
    const ul = document.getElementById("result3"); 
    ul.innerHTML = "";


    if (inputValue < 2 || inputValue > 9) {
<<<<<<< HEAD
        return alert("2~9 사이만 입력해주세요");
        //return; : 함수를 종료하고 호출한 곳으로 돌아간다
        // 함수 종료 정도로만 인식함
    }

    
    for(let num = 1; num <= 9; num++){
=======
        return alert("error");
    }

    
    for(let num = 2; num <= 9; num++){
>>>>>>> 36c35e14609741715d4740f35992e6d336098696

        ul.innerHTML += `<li>${inputValue} x ${num} = ${inputValue * num}</li>`;
        
        
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> 36c35e14609741715d4740f35992e6d336098696
