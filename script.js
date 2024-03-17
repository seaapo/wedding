let _controls = [
    { id: 'intro', bgColor: '#ffffff66', dollInCard: true, dollInPhoto: false, showIgLinkArea: true },
    { id: 'photo', bgColor: '#ffffffaa', dollInCard: false, dollInPhoto: true, showIgLinkArea: false },
    { id: 'map', bgColor: '#ffffffaa', dollInCard: false, dollInPhoto: false, showIgLinkArea: false }
];

let btnEnter;

window.onload = function () {
    // welcome page
    const pgWelcome = document.getElementById('pg-welcome');
    const pgMain = document.getElementById('pg-content');
    btnEnter = document.getElementById('btn-enter');
    btnEnter.addEventListener('click', function (e) {
        pgMain.classList.remove('d-none');
        pgWelcome.classList.add('d-none');
    });

    // ig filter
    const igFilterClickArea = document.getElementById('ig-filter-click-area');
    const igFilterLink = document.getElementById('ig-filter-link');
    igFilterClickArea.addEventListener('click', function(e) {
        igFilterLink.click();
    });

    // door
    var door = document.getElementById("door");
    door.addEventListener("click", openDoor);

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

            if (control.showIgLinkArea) {
                // landscape or portrait
                if (window.matchMedia("(orientation: portrait)").matches) {
                    igFilterClickArea.classList.remove('d-none');
                }
            }
            else {
                igFilterClickArea.classList.add('d-none');
            }
        });
    }

    const imgPlaceHolder = document.getElementById('photo-placeholder');
    if (imgPlaceHolder) {
        for (let i = 1; i <= 7; i++) {
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

function openDoor() {
    console.log('open door');
    const dollInDoor = document.getElementById('wedding-doll-g');
    const heart = document.getElementById('hint-heart');
    const hintDot = document.getElementById('hint-dot');

    this.classList.toggle("door-open");
    dollInDoor.classList.toggle('shake');
    heart.classList.toggle('d-none');
    hintDot.classList.toggle('d-none');

    this.removeEventListener('click', openDoor);

    setTimeout(function () {
        btnEnter.click();
    }, 3000);
}

function hideAllContent() {
    for (let control of _controls) {
        document.getElementById('anchor-' + control.id).classList.remove('active');
        document.getElementById('card-' + control.id).classList.add('d-none');
    }
}