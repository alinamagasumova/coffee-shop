let container = document.querySelector('.products');

const getData = async (param) => {
    const res = await fetch('/api/category/' + param);
    let data = await res.text();
    console.log(data)
    data.data.forEach((obj) => {
        container.innerHTML += `<div class="products__item" data-key="${obj._id}" data-data="${JSON.stringify(obj)}">${obj.name}</div><div class='hide'></div>`;
    });
};