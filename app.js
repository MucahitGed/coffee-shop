const submit_btn = document.querySelector(".btn");
const contact_output = document.querySelector(".contact-output")
const contact_name = document.querySelector("#contact .form-control #name")
const contact_email =document.querySelector("#contact .form-control #email")
const contact_phone = document.querySelector("#contact .form-control #phone")
const menu = document.querySelector(".menu");
const menu_btn = document.querySelector(".menu-btn");

menu_btn.innerHTML = 'Menu'
menu_btn.addEventListener("click" , ()=>{
    menu.classList.toggle('show')
    if(menu_btn.innerHTML == 'Menu'){
        menu_btn.innerHTML = 'Close'
    }else{
        menu_btn.innerHTML = 'Menu'
    }
    
})

submit_btn.addEventListener("click" , ()=> {
        if(contact_name.innerHTML == "" || 
        contact_email.innerHTML == "" ||
        contact_phone.innerHTML == ""){
            contact_output.innerHTML = "Fill your information if you want us to contact you"
            contact_output.style.color = "red"
        }if(!contact_name.value == "" && 
        !contact_email.value == "" &&
        !contact_phone.value == ""){
            contact_output.innerHTML="We will contact to you as soon as possible"
            contact_output.style.color = "green"
        }
        })   
        
setTimeout(()=>{
    if(!contact_output.innerHTML == ""){
        contact_output.innerHTML = "";
    }
} , 3000);


const cards = document.querySelectorAll('.card')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    cards.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}