window.onload = function() {
    document.getElementById('anchor-intro').addEventListener('click', showIntro);
    document.getElementById('anchor-photo').addEventListener('click', showPhoto);
    document.getElementById('anchor-ig').addEventListener('click', showIg);
    document.getElementById('anchor-map').addEventListener('click', showMap);
}

function hideAllContent() {
    let ids = ['intro', 'photo', 'ig', 'map'];
    for (let id of ids) {
        document.getElementById('anchor-' + id).classList.remove('active');
        document.getElementById('card-' + id).classList.add('d-none');
    }
}

function showIntro() {
    hideAllContent();

    document.getElementById('anchor-intro').classList.add('active');
    document.getElementById('card-intro').classList.remove('d-none');
}

function showPhoto() {
    hideAllContent();

    document.getElementById('anchor-photo').classList.add('active');
    document.getElementById('card-photo').classList.remove('d-none');
}

function showIg() {
    hideAllContent();

    document.getElementById('anchor-ig').classList.add('active');
    document.getElementById('card-ig').classList.remove('d-none');
}

function showMap() {
    hideAllContent();

    document.getElementById('anchor-map').classList.add('active');
    document.getElementById('card-map').classList.remove('d-none');
}