const logoNav = document.querySelector(".logo-expanded-navbar");

function hideLogo() {
    logoNav.style.visibility = 'hidden';
}

function showLogo() {
    logoNav.style.visibility = 'visible';
}

document.querySelector(".navbar-toggler").addEventListener("click", hideLogo);
document.querySelector(".btn-close").addEventListener("click", showLogo);
