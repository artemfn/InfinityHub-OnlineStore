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

document.querySelector('.store-a').addEventListener('click', () => {
    if (userArgs) {
        window.location.href = `store.html?name=${decodeURIComponent(userArgs)}`;
    }
});

document.querySelector('.publish-button').addEventListener('click', () => {
    const name = document.querySelector('.name-input').value;
    const price = document.querySelector('.price-input').value;
    const description = document.querySelector('.description-input').value;
    const photo = document.querySelector('.photo-input').value;

    const warning = document.querySelector('.warning');

    if (name.length < 1 || name.length > 50) {
        warning.style.display = 'inline-block';
        warning.innerHTML = 'Warning! Invalid name, please try another.'
        return;
    }

    if (price.length < 1 || price.length > 20 || Number(price) < 0 || price.includes('e')) {
        warning.style.display = 'inline-block';
        warning.innerHTML = 'Warning! Invalid price, please try another.'
        return;
    }

    if (description.length < 1 || description.length > 200) {
        warning.style.display = 'inline-block';
        warning.innerHTML = 'Warning! Invalid description, please try another.'
        return;
    }

    if (photo.length < 4) {
        warning.style.display = 'inline-block';
        warning.innerHTML = 'Warning! Invalid photo, please try another.'
        return;
    }

    let products = JSON.parse(localStorage.getItem('product-list'));

    if (!products) {
        products = [];
    }

    products.push(
    `<div class="product"><img src="${photo}" alt="Photo"><div class="product-info"><p class="name">${name}</p><p class="price">$ ${price}</p><p class="description">${description}</p><button class="buy-button">Buy</button></div></div>`);

    localStorage.setItem('product-list', JSON.stringify(products));

    window.location.href = `store.html?name=${decodeURIComponent(userArgs)}`;
});