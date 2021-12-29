let container = document.querySelector('.products');

const getData = async (param) => {
    const res = await fetch('/api/category/' + param);
    const data = await res.json();
    data.data.forEach((obj) => {
        container.innerHTML += `<div class="products__item" data-key="${obj._id}">${obj.name}</div><div class='hide'></div>`;
    });
};