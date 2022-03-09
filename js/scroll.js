
$(function(){

    const sr = ScrollReveal({origin: 'right', distance: '200px', scale: '1', duration: '1000', delay: 100, reset: true});
    // let sl = ScrollReveal({origin: 'left', distance: '200px', scale: '1', duration: '1000', delay: 100, reset: true});

    sr.reveal('.sideright1');
    sr.reveal('.sideright2')
    sr.reveal('.fractal-link');


});

$(function(){

    const sl = ScrollReveal({origin: 'left', distance: '200px', scale: '1', duration: '1000', delay: 0, reset: true});
    // let sl = ScrollReveal({origin: 'left', distance: '200px', scale: '1', duration: '1000', delay: 100, reset: true});

    sl.reveal('.sideleft1');
    sl.reveal('.sideleft2');
    sl.reveal('.ascii-link');

});

$(function(){

    const sb = ScrollReveal({origin: 'bottom', distance: '100px', scale: '1', duration: '500', delay: 360, reset: true});
    // let sl = ScrollReveal({origin: 'left', distance: '200px', scale: '1', duration: '1000', delay: 100, reset: true});

    sb.reveal('.footer');

});