const first_name = document.getElementById('firstname');
const last_name = document.getElementById('lastname');
const message = document.getElementById('message');
const form = document.getElementById('my_form');
const errorEl = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = [];
    if(first_name.value === '' || first_name.value == null) {
        messages.push('FirstName');
    }

    if(last_name.value === '' || last_name.value == null) {
        messages.push('LastName');
    }

    if(message.value === '' || message.value == null) {
        messages.push('Message');
    }

    if(messages.length > 0) {
        e.preventDefault();
        errorEl.style.display = 'flex';
        errorEl.innerHTML = messages.join(', ') + ' is required'
    }

    if(messages.length == 0) {
        e.preventDefault();
        errorEl.style.display = 'flex';
        errorEl.innerHTML = 'Correct'
    }
})