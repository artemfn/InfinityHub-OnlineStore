// localStorage.setItem('product-list', JSON.stringify([/* empty array */]));
// added a product-list array to lacal storage

const urlArgs = new URLSearchParams(window.location.search);
const userArgs = urlArgs.get('name');

if (userArgs) {
    const userName = decodeURIComponent(userArgs);

    const section = document.querySelector('header .right-section');
    section.innerHTML = `<a href="#"><i class='bx bx-user-circle'></i>${userName}</a>`;
}

document.querySelector('.middle-section .store-a').addEventListener('click', () => {
    if (userArgs) {
        window.location.href = `store.html?name=${decodeURIComponent(userArgs)}`;
    }
    else {
        window.location.href = 'login.html'
    }
});

document.querySelector('.preview-background-description .start-button').addEventListener('click', () => {
    if (userArgs) {
        window.location.href = `store.html?name=${decodeURIComponent(userArgs)}`;
    }
    else {
        window.location.href = 'singin.html'
    }
});