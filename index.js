require('./css/style.css')
const {initialRoutes, historyRouterPush} = require('./router')
const { handleAlarm } = require('./js/alarm.js')
const { handleMemo } = require('./js/memo.js')
const { handlePhoto } = require('./js/photo.js')
const { handleHome } = require('./js/home.js')

// router
const contentDiv = document.querySelector('#app-content') 
initialRoutes(contentDiv)

window.onload = () => {
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

// clock
const clock = document.querySelector("#clock");
function getClock(){
    const today = new Date();
    clock.innerHTML =  today.getFullYear()+"년 "+today.getMonth()+"월 "+today.getDate()+"일 "+today.getHours()+"시 "+today.getMinutes()+"분 "+today.getSeconds()+"초"
}
setInterval(getClock,1000);