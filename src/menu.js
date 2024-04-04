let tab;

initialize();

function initialize() {
    const newtab = document.createElement("div")

    const menuList = document.createElement("ul")
    const item1 = document.createElement("li")
    const item2 = document.createElement("li")
    const item3 = document.createElement("li")
    const item4 = document.createElement("li")
    const item5 = document.createElement("li")
    const item6 = document.createElement("li")

    item1.textContent = "hamburger"
    item2.textContent = "pizza"
    item3.textContent = "rice"
    item4.textContent = "grilled chicken"
    item5.textContent = "grilled fish"
    item6.textContent = "soup"

    menuList.append(item1, item2, item3, item4, item5, item6)
    newtab.appendChild(menuList);
    tab = newtab;
}

function getTab() {
    if(tab == null) {
        initialize();
    }
    return tab;
}

export default getTab;