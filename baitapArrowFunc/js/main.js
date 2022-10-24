
const colorList = [
    "pallet",
    "viridian",
    "pewter",
    "cerulean",
    "vermillion",
    "lavender",
    "celadon",
    "saffron",
    "fuschia",
    "cinnabar",
];
let renderButtons = () => {
    let content = '';
    for (let i = 0; i < colorList.length; i++) {
        let color = colorList[i];
        if (i == 0) {
            content += `
            <button onclick="changeColor('${color}','${i}')" class='color-button ${color} active'></button>
            `;
        } else {
            content += `
            <button onclick="changeColor('${color}','${i}')" class='color-button ${color}'></button>
            `;
        }
    }
    document.getElementById("colorContainer").innerHTML = content;
};
let pickColor = document.getElementsByClassName("color-button");

window.changeColor = (color, index) => {
    for (let i = 0; i < pickColor.length; i++) {
        pickColor[i].classList.remove("active");
        pickColor[index].classList.add("active");
        document.getElementById("house").classList = "house " + color;
    }
};
renderButtons();