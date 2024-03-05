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