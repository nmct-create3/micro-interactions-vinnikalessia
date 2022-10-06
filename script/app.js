let email = {}, password = {}, signInButton;

function handleFloatingLabel() {
   
}

function enableListeners(){
    addEventListener('blur', function(){
        console.info("blur event")
    })
    addEventListener('click', function(){
        
    })
}

function getDOMElements(){
    email.field = document.querySelector('.js-email-field')
    email.input = document.querySelector('.js-email-input')
    email.errmsg = document.querySelector('.js-email-errormsg')
}

function handlePasswordSwitcher() {
    const passWordOptions = ['password', 'text'];
    const input = document.querySelector('.js-check')
    const svg_check = document.querySelector('.js-check_svg')
    svg_check.addEventListener('change', function(){
        input.type = passWordOptions[+this.checked];
    })
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    handleFloatingLabel();
    handlePasswordSwitcher();
    getDOMElements();
});









/****** DEMO ******/
/*
const checkinput = function(event){
    if(this.target.value.length < 2 || this.target.value.length < 4){
            inputelement.removeeventlistener('input', checkinput)
        }
}

const listentoinput = function(inputelement){
    inputelement.addeventlistener('blur', function(){
        if(this.target.value.length < 2 || this.target.value.length < 4){
            
        }
        else{
            console.log("error, pls fix")
            inputelement.addeventlistener('input', checkinput)
        }
    }) 
    document.addeveentlistener('DOMContentLoaded', function(){
        const input = document.queryselector('input')
        listentoinput(input)
    })
}




*/