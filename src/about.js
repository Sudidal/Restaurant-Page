let tab;

initialize();

function initialize() {
    const newtab = document.createElement("div")
    const text = document.createElement("p");
    text.textContent = "This is the about page";
    newtab.appendChild(text);
    tab = newtab;
}

function getTab() {
    if(tab == null) {
        initialize();
    }
    return tab;
}

export default getTab;
//haha