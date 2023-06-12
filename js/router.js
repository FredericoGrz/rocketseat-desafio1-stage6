let link_home = document.querySelector("#link_home")
let link_universe = document.querySelector("#link_universe")
let link_explore = document.querySelector("#link_explore")

function cleanActiveClass() {
  link_home.classList.remove("active")
  link_universe.classList.remove("active")
  link_explore.classList.remove("active")
}

function activeRouteClass(pathName) {
  switch (pathName) {
    case "/":
      link_home.classList.add("active")
      break;
    case "/universe":
      link_universe.classList.add("active")
      break;
    case "/explore":
      link_explore.classList.add("active")
      break;
  }
}

export default class Router {
  routes = {}

  add(path, page) {
    this.routes[path] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)
    this.handle()
  }

  handle() {
    const { pathname } = window.location
    cleanActiveClass()
    const route = this.routes[pathname] || this.routes[404]
    fetch(route).then(data => data.text()).then(html => {
      document.querySelector("#app").innerHTML = html
      activeRouteClass(pathname)
    })
  }
}