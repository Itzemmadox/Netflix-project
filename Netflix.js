const toggleIcon = document.querySelector('.faq-question');
const toggleIcon1 = document.querySelector('.faq-question1');
const toggleIcon2 = document.querySelector('.faq-question2');
const toggleIcon3 = document.querySelector('.faq-question3');
const toggleIcon4 = document.querySelector('.faq-question4');
const toggleIcon5 = document.querySelector('.faq-question5');
const toggleIcon6 = document.querySelector('.faq-question6');


const toggleFaqAnswer = document.querySelector('.closed');
const toggleFaqAnswer1 = document.querySelector('.closed1');
const toggleFaqAnswer2 = document.querySelector('.closed2');
const toggleFaqAnswer3 = document.querySelector('.closed3');
const toggleFaqAnswer4 = document.querySelector('.closed4');
const toggleFaqAnswer5 = document.querySelector('.closed5');

const on = document.querySelector('.open');
const off = document.querySelector('.close');
const on1 = document.querySelector('.open1');
const off1 = document.querySelector('.close1');
const on2 = document.querySelector('.open2');
const off2 = document.querySelector('.close2');
const on3 = document.querySelector('.open3');
const off3 = document.querySelector('.close3');
const on4 = document.querySelector('.open4');
const off4 = document.querySelector('.close4');
const on5 = document.querySelector('.open5');
const off5 = document.querySelector('.close5');

const faqList = document.querySelector('.faq-answer');
const faqList1 = document.querySelector('.faq-answer1');
const faqList2 = document.querySelector('.faq-answer2');
const faqList3 = document.querySelector('.faq-answer3');
const faqList4 = document.querySelector('.faq-answer4');
const faqList5 = document.querySelector('.faq-answer5');

const toggleFaq = document.querySelector('#hide');
const toggleFaq1 = document.querySelector('#hide1');
const toggleFaq2 = document.querySelector('#hide2');
const toggleFaq3 = document.querySelector('#hide3');
const toggleFaq4 = document.querySelector('#hide4');
const toggleFaq5 = document.querySelector('#hide5');

//faq list item 00

toggleIcon.addEventListener('click', () => {
    on.classList.toggle('close')
    toggleFaqAnswer.classList.toggle('opened');
    
})

on.addEventListener('click', () => {
    faqList.style.display =          "inline-block"
    off.style.display = "inline-block"
    on.style.display = "none"
    toggleFaq.classList.remove('closed')
});

off.addEventListener('click', () => {
    on.style.display = "inline-block"
    faqList.style.display = "none"
    off.style.display = "none"
    toggleFaq.classList.add('closed')
})

//faq list item 01

toggleIcon1.addEventListener('click', () => {
    on1.classList.toggle('close1')
    toggleFaqAnswer1.classList.toggle('opened1');
    })

on1.addEventListener('click', () => {
    faqList1.style.display =          "inline-block"
    off1.style.display = "inline-block"
    on1.style.display = "none"
    toggleFaq1.classList.remove('closed1')
});

off1.addEventListener('click', () => {
    on1.style.display = "inline-block"
    faqList1.style.display = "none"
    off1.style.display = "none"
    toggleFaq1.classList.add('closed1')
})

//faq list item 02

toggleIcon2.addEventListener('click', () => {
    on2.classList.toggle('close2')
    toggleFaqAnswer2.classList.toggle('opened2');
    })

on2.addEventListener('click', () => {
    faqList2.style.display =          "inline-block"
    off2.style.display = "inline-block"
    on2.style.display = "none"
    toggleFaq2.classList.remove('closed2')
});

off2.addEventListener('click', () => {
    on2.style.display = "inline-block"
    faqList2.style.display = "none"
    off2.style.display = "none"
    toggleFaq2.classList.add('closed2')
})

//faq list item 03

toggleIcon3.addEventListener('click', () => {
    on3.classList.toggle('close3')
    toggleFaqAnswer3.classList.toggle('opened3');
    })

on3.addEventListener('click', () => {
    faqList3.style.display =          "inline-block"
    off3.style.display = "inline-block"
    on3.style.display = "none"
    toggleFaq3.classList.remove('closed3')
});

off3.addEventListener('click', () => {
    on3.style.display = "inline-block"
    faqList3.style.display = "none"
    off3.style.display = "none"
    toggleFaq3.classList.add('closed3')
})

//faq list item 04

toggleIcon4.addEventListener('click', () => {
    on4.classList.toggle('close4')
    toggleFaqAnswer4.classList.toggle('opened4');
    })

on4.addEventListener('click', () => {
    faqList4.style.display =          "inline-block"
    off4.style.display = "inline-block"
    on4.style.display = "none"
    toggleFaqAnswer4.classList.remove('closed4')
});

off4.addEventListener('click', () => {
    on4.style.display = "inline-block"
    faqList4.style.display = "none"
    off4.style.display = "none"
    toggleFaq4.classList.add('closed4')
})

//faq list item 05

toggleIcon5.addEventListener('click', () => {
    on5.classList.toggle('close5')
    toggleFaqAnswer1.classList.toggle('opened5');
    })

on5.addEventListener('click', () => {
    faqList5.style.display =          "inline-block"
    off5.style.display = "inline-block"
    on5.style.display = "none"
    toggleFaq5.classList.remove('closed5')
});

off5.addEventListener('click', () => {
    on5.style.display = "inline-block"
    faqList5.style.display = "none"
    off5.style.display = "none"
    toggleFaq5.classList.add('closed5')
});


function  validation(){
    var emails = document.getElementById('emails').value;
    
    if(emails  == ""){
        document.getElementById('yourEmail').innerHTML = "Email is required!";
        return false;
    }
}

function validated(){
    var myEmail = document.getElementById('myEmail').value;

    if(myEmail == ""){
        document.getElementById('my-email').innerHTML = "Email is required!";
        return false;
    }
}