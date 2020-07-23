let navigation = document.getElementById("nav");

window.addEventListener("scroll", function () {
    let scrollYPostion = window.pageYOffset;
    console.log(scrollYPostion);
    if (scrollYPostion > 50) {
        navigation.classList.add("move");
    } else {
        navigation.classList.remove("move");
    }

})



//inicjalizacja animation on scroll
AOS.init();


//hamburger

let hamburger = document.getElementById('hamburger-js');
//funkcja anonimowa!!
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('open')

    // toggle-dodaj jak nie istnieje w przeciwnym przypadku usun
    navigation.classList.toggle('menu-open')
})



