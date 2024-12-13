let cutsvg = document.querySelector('.cut-svg');
let dataBaseweb = document.querySelector('.data-baseweb');

cutsvg.addEventListener("click", function () {
    dataBaseweb.style.display = "none";
})

let cutsvg2 = document.querySelector('.cut-svg2');
let reminder = document.querySelector('.reminder')


cutsvg2.addEventListener("click", function () {
    reminder.style.display = "none"
})

let otherOppertunities = document.querySelector('#other-oppertunities');
let content = document.querySelector('.content');
let slide = document.querySelector('.slide');
let content2 = document.querySelector('.content2');


otherOppertunities.addEventListener("click", function () {
    content.style.display = "none"
    content2.style.display = "block"
    slide.style.transform = "translateX(120%)"
})

let driveWithUber = document.querySelector('#drive-with-uber');

driveWithUber.addEventListener("click", function () {
    content.style.display = "flex"
    content2.style.display = "none"
    slide.style.transform = "translateX(0%)"
})



let qna1 = document.getElementsByClassName('flex')[0];
let one = document.querySelector('.one');

let isOn = false;

qna1.addEventListener("click", function () {
    if (isOn) {
        one.classList.toggle("one");
        (document.getElementsByClassName('flex')[0].firstElementChild).style.transform = "rotate(0deg)"
    }
    else {
        one.classList.toggle("one");
        one.style.animation = "anime 0.2s linear 1";
        (document.getElementsByClassName('flex')[0].firstElementChild).style.transform = "rotate(-180deg)"
    }
    isOn = !isOn;
});


let qna2 = document.getElementsByClassName('flex')[1];
let two = document.querySelector('.two');

let isOn2 = false;

qna2.addEventListener("click", function () {
    if (isOn2) {
        two.classList.toggle("two");
        (document.getElementsByClassName('flex')[1].firstElementChild).style.transform = "rotate(0deg)"
    }
    else {
        two.classList.toggle("two");
        two.style.animation = "anime 0.2s linear 1";
        (document.getElementsByClassName('flex')[1].firstElementChild).style.transform = "rotate(-180deg)"
    }
    isOn2 = !isOn2;
});

let qna3 = document.getElementsByClassName('flex')[2];
let three = document.querySelector('.three');

let isOn3 = false;

qna3.addEventListener("click", function () {
    if (isOn3) {
        three.classList.toggle("three");
        (document.getElementsByClassName('flex')[2].firstElementChild).style.transform = "rotate(0deg)"
    }
    else {
        three.classList.toggle("three");
        three.style.animation = "anime 0.2s linear 1";
        (document.getElementsByClassName('flex')[2].firstElementChild).style.transform = "rotate(-180deg)"
    }
    isOn3 = !isOn3;
});


let qna4 = document.getElementsByClassName('flex')[3];
let four = document.querySelector('.four');

let isOn4 = false;

qna4.addEventListener("click", function () {
    if (isOn4) {
        four.classList.toggle("four");
        (document.getElementsByClassName('flex')[3].firstElementChild).style.transform = "rotate(0deg)"
    }
    else {
        four.classList.toggle("four");
        four.style.animation = "anime 0.2s linear 1";
        (document.getElementsByClassName('flex')[3].firstElementChild).style.transform = "rotate(-180deg)"
    }
    isOn4 = !isOn4;
});


let qna5 = document.getElementsByClassName('flex')[4];
let five = document.querySelector('.five');

let isOn5 = false;

qna5.addEventListener("click", function () {
    if (isOn5) {
        five.classList.toggle("five");
        (document.getElementsByClassName('flex')[4].firstElementChild).style.transform = "rotate(0deg)"
    }
    else {
        five.classList.toggle("five");
        five.style.animation = "anime 0.2s linear 1";
        (document.getElementsByClassName('flex')[4].firstElementChild).style.transform = "rotate(-180deg)"
    }
    isOn5 = !isOn5;
});

let cutt = document.querySelector('#cutt');
let locationSelect = document.querySelector('.location-select');

cutt.addEventListener("click", function () {
    locationSelect.style.display = "none";
});



let about = document.getElementById('about');
let hiddenAboutDiv1 = document.getElementsByClassName('hidden-about')[0].firstElementChild;
let hiddenAboutDiv2 = document.getElementsByClassName('hidden-about')[0].firstElementChild.nextElementSibling;
let hiddenAboutDiv3 = document.getElementsByClassName('hidden-about')[0].lastElementChild;

let isOn6 = false;
about.addEventListener("click", function () {
    if (isOn6) {
        hiddenAboutDiv1.style.display = "none"
        about.firstElementChild.style.transform = "rotate(0deg)";
    }
    else {
        hiddenAboutDiv1.style.display = "flex"
        about.firstElementChild.style.transform = "rotate(-180deg)";
    }
    isOn6 = !isOn6;
});


let aboutExlore = document.querySelector('#about-explore');

aboutExlore.addEventListener("mouseenter", function () {
    hiddenAboutDiv2.style.display = "block"
    hiddenAboutDiv2.style.animation = "animee 0.05s ease-in-out 1"
})

