let _controls = [
    { id: 'intro', bgColor: '#ffffff66', dollInCard: true, dollInPhoto: false, showIgLinkArea: true },
    { id: 'photo', bgColor: '#ffffffaa', dollInCard: false, dollInPhoto: true, showIgLinkArea: false },
    { id: 'map', bgColor: '#ffffffaa', dollInCard: false, dollInPhoto: false, showIgLinkArea: false },
    { id: 'seat', bgColor: '#ffffffaa', dollInCard: false, dollInPhoto: false, showIgLinkArea: false },
    { id: 'ig', bgColor: '#ffffffaa', dollInCard: false, dollInPhoto: false, showIgLinkArea: false },
    { id: 'help', bgColor: '#ffffffaa', dollInCard: false, dollInPhoto: false, showIgLinkArea: false }
];

let _seats = [
    { id: 'seat0', top: 12, left: 50 },
    { id: 'seat1', top: 16, left: 85 },
    { id: 'seat2', top: 28, left: 65 },
    { id: 'seat3', top: 26, left: 85 },
    { id: 'seat4', top: 43, left: 65 },
    { id: 'seat5', top: 43, left: 85 },
    { id: 'seat6', top: 55, left: 65 },
    { id: 'seat7', top: 55, left: 85 },
    { id: 'seat8', top: 6, left: 10 },
    { id: 'seat9', top: 18, left: 10 },
    { id: 'seat10', top: 18, left: 28 },
    { id: 'seat11', top: 29, left: 10 },
    { id: 'seat12', top: 29, left: 28 },
    { id: 'seat13', top: 44, left: 10 },
    { id: 'seat14', top: 44, left: 28 },
    { id: 'seat15', top: 66, left: 16 },
    { id: 'seat16', top: 66, left: 34 },
    { id: 'seat17', top: 66, left: 52 },
    { id: 'seat18', top: 66, left: 70 },
    { id: 'seat19', top: 66, left: 88 }
];

let _seatmap = [
    { name: '新娘-哥哥', num: 0 },
    { name: '露西', num: 0 },
    { name: '翊庭', num: 0 },
    { name: '何寳生', num: 0 },
    { name: '李銘堯', num: 0 },
    { name: '崔姨爹', num: 0 },
    { name: '錦雯阿姨', num: 0 },
    { name: '崔婷', num: 0 },
    { name: '崔茜茜', num: 0 },
    { name: '新娘-姨婆', num: 0 },
    { name: '新娘-大阿姨一家', num: 0 },
    { name: '呂碧瑄', num: 0 },
    { name: '龍頭', num: 2 },
    { name: '阿比', num: 2 },
    { name: '智睿一家人', num: 2 },
    { name: '瓜瓜', num: 2 },
    { name: 'V帥', num: 2 },
    { name: '小歐', num: 2 },
    { name: 'Amy', num: 2 },
    { name: '鈺涵', num: 4 },
    { name: '小凰', num: 4 },
    { name: '米森', num: 4 },
    { name: '阿德', num: 4 },
    { name: '阿原', num: 4 },
    { name: '哲明', num: 4 },
    { name: 'Mike', num: 4 },
    { name: '費歐', num: 4 },
    { name: '欣怡', num: 4 },
    { name: '楊浩', num: 6 },
    { name: '李珩', num: 6 },
    { name: '祥儀', num: 6 },
    { name: '奶奶', num: 6 },
    { name: '婉君', num: 6 },
    { name: '鈉鎂', num: 6 },
    { name: '家秀', num: 6 },
    { name: '寶哥', num: 6 },
    { name: '五香', num: 6 },
    { name: '梅振群', num: 6 },
    { name: '王琪', num: 3 },
    { name: 'Peggy一家', num: 3 },
    { name: '予佩', num: 3 },
    { name: '小毛一家', num: 3 },
    { name: '佳良', num: 3 },
    { name: '秋嬑', num: 3 },
    { name: '岱洋', num: 3 },
    { name: '林源祥', num: 5 },
    { name: '賴泓俊', num: 5 },
    { name: '吳世民', num: 5 },
    { name: '徐易成', num: 5 },
    { name: '陳勇杕', num: 5 },
    { name: '廖哲男', num: 5 },
    { name: '惠美一家人', num: 5 },
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
    const igFilter = document.getElementById('ig-filter');
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

    // seats
    for (let seat of _seats) {
        const ts = document.getElementById(seat.id);
        ts.style['top'] = seat.top + 'vh';
        ts.style['left'] = seat.left + 'vw';
    }

    // seat search
    const seatSelect = document.getElementById('selectSeatSearch');
    const txtSeatRet = document.getElementById('txtSeatRet');

    for (let seat of _seatmap) {
        const op = document.createElement("option");
        op.text = seat.name;
        seatSelect.add(op);
    }
    
    seatSelect.addEventListener('change', function(e) {
        let foundSeat = _seatmap.find(s => s.name == e.target.value);

        if (foundSeat) {
            const foundSeatEle = document.getElementById('seat' + foundSeat.num);
            if (foundSeatEle) {
                // clear last data
                txtSeatRet.textContent = '';
                for (let seat of _seats) {
                    const ts = document.getElementById(seat.id);
                    ts?.classList.remove('active');
                }

                foundSeatEle.classList.add('active');
                txtSeatRet.textContent = foundSeat.num;
            }
        }
        
    });

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
                    igFilter.classList.remove('d-none');
                }
            }
            else {
                igFilterClickArea.classList.add('d-none');
                igFilter.classList.add('d-none');
            }
        });

        // map
        const mapDatas = [{
            linkId: 'link-map-img1', targetId: 'map-img1'
        }, {
            linkId: 'link-map-img2', targetId: 'map-img2'
        }, {
            linkId: 'link-map-img3', targetId: 'map-img3'
        }];

        for (let map of mapDatas) {
            const linkMap = document.getElementById(map.linkId);
            const targetMap = document.getElementById(map.targetId);
            if (linkMap && targetMap) {
                linkMap.addEventListener('click', function(e) {

                    for (let m of mapDatas) {
                        if (m.targetId !== map.targetId) {
                            const otherLink = document.getElementById(m.linkId);
                            const otherMap = document.getElementById(m.targetId);
                            if (otherMap) {
                                otherMap.classList.add('d-none');
                            }
                            if (otherLink) {
                                otherLink.classList.remove('active');
                            }
                        }
                    }

                    linkMap.classList.add('active');
                    targetMap.classList.remove('d-none');
                });
            }
        }
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