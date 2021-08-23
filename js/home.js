
const {historyRouterPush} = require('../router')
const { handleAlarm } = require('./alarm.js')
const { handleMemo } = require('./memo.js')
const { handlePhoto } = require('./photo.js')

function handleHome(){
    document.querySelector(".newBtn").style.visibility="hidden"
    document.querySelector(".homeBtn").style.visibility="hidden"
    const contentDiv = document.querySelector('#app-content') 
    const historyLinker = document.querySelectorAll('span.history')
    historyLinker.forEach(el => {
    el.addEventListener('click', (evt) => {
        const pathName = evt.target.getAttribute('route')

        historyRouterPush(pathName, contentDiv)
        if (pathName === "/alarm") {
        handleAlarm();
        }else if (pathName === "/memo") {
        handleMemo();
        }else if(pathName === "/photo") {
        handlePhoto();
        }else if(pathName === "/home") {
        handleHome();
        }
    })
    })
}

module.exports = {
    handleHome
}