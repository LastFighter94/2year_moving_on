const badHabbitsInfo = (info) => {
    if (info === 0) return '-'
    let res = {
        'подробности дозы': info.more, 
        'оправдание зависимости': info.why,
        quantity: info.quantity,
        moneySpend: info.moneySpend,
        subType: info.subType,
        minutesSpend: info.minutesSpend
    }

    return res
}

const needToFill = 'не заполнено'

// необязательно чтобы все данные отображались в интерфейсе !!!
// акцент на модернизации проекта, а уже потом на фиксации данных (пункты "цель" и "примечание")
// в принципе эти пункты вообще можно исключить - заполненные пункты можно оставить (не удалять данные)

// сделать заполнение дня из интерфейса

const badHabbitsDefault = {
    'Порнография': badHabbitsInfo(0),
    'Табак': badHabbitsInfo(0),
    'Алкоголь': badHabbitsInfo(0),
    'Наркотики': badHabbitsInfo(0),
    'Залипание в социальных сетях без запроса': badHabbitsInfo(0),
}

const badHabbitsSubTypes = {
    'Табак': {
        1: 'сигареты',
        2: 'кальян',
        3: 'iqos',
        4: 'wape и прочее'
    },
    'Алкоголь': {
        1: 'пиво'
    },
    'Социальные сети': {
        1: 'youtube',
        2: 'instagram',
        3: 'vk'
    }
}

const sportDefaultInfo = {
    'спортзал': false,
    'йога-утро': false,
    'йога-вечер': false,
    'баскетбол': false,
    'футбол': false
}

const otherGoodsDefaultInfo = {
    'массаж': false
}

const sexualHabbitsDefault = {
    'секс': false,
    'мастурбация': false
}

const badHabbitsExcuses = {
    1: 'недостаточное осознание вреда',
    2: 'встреча с человеком',
    3: 'встреча с компанией',
    4: 'отсутствие чувства меры'
}

const znakomie = {
    'Ваел': {
        age: 30,
        country: 'Ирак',
        education: 'Биолог',
        other: 'познакомился с этим парнишкой в Ярославле в ТЦ Аура - на тот момент он трудился продавцом, менеджером - точно не знаю - в месте где продаются бургеры и шашлыки - Ваел очень вежливо со мной обшался и стал делать скидку на морс, а потом и вовсе пробивать мне его бесплатно: однажды мы разговорились дальше чем -как дела - и узнали что ходим в один и тот же зал - потом мы попробовали вместе походить на бокс, но секция оказалась слишком дорогой (мы сошлись в этом мнении - 1500р занятие) и вот, однажды мы встретились в непривычной для нас обстановке, где Ваел рассказал много интересного о своей жизни.'
    }
}

