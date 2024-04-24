let _controls = [
    { id: 'intro', bgColor: '#ffffff66', dollInCard: true, dollInPhoto: false, showBg: false },
    { id: 'photo', bgColor: '#ffffffaa', dollInCard: false, dollInPhoto: true, showBg: false },
    { id: 'map', bgColor: '#ffffffaa', dollInCard: false, dollInPhoto: false, showBg: false },
    { id: 'seat', bgColor: '#ffffffaa', dollInCard: false, dollInPhoto: false, showBg: false },
    { id: 'ig', bgColor: '#ffffffaa', dollInCard: false, dollInPhoto: false, showBg: true },
    { id: 'help', bgColor: '#ffffffaa', dollInCard: false, dollInPhoto: false, showBg: false }
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
    {
        groupname: '小腳丫1',
        num: 2,
        member: [
            '龍頭',
            '阿比',
            '智睿一家人',
            '瓜瓜',
            'V帥',
            '小歐',
            'Amy',
        ]
    },
    {
        groupname: '小腳丫2',
        num: 4,
        member: [
            '鈺涵',
            '小凰',
            '米森',
            '阿德',
            '阿原',
            '哲明',
            'Mike',
            '費歐',
            '欣怡',
        ]
    },
    {
        groupname: '小腳丫3&山友',
        num: 6,
        member: [
            '楊浩',
            '李珩',
            '祥儀',
            '奶奶',
            '婉君',
            '鈉鎂',
            '家秀',
            '寶哥',
            '五香',
            '梅振群'
        ]
    },
    {
        groupname: '彰友會',
        num: 3,
        member: [
            '王琪',
            'Peggy一家',
            '予佩',
            '小毛一家',
            '佳良',
            '秋嬑',
            '岱洋'
        ]
    },
    {
        groupname: '同事&朋友',
        num: 5,
        member: [
            '林源祥',
            '賴泓俊',
            '吳世民',
            '徐易成',
            '陳勇杕',
            '廖哲男',
            '惠美一家人'
        ]
    }
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

    // door
    var door = document.getElementById("door");
    door.addEventListener("click", openDoor);

    // main content tabs
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

    for (let seatg of _seatmap) {
        const opg = document.createElement("optgroup");
        opg.label = '> ' + seatg.groupname;
        seatSelect.add(opg);

        for (let member of seatg.member) {
            const op = document.createElement("option");
            op.text = member;
            opg.appendChild(op);
        }
    }

    seatSelect.addEventListener('change', function (e) {
        let foundSeatg = _seatmap.find(sg => sg.member.find(s => s == e.target.value));

        if (foundSeatg) {
            const foundSeatEle = document.getElementById('seat' + foundSeatg.num);
            if (foundSeatEle) {
                // clear last data
                txtSeatRet.textContent = '';
                for (let seat of _seats) {
                    const ts = document.getElementById(seat.id);
                    ts?.classList.remove('active');
                }

                foundSeatEle.classList.add('active');
                txtSeatRet.textContent = foundSeatg.num;
            }
        }

    });

    for (let control of _controls) {
        document.getElementById('anchor-' + control.id).addEventListener('click', function (e) {
            hideAllContent();
            document.getElementById('anchor-' + control.id).classList.add('active');
            document.getElementById('card-' + control.id).classList.remove('d-none');
            control.dollInPhoto ? dollInPhoto.classList.remove('d-none') : dollInPhoto.classList.add('d-none');
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
                linkMap.addEventListener('click', function (e) {

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