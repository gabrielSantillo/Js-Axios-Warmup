function post_success(response) {
    button_one.insertAdjacentHTML(`afterend`, `${response[`data`][`message`]}`);
}

function post_failure(error) {
    button_one.insertAdjacentHTML(`afterbegin`, `
    <h1>ERROR</h1>`);
}

function ramdomPhotos(details) {
    axios.request({
        url: `https://dog.ceo/api/breeds/image/random
        `
    }).then(post_success).catch(post_failure);
}

let button_one = document.getElementById(`one`)
button_one.addEventListener(`click`, ramdomPhotos);

let button_two = document.getElementById(`two`);
