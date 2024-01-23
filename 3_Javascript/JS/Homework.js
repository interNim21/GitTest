

function executeFn3() {
    // start는 입력받은 값
    const inputValue = Number(document.getElementById("input3").value);
    

    // 결과를 출력하기 위한 ul 요소를 들여와 저장함.
    const ul = document.getElementById("result3"); 
    ul.innerHTML = "";


    if (inputValue < 2 || inputValue > 9) {
        return alert("error");
    }

    
    for(let num = 2; num <= 9; num++){

        ul.innerHTML += `<li>${inputValue} x ${num} = ${inputValue * num}</li>`;
        
        
    }
}
