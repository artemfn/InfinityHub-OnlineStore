import User from './model/user.js';
import LocalStorageController from './model/localStorageController.js';

document.querySelector('.singin-button').addEventListener('click', () => {
    const controller = new LocalStorageController();

    const name = document.querySelector('.name-input').value;
    const email = document.querySelector('.email-input').value;
    const password = document.querySelector('.password-input').value;

    const warning = document.querySelector('.warning');

    if (name.length < 1 || name.length > 50 || controller.keyList.includes(name)) {
        warning.style.display = 'inline-block';
        warning.innerHTML = 'Warning! Invalid name, please try another.'
        return;
    }

    if (email.length < 1 || email.length > 256 || !email.includes('@') || !email.includes('.')) {
        warning.style.display = 'inline-block';
        warning.innerHTML = 'Warning! Invalid email, please try another.'
        return;
    }

    if (password.length < 7 || password.length > 50) {
        warning.style.display = 'inline-block';
        warning.innerHTML = 'Warning! Invalid password, please try another.'
        return;
    }
    
    const user = new User(name, email, password);

    controller.trySave(user.name, user);
});