const daysInfoData = [
    {
        'день': '14-09-2023',
        'цель': 'Этот день я хочу провести с пользой для жизни настоящей и будущей: начать его с раннего подъема, зарядки и завтрака, сообщения любимой девушке с приятными пожеланиями. Далее - после перечисленного я планирую пойти на работу, где в спокойствии и умиротворении, осмысленно и постепенно выполню необходимые для заказчика задачи, не буду нервничать и постараюсь справиться: обед будет по расписанию - не позже 13:00 - если получится справиться с задачами, буду читать документацию по JS, а также, если появятся новые задачи - возьмусь за них. После осмысленного труда, обеда, отсутствия вредных привычек и окончания оплачиваемого трудового дня, я пойду на тренировку, где прокачаю ночи и, возможно, другие части тела: после чего будет ужин в ТЦ Аура, далее - йога, план на следующий день и, так как время еще останется 100% - совершенствование данного формата ведения дневника осозаннной жизни.',
        'примечание': 'Этот день особенный потому что я вновь начинаю вести свой личный дневник, на этот раз с помощью моих профессиональных навыков! Еще начальник предложил мне подумать о том чтобы открыть филиал в моем родном городе - для этого мне понадобятся программисты PHP, 1С, JS. День хороший, тренировка отличная, жалко только что Юля заболела - подхватила какую-то инфекцию, я сильно нервничал по этому поводу, но после того как она сходила к платному лору и получила план лечения - ей и мне морально стало лучше.',
        dayLabels: {
            worthy: true,
            unique: true,
            lazy: false
        },
        goodHabbits: {
            sport: {...sportDefaultInfo, 'спортзал': true},
            otherGoods: {...otherGoodsDefaultInfo}
        },
        badHabbits: {
            ...badHabbitsDefault, 
            'Алкоголь': badHabbitsInfo({more: 'test', why: 'test', quantity: 'test', moneySpend: 'test', subType: badHabbitsSubTypes['Алкоголь'][1], minutesSpend: 'test'}),
            'Табак': badHabbitsInfo({more: 'test', why: 'test', quantity: 'test', moneySpend: 'test', subType: badHabbitsSubTypes['Табак'][1], minutesSpend: 'test'}),
        },
        sexHabbits: sexualHabbitsDefault,
        meeting: false
    },
    {
        'день': '15-09-2023',
        'цель': 'Этот день я хочу провести с еще большей пользой чем предыдущий: важно сохранить прежний боевой настрой и обязательно соблюдать жизнь не поддаваясь искушениям сиюминутной похоти вредных привычек и, разумеется, научиться атоматически блокировать мысли разврата, аргументируя данное действия для мозга следующим - мы люди, а не животные, наш удео развиваться и развивать общество и, для начала, достаточно будет просто контролировать свои мысли и действия. Я планирую рано встать, сделать зарядку, пойти на обед в соответствии с временем (до 13:00), хорошо потрудиться в течении оплачиваемого трудового дня и обязательно узнать у Андрея Шабашова насчет удаленного доступа с windows операционной системы (удаленного доступа на preproduction server). После трудового дня я пойду на массаж, сертификат на который мне подарила Юля - важно написать ей с утра что-нибудь хорошее - чтобы поддержать человека в трудные минуты болезни.',
        'примечание': 'Было бы здорово каким-то образом описать логику целей и примечаний, чтобы автоматизировать процесс написания текста: спустя некоторое время я понял что в таком случае дневник потеряет свой смысл, который заключается в том чтобы передавать мысль в материальный мир, закрепляя ее для дальнейшей реализации. ... Вернулся домой только в 20:30 - выясняется что в понедельник будет 2 новых сотрудника - консультанта: еще сегодня был день рождение у Андрея Шабашова, хорошо посидели. Забавный момент - тупил над стилями в css, опять забыл убрать пробел между двумя стилями с точкой - еще забавный момент это то как я забыл что кэшировал тяжелые вычисления и после того как обновил браузер с чисткой кэша, все заработало - речь о вчерашней проблемы с типизацией, которой по факту вообще нет в нынешнем проекте. В общем все хорошо, я подустал - пожалуй надо ложиться спать - кстати заголовки с фронта в нужный формат для генерации заголовков в excel практически готовы - ужасная функция - на вид и, возможно, по факту. Юля чувствует себя лучше - я очень рад: вспоминали с ней о Юми - немного грустили - однако я уверен кот живет счастливой жизнью полной внимания, заботы и ласки - хочется в это верить. С отпуском разобрались - кстати уже на следующей неделе я дай бог буду в Иркутске: узнал что Ваел из Ирака - парень который практически каждый день продает мне бургер.',
        dayLabels: {
            worthy: true,
            unique: false,
            lazy: false
        },
        goodHabbits: {
            sport: sportDefaultInfo,
            otherGoods: {...otherGoodsDefaultInfo, 'массаж': true}
        },
        badHabbits: badHabbitsDefault,
        sexHabbits: sexualHabbitsDefault,
        meeting: false
    },
    {
        'день': '16-09-2023',
        'цель': 'провести спокойной денек - начать с зарядки, покупки продуктов с утра, продолжить трудом в субботу, пообедать, вернуться домой, сделать полноценную йогу или растяжку, прибраться.',
        'примечание': 'день провел хорошо - осуществил 6 часов труда, решил некоторые задачи по проекту, нормально ел, отлично пообщался с Юлей - она рассказала как ей снилась наша дочка: во сне Юли мы сидели на диване на Южной и хотела заняться амурными делами, но дочка не давала нашим планам осуществиться - играя или делая что-то, я так и не понял. День очень достойный - пара сигарет поштучно - недостаток этого дня: а так все очень здорово и благополучно - я доволен и благодарен. Белье с утра постирал - зарядочку сделал - продукты вечером купил - вместо бургера съел рамен с говядиной и поку с курицей - с Ваелом договорился на завтра покурить кальян после 22:00. Юля сказала чтобы я не говорил о том что живу один - видимо в целях безопасности. Юля чувствует себя еще лучше: рассказал родителям и Артему Мышенко об отпуске - они рады.',
        dayLabels: {
            worthy: true,
            unique: false,
            lazy: false
        },
        goodHabbits: {
            sport: sportDefaultInfo,
            otherGoods: otherGoodsDefaultInfo
        },
        badHabbits: {
            ...badHabbitsDefault,
            'Табак': badHabbitsInfo({
                more: 'купил корсар - 2 штучки, просто захотелось покайфовать: забыл что насос-сердце не любит этого', 
                why: badHabbitsExcuses[1], 
                quantity: 2, 
                moneySpend: 37,
                subType: badHabbitsSubTypes['Табак'][1],
                minutesSpend: 6
            }),
        },
        sexHabbits: sexualHabbitsDefault,
        meeting: false
    },
    {
        'день': '17-09-2023',
        'цель': 'я планирую как минимум 4 часа заняться трудом в офисе, также планирую зарядочку, возможно йогу, встречу с Ваелом. Касательно встречи с Ваелом - до этого надо хорошо потрудиться и прибраться дома: кажется я должен был сделать это еще вчера, но было поздно - я устал и перенес это на сегодня (вчера с офиса я пошел только после 18:00 - сегодня планирую сделать это раньше - но для этого и придти туда нужно либо также, либо раньше).',
        'примечание': 'данных становится все больше и я не успеваю их заполнять - тем более типизировать - в этом и задумка - ни в коем случае не останавливать учет данных - продолжать развивать систему учета параллельно с этим.',
        dayLabels: {
            worthy: false,
            unique: false,
            lazy: true
        },
        goodHabbits: {
            sport: sportDefaultInfo,
            otherGoods: otherGoodsDefaultInfo
        },
        badHabbits: {
            ...badHabbitsDefault,
            'Табак': badHabbitsInfo({
                more: 'кальян с Ваелом - договаривалист заранее', 
                why: badHabbitsExcuses[2], 
                quantity: 1, 
                moneySpend: 675,
                subType: badHabbitsSubTypes['Табак'][2],
                minutesSpend: 120
            }),
            'Залипание в социальных сетях без запроса': badHabbitsInfo({
                more: 'различные блогеры, клипы и развлекательный контент - первые минут 15 было весело, далее уже бессмысленно', 
                why: badHabbitsExcuses[4], 
                quantity: null, 
                moneySpend: 0,
                subType: badHabbitsSubTypes['Социальные сети'][1],
                minutesSpend: 180
            }),
        },
        sexHabbits: {...sexualHabbitsDefault, 'мастурбация': 1},
        meeting: [znakomie['Ваел']]
    },
    {
        'день': '18-09-2023',
        'цель': 'хороший и осознанный день без вредных привычек + тренировка + обязательно продолдить труд над этим домашним проектом.',
        'примечание': 'цели всегда примерно одинаковые - хорошие достойные дни. Кстати сегодня много раз был соблазн покурить сигарету - но я сдержался. Юля устала от того что у нее не получается встать на учет в 11 поликлиннику потому что там куча очереди из дурацих студентов.',
        dayLabels: {
            worthy: true,
            unique: false,
            lazy: false
        },
        goodHabbits: {
            sport: {...sportDefaultInfo, 'спортзал': true},
            otherGoods: otherGoodsDefaultInfo
        },
        badHabbits: badHabbitsDefault,
        sexHabbits: sexualHabbitsDefault,
        meeting: false
    },
    {
        'день': '19-09-2023',
        'цель': 'хороший трудовой день + йога.',
        'примечание': '',
        dayLabels: {
            worthy: true,
            unique: false,
            lazy: false
        },
        goodHabbits: {
            sport: sportDefaultInfo,
            otherGoods: otherGoodsDefaultInfo
        },
        badHabbits: badHabbitsDefault,
        sexHabbits: sexualHabbitsDefault,
        meeting: false
    }
]

