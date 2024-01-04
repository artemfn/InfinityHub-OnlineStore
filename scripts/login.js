import LocalStorageController from './model/localStorageController.js';

document.querySelector('.login-button').addEventListener('click', () => {
    const controller = new LocalStorageController();

    const name = document.querySelector('.name-input').value;
    const password = document.querySelector('.password-input').value;

    const warning = document.querySelector('.warning');

    if (name.length < 1 || name.length > 50 || !controller.keyList.includes(name)) {
        warning.style.display = 'inline-block';
        warning.innerHTML = 'Warning! Invalid name, please try another.'
        return;
    }

    if (password.length < 7 || password.length > 50) {
        warning.style.display = 'inline-block';
        warning.innerHTML = 'Warning! Invalid password, please try another.'
        return;
    }

    const user = controller.tryGet(name);

    if (user.password === password) {
        console.log(user);
    }
});