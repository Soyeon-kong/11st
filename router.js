// template
const homeTemplate = require('./pages/home.hbs')
const alarmTemplate = require('./pages/alarm.hbs')
const memoTemplate = require('./pages/memo.hbs')
const photoTemplate = require('./pages/photo.hbs')

const Home = homeTemplate()
const Alarm = alarmTemplate()
const Memo = memoTemplate()
const Photo = photoTemplate()

const routes = {
  '/': Home,
  '/home': Home,
  '/alarm': Alarm,
  '/memo': Memo,
  '/photo':Photo
}

function initialRoutes (el) {
  renderHTML(el, routes['/'])
  window.onpopstate = () => renderHTML(el, routes[window.location.pathname])
}
function historyRouterPush (pathName, el) {
  window.history.pushState({}, pathName, window.location.origin + pathName)
  renderHTML(el, routes[pathName])
}

// render
function renderHTML (el, route) {
  el.innerHTML = route
}

module.exports = {
  initialRoutes,
  historyRouterPush
}