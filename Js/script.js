document.addEventListener('DOMContentLoaded', function() {
    var c_nav = document.querySelector('.container_nav');
    var text = document.querySelector('.text');
    var photo = document.querySelector('.Photo');


    if (window.innerWidth <= 1050) {
        photo.style.height = "calc(100vh - " + (c_nav.offsetHeight + text.offsetHeight) + "px)";
    }

    window.addEventListener('resize', WindowSize);

    function WindowSize() {
        if (window.innerWidth <= 1050) {
            photo.style.height = "calc(100vh - " + (c_nav.offsetHeight + text.offsetHeight) + "px)";
        } else {
            photo.style.height = "100%";
        }
    }


    var checkbtn = document.querySelector('.checkbtn');
    var nav = document.querySelector('.nav');
    checkbtn.addEventListener('click', shownav);

    function shownav() {
        checkbtn.firstChild.classList.toggle('fas');
        checkbtn.firstChild.classList.toggle('fa-bars');
        checkbtn.firstChild.classList.toggle('fas');
        checkbtn.firstChild.classList.toggle('fa-times');
        nav.classList.toggle('move');
    }


    var tasti_a = document.getElementsByClassName('j_tasto');
    for (var i = 0; i < tasti_a.length; i++) {
        tasti_a[i].addEventListener('click', move);

    }

    function move() {
        nav.classList.toggle('move');
        checkbtn.firstChild.classList.toggle('fas');
        checkbtn.firstChild.classList.toggle('fa-times');
        checkbtn.firstChild.classList.toggle('fas');
        checkbtn.firstChild.classList.toggle('fa-bars');
    }
});