function toggleDayInfo(e){
    Object.values(e.parentElement.parentElement.children).forEach((i, index) => {
        if (index === 0) return
        i.classList.toggle('hide')
    })

    if (e.innerText === '+') e.innerText = '-'
    else e.innerText = '+'
}

console.log(daysInfoData);

let daysInfoUI = document.getElementById('daysInfo');

daysInfoData.forEach(dInfo => {
    const dayInfo = document.createElement('div')
    dayInfo.className = 'dayInfo'

    dayInfo.classList.add(dInfo['день'])

    const element = (className, element, text = null) => {
        let el = document.createElement(element)
        el.className = className
        if (text) el.innerHTML = text
        dayInfo.appendChild(el)
        return el
    }
    const fillText = (element, key) => element.innerHTML = `<b>${key}:</b> ${dInfo[key]}`
 
    let [dateP, 
        goalP, 
        someTextP, 
        dayLabelsP, 
        sportHabbitsP,
        otherGoodsP,
        badHabbitsP,
        sexualHabbitsP] = [
            element('date', 'p'), 
            element('goal hide', 'p'), 
            element('someText hide', 'p'), 
            element('dayLabels hide ', 'p'),
            element('sportHabbits hide', 'p'),
            element('otherGoods hide', 'p'),
            element('badHabbits hide', 'p'),
            element('sexualHabbits hide', 'p'),
        ]

    dateP.innerHTML = `<div>${dInfo['день']}</div>`

    fillText(goalP, 'цель')
    fillText(someTextP, 'примечание')

    dateP.innerHTML += ` <h3 onClick="toggleDayInfo(this)">+</h3>`;

    // filling day labels
    for (const [label, value] of Object.entries(dInfo.dayLabels)) {
        let text;

        if (label === 'worthy') text = 'достойный день'
        if (label === 'unique') text = 'особенный день'
        if (label === 'lazy') text = 'ленивый день'

        if (value) dayLabelsP.appendChild(element(label, 'div', text))
    }

    // filling sport habbits
    for (const [label, value] of Object.entries(dInfo.goodHabbits.sport)) {
        if (value) sportHabbitsP.appendChild(element('goodHabbit', 'div', `${label} +`))
    }

    // filling sexual habbits
    for (const [label, value] of Object.entries(dInfo.sexHabbits)) {
        if (value) sexualHabbitsP.appendChild(element('sexHabbit', 'div', `${label}`))
    }

    // filling other goods
    for (const [label, value] of Object.entries(dInfo.goodHabbits.otherGoods)) {
        if (value) otherGoodsP.appendChild(element('goodHabbit', 'div', `${label} +`))
    }

    // filling bad habbits
    for (const [label, value] of Object.entries(dInfo.badHabbits)) {
        if (value !== '-') {
            badHabbitsP.appendChild(element(
            'badHabbit', 
            'div', 
            `
                ${label} (${dInfo.badHabbits[label].subType})<br>
                подробности дозы: ${dInfo.badHabbits[label]['подробности дозы']} <br>
                оправдание зависимости: ${dInfo.badHabbits[label]['оправдание зависимости']}<br>
                количество: ${dInfo.badHabbits[label].quantity}<br>
                денег потрачено: ${dInfo.badHabbits[label].moneySpend} р.<br>
                минут потрачено: ${dInfo.badHabbits[label].minutesSpend}
            `))

            // в зависимости от label - к количеству прилагать приставку измерения (литры, сигареты, кальян - и так далее)
        }
    }

    daysInfoUI.appendChild(dayInfo)
})