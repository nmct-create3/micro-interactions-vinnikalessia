

function handleFloatingLabel() {
   
}

function handlePasswordSwitcher() {
    const passWordOptions = ['password', 'text'];
    const input = document.querySelector('.js-check')
    const svg_check = document.querySelector('.js-check_svg')
    svg_check.addEventListener('change', function(){
        console.log("geklikt")
        input.type = passWordOptions[+this.checked];
    })
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    handleFloatingLabel();
    handlePasswordSwitcher();
});