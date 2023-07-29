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

let readMore = document.getElementsByClassName("readMore");

for (let i = 0; i < readMore.length; i++) {
    readMore[i].addEventListener("click", function () {
        //find closest p with class article__excerpt
        let article__excerpt = this.parentNode.querySelector(".article__excerpt");


        if (article__excerpt.classList.contains("open")) {
            article__excerpt.classList.remove("open")
            this.innerHTML = "Read more";
        }
        else {
            article__excerpt.classList.add("open")
            this.innerHTML = "Read less";

            let articles = document.getElementsByClassName("article__excerpt");

            for (let i = 0; i < articles.length; i++) {
                if (articles[i] != article__excerpt) {
                    articles[i].classList.remove("open");
                    articles[i].parentNode.querySelector(".readMore").innerHTML = "Read more";
                }
            }
        }

    });
}

index = 0;
$(function () {
    $(".article").slice(0, 6).show();
    $("body").on('click touchstart', '.load-more-posts', function (e) {
        e.preventDefault();
        index++;
        loadMorePosts();
        if ($(".article:hidden").length == 0) {
            $(".load-more-posts").css('visibility', 'hidden');
            $("#pagination").css('height', '0');
            $("#pagination").css('margin', '0');
            $("#pagination").css('padding', '0');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1000);
    });
});


function loadMorePosts() {
    if (window.innerWidth > 1024) {
        if (index == 1) {
            $(".article").slice(0, 9).show();
        }
        else if (index >= 2) {
            $(".article").slice(0, 12).show();
        }
    }
    else if (window.innerWidth > 768) {
        if (index == 1) {
            $(".article").slice(0, 8).show();
        }
        else if (index == 2) {
            $(".article").slice(0, 10).show();
        }
        else if (index == 3) {
            $(".article").slice(0, 12).show();
        }
    }
    else {
        if (index == 1) {
            $(".article").slice(0, 7).show();
        }
        else if (index == 2) {
            $(".article").slice(0, 8).show();
        }
        else if (index == 3) {
            $(".article").slice(0, 9).show();
        }
        else if (index == 4) {
            $(".article").slice(0, 10).show();
        }
        else if (index == 5) {
            $(".article").slice(0, 11).show();
        }
        else if (index == 6) {
            $(".article").slice(0, 12).show();
        }
    }
}