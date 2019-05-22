'use strict';
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector("[data-target='carousel']");
    const card = carousel.querySelector("[data-target='card']");
    const leftButton = document.querySelector("[data-action='slideLeft']");
    const rightButton = document.querySelector("[data-action='slideRight']");

    const carouselWidth = carousel.offsetWidth;
    const cardStyle = card.currentStyle || window.getComputedStyle(card)
    const cardMarginLeft = Number(cardStyle.marginLeft.match(/\d+/g)[0]);

    const cardCount = carousel.querySelectorAll("[data-target='card']").length;

    let offset = 0;
    const maxX = -((cardCount / 3) * carouselWidth +
        (cardMarginLeft * (cardCount / 3)) -
        carouselWidth - cardMarginLeft);

    leftButton.addEventListener("click", function () {
        if (offset !== 0) {
            offset += carouselWidth + cardMarginLeft;
            carousel.style.transform = `translateX(${offset}px)`;
        }
    })

    rightButton.addEventListener("click", function () {
        if (offset !== maxX) {
            offset -= carouselWidth + cardMarginLeft;
            carousel.style.transform = `translateX(${offset}px)`;
        }
    })
});