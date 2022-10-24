let diemTB = (param) => {
    let TB = 0;
    switch (param.length) {
        case 3:
            TB = (param[0] + param[1] + param[2]) / 3;
            break;
        case 4:
            TB = (param[0] + param[1] + param[2] + param[3]) / 4;
            break;
        default:
            TB = 'Nhập thiếu giá trị';
            break;
    }
    return TB;
};

window.hienThiDiemTB = (element, value) => {
    document.querySelector(element).style.display = 'block'
    document.querySelector(element).innerHTML = value;
};
document.querySelector('#btnKhoi1').onclick = function () {
    let arrDiem = [];
    let arrInput = document.querySelectorAll('#khoi1 input');
    for (let input of arrInput) {
        let { value } = input;
        let diem = Number(value);
        if (diem != 0) {
            arrDiem.push(diem);
        }
    }
    let diem = diemTB(arrDiem);
    hienThiDiemTB('#tbKhoi1', diem);
};
document.querySelector('#btnKhoi2').onclick = function () {
    let arrDiem = [];
    let arrInput = document.querySelectorAll('#khoi2 input');
    for (let input of arrInput) {
        let { value } = input;
        let diem = Number(value);
        if (diem != 0) {
            arrDiem.push(diem);
        }
    }
    let diem = diemTB(arrDiem);
    if (arrDiem.length == 4) {
        hienThiDiemTB('#tbKhoi2', diem);
    } else {
        hienThiDiemTB('#tbKhoi2', 'Nhập thiếu giá trị');
    }
};