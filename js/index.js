// scroll btn
window.onscroll = function() {showScrollBtn()};
const scrollBtn = document.querySelector(".scroll-btn");

function showScrollBtn(){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scrollBtn.classList.add("show-scroll-btn");
    } else {
        scrollBtn.classList.remove("show-scroll-btn");
    }
}

// Phone animation
const phoneCard = document.querySelector(".phone-card");
const phoneIcon = document.querySelector(".phone-card-icon");
const cardContent = document.querySelector(".phone-card-content");
const phoneArrow = document.querySelector(".phone-card-arrow");
const phoneArrowLine = document.querySelector(".phone-card-arrow-line");

function phoneOpen(){
   phoneCard.classList.toggle("open-phone-card");
   phoneCard.classList.remove("phone-card-bigger");
   phoneArrow.classList.remove("turn-it");
}

function openPhoneFooter() {
    phoneCard.classList.toggle("phone-card-bigger");
    phoneArrow.classList.toggle("turn-it");
}

let selector = document.querySelectorAll("input[type='tel']");
let inp = new Inputmask("999-999-99-99");
inp.mask(selector);

function isEmpty(e) {
    var validRegex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    if(e.type == "email"){
        if(e.value.match(validRegex)){
            e.classList.remove("is-invalid");
            e.classList.add("is-valid");
        }else{
            e.classList.remove("is-valid");
            e.classList.add("is-invalid");
        }
    }else if(e.type != "email"){
        if(e.value == ''){
            e.classList.remove("is-valid");
            e.classList.add("is-invalid");
        }else{
            e.classList.remove("is-invalid");
            e.classList.add("is-valid");
        }
    }
}

const form = document.querySelector("#form");
form.addEventListener("submit", formSubmit);

async function formSubmit(e) {
    e.preventDefault();
    let error = 0;
    let formData = new FormData(form);
    let loader = document.querySelector(".sending");
    let formReq = document.querySelectorAll(".req");
    for (let index = 0; index < formReq.length; index++) {
        const input = formReq[index];
        if(input.value == ''){
            input.classList.add("is-invalid");
            error++;
        }
    }
    if (error === 0) {
        loader.classList.add("show-it");
        let response = await fetch('mail.php', {
            method: 'POST',
            body: formData
        });
        if(response.ok){
            let result = await response.json();
            console.log(result);
            form.reset();
            loader.classList.remove("show-it");
        }else{
            loader.classList.remove("show-it");
        }
    }
}