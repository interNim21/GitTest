
function executeFn3() {
    const start = Number(document.getElementById("input3").value);
    

    // 결과를 출력하기 위한 ul 요소를 들여와 저장함.
    const ul = document.getElementById("result3"); 
    ul.innerHTML = "";

    

    for(let num = start; num <= 9; num++){
        ul.innerHTML += `<li>${start} x ${num} = ${start * num}</li>`;
        
        
    }
}