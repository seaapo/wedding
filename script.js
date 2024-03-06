let _controls = [
    { id: 'intro' },
    { id: 'photo' },
    { id: 'map' }
];

window.onload = function () {
    for (let control of _controls) {
        document.getElementById('anchor-' + control.id).addEventListener('click', function (e) {
            hideAllContent();
            document.getElementById('anchor-' + control.id).classList.add('active');
            document.getElementById('card-' + control.id).classList.remove('d-none');
        });
    }

    const imgPlaceHolder = document.getElementById('photo-placeholder');
    if (imgPlaceHolder) {
        for (let i = 1; i < 6; i++) {
            const img = document.createElement("img");
            img.src = 'resources/pic' + i + '.jpg';
            img.classList.add('photo');
            const gallery = document.getElementById('photo-gallery');
            gallery.appendChild(img);
            img.addEventListener('click', function () {
                imgPlaceHolder.style['background-image'] = "url(" + img.src + ")";
            });
        }
    }
}

function hideAllContent() {
    for (let control of _controls) {
        document.getElementById('anchor-' + control.id).classList.remove('active');
        document.getElementById('card-' + control.id).classList.add('d-none');
    }
}