aboutExlore.addEventListener("mouseleave", function () {
    hiddenAboutDiv2.style.display = "none"
})

hiddenAboutDiv2.addEventListener("mouseenter", function () {
    hiddenAboutDiv2.style.display = "block"
})

hiddenAboutDiv2.addEventListener("mouseleave", function () {
    hiddenAboutDiv2.style.display = "none"
});


let aboutOpperByCity = document.querySelector('#about-opper-by-city');

aboutOpperByCity.addEventListener("mouseenter", function () {
    hiddenAboutDiv3.style.display = 'flex'
    hiddenAboutDiv3.style.animation = "animee 0.05s ease-in-out 1"
})

aboutOpperByCity.addEventListener("mouseleave", function () {
    hiddenAboutDiv3.style.display = 'none'
})

hiddenAboutDiv3.addEventListener("mouseenter", function () {
    hiddenAboutDiv2.style.display = "flex"
    hiddenAboutDiv3.style.display = "flex"
})

hiddenAboutDiv3.addEventListener("mouseleave", function () {
    hiddenAboutDiv2.style.display = "none"
    hiddenAboutDiv3.style.display = "none"
});


let signUpPage = document.querySelector('.hidden-sign-up-page');
let signup = document.querySelector('#signup');
let body = document.querySelector('body');
let navbar = document.querySelector('header');

let isOn7 = false;
signup.addEventListener('click', function () {
    if (isOn7) {
        signUpPage.style.display = "none";
        body.style.overflow = "auto"
        navbar.style.position = "static";
        signUpPage.style.zIndex = "0"
        sideNavbarContent.style.zIndex = "10";
        hiddenAboutDiv1.style.zIndex = "5"
    }
    else {
        signUpPage.style.display = "block";
        signUpPage.style.animation = "translateY 0.2s linear 1"
        body.style.overflow = "hidden"
        signUpPage.style.overflow = "auto"
        navbar.style.position = "sticky";
        navbar.style.top = "0px";
        navbar.style.zIndex = "20";
        signUpPage.style.zIndex = "10"
        sideNavbarContent.style.zIndex = "0";
        hiddenAboutDiv1.style.zIndex = "11"
    }
    isOn7 = !isOn7;

})


let cutsignupsvg = document.querySelector('.hidden-cut-signup-page').firstElementChild;

cutsignupsvg.addEventListener("click", function () {
    signUpPage.style.display = "none";
    body.style.overflow = "auto"
    navbar.style.position = "static";
});

let aboutt = document.querySelector('#aboutt');
let aboutContent = document.querySelector('.about-content');

let isOn8 = false;
aboutt.addEventListener('click', function () {
    if (isOn8) {
        aboutContent.style.display = "none";
        aboutt.firstElementChild.style.transform = "rotate(0deg)"
    }

    else {
        aboutContent.style.display = "flex";
        aboutContent.style.animation = "translateY2 0.2s linear 1"
        aboutt.firstElementChild.style.transform = "rotate(-180deg)"
    }

    isOn8 = !isOn8;

});

let sideNavbarContent = document.querySelector('.side-navbar-content');
let sideNavbarSvg = document.querySelector('#side-navbar').firstElementChild;

let isOn9 = false;

sideNavbarSvg.addEventListener("click", function () {
    if (isOn9) {
        sideNavbarContent.style.display = "none"
        body.style.overflow = "auto"
        navbar.style.position = "relative";
        signUpPage.style.zIndex = "10"
    }
    else {
        sideNavbarContent.style.display = "flex"
        sideNavbarContent.style.animation = "translateY 0.2s linear 1"
        sideNavbarContent.style.overflow = "auto"
        body.style.overflow = "hidden"
        navbar.style.position = "sticky";
        navbar.style.top = "0px";
        navbar.style.zIndex = "20";
        sideNavbarContent.style.zIndex = "10";
        signUpPage.style.zIndex = "0"
        hiddenAboutDiv1.style.zIndex = "11"
    }
    isOn9 = !isOn9;
})


let exploree = document.querySelector('.exploree');
let exploreeSVG = document.querySelector('#exploree-svg');
let exploreOBC = document.querySelector('.explore-obc');

let isOn10 = false;

exploree.addEventListener('click', function () {
    if (isOn10) {
        exploreOBC.style.display = 'none'
        exploreeSVG.style.transform = 'rotate(0deg)'

    }
    else {
        exploreOBC.style.display = 'flex'
        exploreOBC.style.animation = "translateY2 0.2s linear 1"
        exploreeSVG.style.transform = 'rotate(-180deg)'
    }
    isOn10 = !isOn10;
});

let obcc = document.querySelector('.obcc');
let obc = document.querySelector('.obc');
let obcSVG = document.querySelector('#obc-svg')

let isOn11 = false;

obcc.addEventListener('click', function () {
    if (isOn11) {
        obc.style.display = 'none'
        obcSVG.style.transform = 'rotate(0deg)'

    }
    else {
        obc.style.display = 'flex'
        obc.style.animation = "translateY2 0.2s linear 1"
        obcSVG.style.transform = 'rotate(-180deg)'
    }
    isOn11 = !isOn11;
});