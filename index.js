let renderButtons = () => {
    let arrColors = [
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
    let content = '';
    for (let i = 0; i < arrColors.length; i++) {
        let color = arrColors[i];
        content += `
        <button class="btn ${color} text-light mx-2" onclick="changeColor('${color}')">${color}</button>
        `;
    }
    document.getElementById("colors").innerHTML = content;
};
window.changeColor = (color) => {
    document.getElementById('home').classList = "house " + color;
};
renderButtons();
//------------------------------------
let diemTB = (param) => {
    let TB = 0;
    switch (param.length) {
        case 3:
            TB = (param[0] + param[1] + param[2]) / 3;
            hienThiDiemTB('#tbKhoi1', TB)
            break;
        case 4:
            TB = (param[0] + param[1] + param[2] + param[3]) / 4;
            hienThiDiemTB('#tbKhoi2', TB)
            break;
        default:
            hienThiDiemTB('#tbKhoi1', 'Nhập thiếu điểm')
            break;
    }
};

let hienThiDiemTB = (element, value) => {
    document.querySelector(element).style.display = 'block'
    document.querySelector(element).innerHTML = 'Điểm trung bình: ' + value;
};
document.querySelector('#btnKhoi1').onclick = function () {
    let arrDiem = [];
    let arrInput = document.querySelectorAll('#khoi1 input');
    for (let input of arrInput) {
        let { value } = input;
        let diem = Number(value);
        arrDiem.push(diem);
        console.log(arrDiem);
    }
    diemTB(arrDiem);
};
document.querySelector('#btnKhoi2').onclick = function () {
    let arrDiem = [];
    let arrInput = document.querySelectorAll('#khoi2 input');
    for (let input of arrInput) {
        let { value } = input;
        let diem = Number(value);
        arrDiem.push(diem);
        console.log(arrDiem);
    }
    diemTB(arrDiem);
};
//-------------------------
(() => {
    const e = document.querySelector('.heading')
    let str = e.textContent;
    let chars = [...str];
    console.log(chars);
    let text = '';
    for (let i in chars) {
        text += `
    <span>${chars[i]}</span>
    `
    }
    e.innerHTML = text;
})();