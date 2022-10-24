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