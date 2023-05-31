//toggle icon navbar
var menuIcon = document.querySelector('#menu-icon');
var navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    // menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll sections
var section = document.querySelectorAll('section');
var navlink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        var top = window.scrollY;
        var offset = sec.offsetTop - 100;
        var height = sec.offsetHeight;
        var id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            //active navbar links
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('heder nav a[href*=' + + ']').classList.add('active');
            });
        }
    });
}

window.onscroll = () => {
    //sticky header
    var header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

}