import './style.css'

const content = document.querySelector(".content");
const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const aboutBtn = document.querySelector(".about");

import home_tab from "/src/home.js";
import menu_tab from "/src/menu.js";
import about_tab from "/src/about.js";

setDefaultTab();

homeBtn.addEventListener("click", () => {
    wipeContent();
    setContent(home_tab);
})
menuBtn.addEventListener("click", () => {
    wipeContent();
    setContent(menu_tab)
})
aboutBtn.addEventListener("click", () => {
    wipeContent();
    setContent(about_tab);
})

function wipeContent() {
    if(content.firstChild != null)
        content.removeChild(content.firstChild);
}
function setContent(tab) {
    const item = tab();
    content.appendChild(item);
}

function setDefaultTab() {
    wipeContent();
    setContent(home_tab);
}