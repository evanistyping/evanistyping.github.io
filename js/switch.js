function toggleModes() {
    var body = document.getElementById("body-tog");
    var h2 = document.getElementById("h2-tog");
    var btn = document.getElementById("btn-mode");
    
    btn.classList.toggle("fa-sun");
    body.classList.toggle("body-light-mode");
    h2.classList.toggle("h2-light-mode");
    }

    function dropdown(){
        var btn = document.getElementById("menu");
        var cerret = document.getElementById("cerret");

        // setTimeout(function(){
        //     btn.classList.toggle("inline");
        // }, 100);

        btn.classList.toggle("inline");
        cerret.classList.toggle("rot");
    }

    // Index 2

    function screenMode(){
        var btn = document.getElementById("screen-button");
        var main = document.getElementById("main-section");
        var foot = document.getElementById("footer-section");

        foot.classList.toggle("bg-dark");
        main.classList.toggle("bg-dark");
        btn.classList.toggle("fa-sun");
        btn.classList.toggle("color-light");
    }