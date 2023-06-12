import Router from "./router.js";

let router = new Router()

router.add(404, "../pages/404.html")
router.add("/", "../pages/home.html")
router.add("/universe", "../pages/universe.html")
router.add("/explore", "../pages/explorer.html")

router.handle()

window.onpopstate = () => router.handle()

window.route = () => router.route()