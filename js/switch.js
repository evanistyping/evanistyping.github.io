// function toggleModes() {
//     let body = document.getElementById("body-tog");
//     let h2 = document.getElementById("h2-tog");
//     let btn = document.getElementById("btn-mode");
    
//     btn.classList.toggle("fa-sun");
//     body.classList.toggle("body-light-mode");
//     h2.classList.toggle("h2-light-mode");
//     }


    function screenMode(){
        let btn = document.getElementById("screen-button");
        let main = document.getElementById("main-section");
        let foot = document.getElementById("footer-section");
        let hero = document.getElementById("hero");

        hero.classList.toggle("bg-dark");
        foot.classList.toggle("bg-dark");
        main.classList.toggle("bg-dark");
        btn.classList.toggle("fa-sun");
        btn.classList.toggle("fa-moon");
        btn.classList.toggle("color-light");
    }