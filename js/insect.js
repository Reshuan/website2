const screens = document.querySelectiorAll('.screen')
const start_btn = document.getElementById('start-btn')
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn')
const game_container = document.getElementById('game-container')
const timeEl = document.getElementbyId('time')
const scoreEl = document.getElementbyId('score')
const message = document.getElementbyId('message')

start_btn.addEventListener('click', () => {
    screen[0].classList.add('up')
})

choose_insect_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        screens[1].classList.add('up')
    })
})
