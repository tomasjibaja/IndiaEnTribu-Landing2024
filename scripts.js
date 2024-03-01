const scriptURL = 'https://script.google.com/macros/s/AKfycbyYyY62UQlrx2mq8TXbkyciTvzuTu3_3W-xgLXzWBuihpv-hJmLiWf3hm840NWHKFMzGQ/exec';

const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => submitOk())
    .catch(error => console.error('Error!', error.message))

})

function submitOk() {
    document.body.innerHTML += `<p>Gracias! Tus datos se cargaron correctamente.</p>`;
}