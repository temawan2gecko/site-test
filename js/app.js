(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    window["FLS"] = true;
    isWebp();
    const closeBurger = document.querySelector(".close-btn");
    const burgerBtn = document.querySelector(".header__burger-btn");
    const burgerMenu = document.querySelector(".mobile");
    burgerBtn.addEventListener("click", (() => {
        burgerMenu.classList.add("openMobile");
        closeBurger.classList.add("showbtn");
    }));
    closeBurger.addEventListener("click", (() => {
        burgerMenu.classList.remove("openMobile");
        closeBurger.classList.remove("showbtn");
    }));
    const openDownBtn = document.querySelectorAll(".open-down1");
    const mobileMenu = document.querySelectorAll(".submenu1");
    openDownBtn.forEach(((el, index) => {
        el.addEventListener("click", (() => {
            el.classList.toggle("blueEffect");
            mobileMenu[index].classList.toggle("openSubMenu");
        }));
    }));
})();