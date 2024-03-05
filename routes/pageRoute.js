import express from "express"
import * as pageController from "../controllers/pageController.js"


const router = express.Router()

//! 5) 
//! Eğer "/"  ifadesi gelirse pageController içindeki getIndexPage değişkenini alcak .get ile bu da zaten ındex.ejs dosyasını getirir
//! yani "/" ifadesi girilirse index.ejs gelcek alttakide aynı "/about" girilirsede about.ejs dosyası gelcek
router.route("/").get(pageController.getIndexPage)
router.route("/about").get(pageController.getAboutPage)
router.route("/register").get(pageController.getRegisterPage)
router.route("/login").get(pageController.getLoginPage)
router.route("/logout").get(pageController.getLogout)
router.route("/contact").get(pageController.getContactPage)
router.route("/contact").post(pageController.sendMail)

export default router