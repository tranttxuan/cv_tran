// INTRO ANIMATION
function showElement(name) {
        document.querySelector(name).style.transform = `translate(0px,0px)`;
        document.querySelector(name).style.opacity = `1`;
}

function showList(name) {
        document.querySelectorAll(name).forEach((e, i) => {
                let j = i;
                setTimeout(() => {
                        e.style.transform = `translate(0px,0px)`;
                        e.style.opacity = `1`;

                }, j * 100);
        })
}

window.onload = function () {
        setTimeout(() => {
                document.querySelector(".intro__ver").style.height = '100vh';
                document.querySelector(".intro__ver").style.opacity = '0';
        }, 200);
        setTimeout(() => {
                document.querySelector(".intro__half.first").style.left = '-50vw';
                document.querySelector(".intro__half.second").style.left = '100vw';
        }, 1700);
        setTimeout(() => {
                showElement("nav a h1")
        }, 3200);
        setTimeout(() => {
                showElement("nav .nav__menu");
        }, 3500);
        setTimeout(() => {
                showElement("nav .nav__socials");
        }, 3800);
        setTimeout(() => {
                showElement("nav .nav__email");
        }, 4100);
        setTimeout(() => {
                showList(".home__text p");
        }, 4400);
        setTimeout(() => {
                showElement(".home__text span");
        }, 4700);
        setTimeout(() => {
                showElement(".home__mybrain h2");
                showList(".home__mybrain h3");
        }, 5000);
        setTimeout(() => {
                showList(".badges .badge")
        }, 5300);
        setTimeout(() => {
                showElement(".home__mybrain.education h2");
        }, 6500);
        setTimeout(() => {
                showList(".timeline .timeline-item")
        }, 7000);

}

// SCROLL
window.onscroll = function () {
        // console.log(window.pageYOffset)
        if (window.pageYOffset > 5) {
                console.log("check", window.pageYOffset)
                document.querySelector(".nav").style.opacity = `0`;
                document.querySelector(".nav").style.transition = `opacity 1s`;
        }else{
                document.querySelector(".nav").style.opacity = `initial`;
        }
}
