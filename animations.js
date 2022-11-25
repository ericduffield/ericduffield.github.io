function slide() {

    let menu = document.getElementById("menu");

    if (menu.style.top == "0%") {
        menu.style.top = "-100%";
        document.documentElement.style.overflow = 'auto';
    }
    else {
        menu.style.top = "0%";
        document.documentElement.style.overflow = 'hidden';
    }

    let hamburger = document.getElementById("hamburger");

    if (hamburger.className == "open") {
        hamburger.className = "";
    }
    else {
        hamburger.className = "open";
    }
}

document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        if (menu.style.top == "0%") {
            slide();
        }
    }
});

let menu = document.getElementById("menu");

menu.childNodes.forEach(element => {
    if (element.className != "socials") {
        element.addEventListener("click", slide);
    }
});