const topbar = document.getElementById("topbar");
window.addEventListener("scroll", scrollAction);

const decreixent = document.getElementsByClassName("decreixent");
const titol = document.getElementById('titol');
document.addEventListener('DOMContentLoaded', startEffects);
let iscyan = true;

let lastScrollY = 0;

function scrollAction()
{
    let currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        topbar.style.transform = "translateY(-100%)"; // Hide topbar
    }

    else {
        topbar.style.transform = "translateY(0)";
    }
    lastScrollY = currentScrollY;
}


function startEffects(){
    setInterval(playWarningAnim, 1000);

    titol.style.animation = 'rotateIn 1s ease-out forwards';
}

function playWarningAnim(){

    for (let i = 0; i < decreixent.length; i++) {
        if(iscyan) decreixent[i].style.backgroundColor = 'lightcyan';
        else decreixent[i].style.backgroundColor = 'lightcoral';
    }
    iscyan = !iscyan;
}
