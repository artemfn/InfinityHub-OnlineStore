//import LocalStorageController from './model/localStorageController'; ?? error!

const urlArgs = new URLSearchParams(window.location.search);
const userArgs = urlArgs.get('name');

if (userArgs) {
    const userName = decodeURIComponent(userArgs);

    document.querySelector('header .right-section .profile').innerHTML =
        `<i class='bx bx-user-circle'></i>${userName}`;
}

document.querySelector('.home-a').addEventListener('click', () => {
    if (userArgs) {
        window.location.href = `index.html?name=${decodeURIComponent(userArgs)}`;
    } 
});

document.querySelector('.product-a').addEventListener('click', () => {
    if (userArgs) {
        window.location.href = `product.html?name=${decodeURIComponent(userArgs)}`;
    }
});