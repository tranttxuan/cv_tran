function showElement(name) {
        document.querySelector(name).style.transform = `translate(0px,0px)`;
        document.querySelector(name).style.opacity = `1`;
}

function showList(name){
        document.querySelectorAll(name).forEach((e, i) => {
                let j = i;
                setTimeout(() => {
                        e.style.transform = `translate(0px,0px)`;
                        e.style.opacity = `1`;

                }, j*100);
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
        }, 1500);
        setTimeout(() => {
                showElement("nav a h1")
        }, 2000);
        setTimeout(() => {
                showElement("nav .nav__menu");
        }, 2200);
        setTimeout(() => {
                showElement("nav .nav__socials");
        }, 2400);
        setTimeout(() => {
                showElement("nav .nav__email");
        }, 2600);
        setTimeout(() => {
                showElement(".home__text p");
        }, 2700);
        setTimeout(() => {
                showElement(".home__text span");
        }, 2900);
        setTimeout(() => {
                showElement(".home__mybrain h2");
                showList(".home__mybrain h3");
        }, 3100);
        setTimeout(() => {
                showList(".badges .badge")
        }, 3300);
        setTimeout(() => {
                showElement(".home__mybrain.education h2");
        }, 4700);
        setTimeout(() => {
                showList(".timeline .timeline-item")
        }, 4900);

}