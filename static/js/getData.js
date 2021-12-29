let container = document.querySelector('.products');

const getData = async (param) => {
    const res = await fetch('/api/category/' + param);
    const data = await res.json();
    data.data.forEach((obj) => {
        if (param == 'coffee') {
            container.innerHTML += `
            <div class="products__item" data-key="${obj._id}">
                <img src="/images/main/${obj.photo}" alt="" class="img_coffee">
                 <h3 class="fontB data_header pa">${obj.name}</h3>
                 <p class="data_p pa">Степень обжарки: ${obj.step}</p>
                 <p class="data_p2 pa">Страна: ${obj.country}</p>
                 <p class="data_p3 pa">Вид кофе: ${obj.vid}</p>
                 <p class="data_p4 pa">${obj.description}</p>
                 <h2 class="fontB data_h2 pa">${obj.cost} ₽</h2>
                 <div class="line"></div>
            </div>`
        } else if(param == 'tea') {
            container.innerHTML += `
            <div class="products__item" data-key="${obj._id}">
                <img src="/images/main/${obj.photo}" alt="" class="img_coffee">
                 <h3 class="fontB data_header pa">${obj.name}</h3>
                 <p class="data_p4 pa">${obj.description}</p>
                 <p class="data_p2 pa">${obj.typeTea}</p>
                 <h2 class="fontB data_h2 pa">${obj.cost} ₽</h2>
                 <div class="line"></div>
            </div>`
        } else {
            container.innerHTML += `
            <div class="products__item" data-key="${obj._id}">
                <img src="/images/main/${obj.photo}" alt="" class="img_coffee">
                 <h3 class="fontB data_header pa">${obj.name}</h3>
                 <p class="data_p4 pa">${obj.description}</p>
                 <p class="data_p2 pa">${obj.typeFood}</p>
                 <h2 class="fontB data_h2 pa">${obj.cost} ₽</h2>
                 <div class="line"></div>
            </div>`
        }
    });
};