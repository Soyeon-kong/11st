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

// entry point
function initialRoutes (el) {
  renderHTML(el, routes['/'])
  window.addEventListener('hashchange', () => {
    return renderHTML(el, getHashRoute())
  })
}

// get hash history route
function getHashRoute () {
  let route = '/'

  Object.keys(routes).forEach(hashRoute => {
    if (window.location.hash.replace('#', '') === hashRoute.replace('/', '')) {
      route = routes[hashRoute]
    }
  })

  return route
}

// set hash history
function hashRouterPush (pathName, el) {
  renderHTML(el, getHashRoute())
}

// render
function renderHTML (el, route) {
  el.innerHTML = route
}

module.exports = {
  initialRoutes,
  hashRouterPush
}