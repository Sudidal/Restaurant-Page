import homeImage from "/src/Images/homeImage.jpg"

let tab;

function initialize() {
    const newtab = document.createElement("div")
    newtab.classList.add("home-tab")

    const title = document.createElement("h2");
    title.textContent = "Welcome to Oxide Restaurant"
    
    const desc = document.createElement("p");
    desc.textContent = "The best restaurant in Iraq opened all day and ready to serve any order with delivery service available"

    const newImage = new Image();
    newImage.src = homeImage;
    
    newtab.append(title, newImage, desc);
    tab = newtab;
}

function getTab() {
    if(tab == null) {
        initialize();
    }
    return tab;
}

export default getTab;