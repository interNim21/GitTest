function executeFn3() {
    // inputValue는 입력받은 값
    const inputValue = Number(document.getElementById("input3").value);
    

    // 결과를 출력하기 위한 ul 요소를 들여와 저장함.
    const ul = document.getElementById("result3"); 
    ul.innerHTML = "";


    if (inputValue < 2 || inputValue > 9) {
        return alert("2~9 사이만 입력해주세요");
        //return; : 함수를 종료하고 호출한 곳으로 돌아간다
        // 함수 종료 정도로만 인식함
    }

    
    for(let num = 1; num <= 9; num++){

        ul.innerHTML += `<li>${inputValue} x ${num} = ${inputValue * num}</li>`;
        
        
    }
}