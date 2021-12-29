const addForm = document.forms.addProduct;

addForm.addEventListener("submit", e => {
    e.preventDefault();
    let body = {};
    for (let i = 0; i < e.target.elements.length; i++) {
        let child = e.target.elements[i];
        if (child.name) {
            if (child.type == 'radio' && !child.checked) {
                continue;
            } else {
                body[child.name] = child.value;
            }
        }
    }
    if (!(body.type == 'Свежеобжаренный кофе')) {
        body.step = '';
        body.country = '';
        body.vid = '';
        if (body.type == 'Здоровое питание') {
            body.typeTea = '';
        } else {
            body.typeFood = '';
        }
    } else {
        body.typeTea = '';
        body.typeFood = '';
    }
    console.log(body);
    sendForm(body, e.target.method, "/api/add");
});

const sendForm = async (body, method, path) => {
    let response = await fetch(path, {
        method: method,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
    let data = await response.json();
    console.log(data);
}
