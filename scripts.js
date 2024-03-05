const scriptURL = 'https://script.google.com/macros/s/AKfycbyYyY62UQlrx2mq8TXbkyciTvzuTu3_3W-xgLXzWBuihpv-hJmLiWf3hm840NWHKFMzGQ/exec';
const form = document.forms['contact-form'];
const formMsg = document.getElementById('form-msg');
const submitBtn = document.getElementById('submit');
const formCont = document.getElementById('form-container');

const cards = document.querySelectorAll('card');

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