let _controls = [
    { id: 'intro', bgColor: '#ffffff66', dollInCard: true, dollInPhoto: false },
    { id: 'photo', bgColor: '#ffffffaa', dollInCard: false, dollInPhoto: true },
    { id: 'map', bgColor: '#ffffffaa', dollInCard: false, dollInPhoto: false }
];

window.onload = function () {
    // welcome page
    const pgWelcome = document.getElementById('pg-welcome');
    const pgMain = document.getElementById('pg-content');
    const btnEnterContent = document.getElementById('btn-enter');
    btnEnterContent.addEventListener('click', function(e) {
        pgMain.classList.remove('d-none');
        pgWelcome.classList.add('d-none');
    });

    // main content tabs
    const dollInCard = document.getElementById('wedding-doll');
    const dollInPhoto = document.getElementById('wedding-doll-in-photo');
    const card = document.getElementById('pg-content-card');

    for (let control of _controls) {
        document.getElementById('anchor-' + control.id).addEventListener('click', function (e) {
            hideAllContent();
            document.getElementById('anchor-' + control.id).classList.add('active');
            document.getElementById('card-' + control.id).classList.remove('d-none');
            card.style['background-color'] = control.bgColor;
            control.dollInCard ? dollInCard.classList.remove('d-none') : dollInCard.classList.add('d-none');
            control.dollInPhoto ? dollInPhoto.classList.remove('d-none') : dollInPhoto.classList.add('d-none');
                
            
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