// const bomberman = document.getElementsByClassName("bomber");
// const bomb = document.getElementsByClassName("bom");

// document.addEventListener("keydown", function (e) {

//         console.log(e);
//         key = KeyboardEvent: e.keyCode;

//         if (key === 39){
//             bomberman[0].style.left = parseInt(bomberman[0].style.left) + 10 + "px";
//         }
//  });

 let xindex = 0;
 let yindex = 0;


 // addEventListener("이벤트 종류", 함수(이벤트가 발생했을때 수행할 기능))
 // 전달인자 2개
 document.addEventListener("keydown", function (e) {
    // e : 이벤트 객체

    const bomberman = document.getElementById("bomberman"); //봄버맨 이미지

    switch(e.key){
        case "ArrowLeft":
        xindex -= 10;
        break;

        case "ArrowRight":
        xindex += 10;
        break;

        case "ArrowUp":       //위로올라가는건 (-) 
        yindex -= 10;
        break;

        case "ArrowDown":
        yindex += 10;
        break;

        case "x":
            const box = document.getElementById("box");
            box.innerHTML += `
            `<img src="/01_Webfront/3_Javascript/img/boom.png";
            style= transform: translate3d(${xindex}px, ${yindex}px, 0px); posit
            >`;


    }

    bomberman.style.transform = `translate3d(${xindex}px, ${yindex}px)`;
 });



  