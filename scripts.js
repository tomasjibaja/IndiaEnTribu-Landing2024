const scriptURL = 'https://script.google.com/macros/s/AKfycbyYyY62UQlrx2mq8TXbkyciTvzuTu3_3W-xgLXzWBuihpv-hJmLiWf3hm840NWHKFMzGQ/exec';
const form = document.forms['contact-form'];
const formMsg = document.getElementById('form-msg');
const submitBtn = document.getElementById('submit');
const formCont = document.getElementById('form-container');

const contactModal = document.getElementById('contact-modal');

const countdownDays = document.getElementById('cd-d');
const countdownHours = document.getElementById('cd-h');
const countdownMinutes = document.getElementById('cd-m');
const countdownSeconds = document.getElementById('cd-s');

const hand = document.getElementById('scroll-hand');
let handScrolled = false;

let scrolling = false;

const carrusel = document.getElementById('cards-container');
const cityText = document.querySelector('#itinerario p');
let currCity = 0;

const citiesText = {
    '0' : () => {
        cityText.style.opacity = 0;
        setTimeout(() => {
            cityText.innerHTML = 
            `<strong>Delhi</strong><br><br>
            Ciudad capital de India, llena de historia y obras emblemáticas. Visitaremos vieja y nueva delhi: Templos, monumentos, paseos en Rikshaw, paseos de compras y mucho más.`;
            cityText.style.opacity = 1;
        }, 300);
    },
    '1' : () => {
        cityText.style.opacity = 0;
        setTimeout(() => {
            cityText.innerHTML = 
            `<strong>Jaipur</strong><br><br>
            Conocida como la ciudad rosa, Jaipur es puro color, telas, elefantes y camellos. Una ciudad con una belleza arquitectónica única donde recorreremos templos, palacios y su muralla de 11km situada en lo más alto de la ciudad que se encuentra dentro del estado de Rajasthan. `;
            cityText.style.opacity = 1;
        }, 300);
    },
    '2' : () => {
        cityText.style.opacity = 0;
        setTimeout(() => {
            cityText.innerHTML = 
            `<strong>Udaipur</strong><br><br>
            La ciudad más romántica de Rajasthan repleta de fortalezas y exóticos palacios que visitaremos como así también museos y realizaremos un crucero por el lago Pichola visitando los gaths, escalones que bajan al río.`;
            cityText.style.opacity = 1;
        }, 300);
    },
    '3' : () => {
        cityText.style.opacity = 0;
        setTimeout(() => {
            cityText.innerHTML = 
            `<strong>Pushkar</strong><br><br>
            En esta ciudad se encuentra el único templo de Brahma en India luego de visitarlo podremos recorrer la ciudad y sus mercados ¡amamos los mercados de India y sus colores!`;
            cityText.style.opacity = 1;
        }, 300);
    },
    '4' : () => {
        cityText.style.opacity = 0;
        setTimeout(() => {
            cityText.innerHTML = 
            `<strong>Agra</strong><br><br>
            Infaltable destino a conocer en India, visitaremos el famoso Taj Mahal, una de las maravillas del mundo, y el fascinante e imponente Fuerte Rojo de Agra.`;
            cityText.style.opacity = 1;
        }, 300);
    },
    '5' : () => {
        cityText.style.opacity = 0;
        setTimeout(() => {
            cityText.innerHTML = 
            `<strong>Lucknow</strong><br><br>
            Capital del estado de Uttar Pradesh, allí visitaremos Bara y Chota Imambaras, Rumi Gate y British Residency. Tendremos tiempo para probar sus famosos kebabs y conocer los bordados chikan característicos de esta zona.`;
            cityText.style.opacity = 1;
        }, 300);
    },
    '6' : () => {
        cityText.style.opacity = 0;
        setTimeout(() => {
            cityText.innerHTML = 
            `<strong>Varanasi</strong><br><br>
            Varanasi es la ciudad que roba el corazón. Aquí el río ganges es protagonista y nos recibirá con las ceremonias de Artic tanto al atardecer como al amanecer donde realizaremos un paseo en barco por este río sagrado. También recorreremos diversos templos antiguos en esta ciudad.`;
            cityText.style.opacity = 1;
        }, 300);
    },
    '7' : () => {
        cityText.style.opacity = 0;
        setTimeout(() => {
            cityText.innerHTML = 
            `<strong>Rishikesh</strong><br><br>
            "La ciudad de los sabios" Esta ciudad sagrada se encuentra a los pies de los Himalayas y se conoce como la capital del yoga.`;
            cityText.style.opacity = 1;
        }, 300);
    },
    '8' : () => {
        cityText.style.opacity = 0;
        setTimeout(() => {
            cityText.innerHTML = 
            `SPARE DESCRIPTION`;
            cityText.style.opacity = 1;
        }, 300);
    }
};


var countdownDate = new Date("Sep 9, 2024 10:00:00").getTime();

form.addEventListener('submit', e => {
    submitBtn.style.opacity = .5;
    submitBtn.style.zIndex = -1;
    formCont.style.zIndex = -1;
    formCont.classList.add('blinking');
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => submitOk())
    .catch(error => console.error('Error!', error.message))
})

function submitOk() {
    formCont.classList.remove('blinking');
    formMsg.innerHTML = `Gracias! Tus datos se cargaron correctamente.`;
    formMsg.style.opacity = 1;

    form.reset();
}

function showModal() {
    contactModal.style.opacity = 1;
    contactModal.style.zIndex = 1;
}

function hideModal() {
    contactModal.style.opacity = 0;
    contactModal.style.zIndex = -1;
}

// COUNTDOWN

var countdown = setInterval(function() {
    var now = new Date().getTime();

    var timeleft = countdownDate - now;

    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    countdownDays.innerHTML = `${days}<span>días</span>`;
    countdownHours.innerHTML = `${hours}<span>horas</span>`;
    countdownMinutes.innerHTML = `${minutes}<span>minutos</span>`;
    countdownSeconds.innerHTML = `${seconds.toString().padStart(2,'0')}<span>segundos</span>`;
}, 1000);


window.addEventListener("scroll", () => {
    animateHand(window.scrollY);
}, { passive: true });


// ANIMAR MANO
function animateHand(scrollPos) {
    if (scrollPos > 520  && !handScrolled) {
        hand.classList.add('scrolling');
        handScrolled = true;
        setTimeout(() => {
            hand.classList.remove('scrolling');
            hand.style.opacity = 0;
            hand.style.zIndex = -1;
        }, 3600);
    }
};

setInterval(() => {
    if (scrolling) {
        scrolling = false;
    }
});

// POSICION CARRUSEL
carrusel.addEventListener("scroll", () => {
    let city = 
        Math.trunc(carrusel.scrollLeft /
            (window.innerWidth * 0.9));
    if (city != currCity) {
        currCity = city;
        citiesText[currCity]();
    }
    
}, { passive: true });