
const createComicList = num => new Array(num).fill('').map((el, i) => `#${i + 1}`)

const purchasedImmortalHulk = []
const immortalHulk = createComicList(31)

const purchasedSilverSable = [1, 4, 5].map(el => `#${el}`)
const silverSable = createComicList(35).filter(el => !purchasedSilverSable.includes(el))

const purchasedSpawn = []
const spawn = createComicList(100)

const purchasedS2099Vol2 = []
const spiderMan2099Vol2 = createComicList(12)

const purchasedS2099Vol3 = []
const spiderMan2099Vol3 = createComicList(25)


// add comic panel
const plus = $('#plus')

const showModal = () => {
    const active = $('.active')[0].innerText
    const activeText = active.toLowerCase().replace(' ', '')
    const $tabContent = $(`#${activeText}`)
    // open banner mobile
    // create new comic panel
    // append new comic panel to tabContent
}

plus.on('click', showModal)

// move comic to other tab

// delete comic

// drag order?? sortable js