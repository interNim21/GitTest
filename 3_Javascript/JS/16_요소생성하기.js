const createBox = document.querySelector("#createBox"); //button
const container = document.querySelector(".container"); //div

//createBox 버튼 클릭시 div.box 를 생성하여
//container에 마지막 자식으로 추가

createBox.addEventListener("click", () => {

    // 1. div요소를 생성함
    const box = document.createElement("div");
    console.log(box); // 만들어졌지만 화면에는 아직 안보인다.

    // 2. 만들어진 div 요소 "box" 클래스 추가
    box.classList.add("box"); // <div calss="box"><div> 인 상태

    // 3. container의 마지막 자식으로 div 요소 추가
    container.append(box);

    // 4. intput 요소 생성
    const input = document.createElement("input");
    input.type = "text"; //<input type = "text">

    // 5. 생성된 input은 box의 마지막 자식으로 추가
    box.append(input);



}); 




// 요소.classList : 요소의 클래스 목록
// -> 클래스 존재여부, 추가, 제거 등을 할 수 있음

// 요소.classList
// -> 요소 목록이 배열 형식으로 반환

// 요소.classList.contains("클래스명")
// -> 클래스가 있으면 true, 없으면 false

// 요소.classList.add("클래스명")
// -> 클래스 추가

// 요소.classList.remove("클래스명")
// -> 클래스 제거


//innerHTML로 요소 추가하기
//innerHTML은 성능적으로 느리고 이전 내용을 삭제해하는 경우가 생길
//수 도 있으므로 효율적이지 못하다
const innerHTMLBox = document.querySelector("#innerHTMLBox");

innerHTMLBox.addEventListener("click", () => {

    container.innerHTML 
        += "<div class ='box'><input type='text'></div>"

});