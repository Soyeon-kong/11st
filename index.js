require('./css/style.css')
const {initialRoutes, hashRouterPush} = require('./router')
const { handleAlarm } = require('./js/alarm.js')
const { handleMemo } = require('./js/memo.js')
const { handlePhoto } = require('./js/photo.js')

// router
const contentDiv = document.querySelector('#app-content') 
initialRoutes(contentDiv)
window.onload = () => {
    const hashLinker = document.querySelectorAll('a.hash')
    hashLinker.forEach(el => {
        el.addEventListener('click', (evt) => {
          const pathName = evt.target.getAttribute('href')
          hashRouterPush(pathName, contentDiv)
          if (pathName === "#alarm") {
            handleAlarm();
          }
          if (pathName === "#memo") {
            handleMemo();
          }
          if (pathName === "#photo") {
            handlePhoto();
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