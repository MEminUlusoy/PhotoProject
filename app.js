/* import express from "express";

const app = express()
const port = 3000

//*ejs yi template engine olarak tanımlamak için aşağıya bunu yazdık
app.set("view engine", "ejs")

app.use(express.static('public'))

app.get("/", (req,res)=>{
    res.render("index")
})

app.get("/about", (req,res)=>{
    res.render("about")
})

app.listen(port, ()=> {
    console.log(`Application running on port: ${port}`)
}) */




//! 3.ders ve 4.ders

// import express from "express"
// //* indirdiğimi dotenv import ettik
// import dotenv from "dotenv"
// //* veritabanı bağlantısı için db.js içinden conn değişkenini aldık bunla veritabanı bağlantısı gerçekleşmiş olcak
// //* ecma script dillerde ./db dedikten sonra uzantısınıda yazman lazım yani db.js şeklinde belirtmen lazım
// import conn from "./db.js"

// //* dotenv ait olan config methodunu çalıştırdık
// //* artık env dosyasıyla oluşturduğumuz değişkenlere ulaşabilirz
// dotenv.config()

// //*veritabanı bağlantısı için conn değişkenini çalıştırdık
// conn()

// const app = express()
// //* PORT değişkeninide .env dosyasından çektik bu şekilde
// const port = process.env.PORT

// //*ejs yi template engine olarak tanımlamak için aşağıya bunu yazdık
// app.set("view engine", "ejs")

// app.use(express.static('public'))

// app.get("/", (req,res)=>{
//     res.render("index")
// })

// app.get("/about", (req,res)=>{
//     res.render("about")
// })

// app.listen(port, ()=> {
//     console.log(`Application running on port: ${port}`)
// })



//! 5.ders)

// import express from "express"
// import dotenv from "dotenv"

// import conn from "./db.js"
// //! pageRoute değişkeniyle routing işlemlerine yönlendirebilirim siteyi requestlere göre
// import pageRoute from "./routes/pageRoute.js"

// dotenv.config()

// conn()

// const app = express()
// const port = process.env.PORT


// app.set("view engine", "ejs")

// app.use(express.static('public'))

// //! app.use ile eğer "/" ifadesi olursa pageRoute dosyasına gitcek
// app.use("/", pageRoute)


// // app.get("/", (req,res)=>{
// //     res.render("index")
// // })

// // app.get("/about", (req,res)=>{
// //     res.render("about")
// // })

// app.listen(port, ()=> {
//     console.log(`Application running on port: ${port}`)
// })




//! 6.ders) ve 7.ders) 8.DERS)

// import express from "express"
// import dotenv from "dotenv"
// import conn from "./db.js"
// import pageRoute from "./routes/pageRoute.js"
// import photoRoute from "./routes/photoRoute.js"


// dotenv.config()

// conn()

// const app = express()
// const port = process.env.PORT


// app.set("view engine", "ejs")

// app.use(express.static('public'))
// app.use(express.json())

// app.use("/", pageRoute)
// app.use("/photos", photoRoute)



// app.listen(port, ()=> {
//     console.log(`Application running on port: ${port}`)
// })





//! 9)

// import express from "express"
// import dotenv from "dotenv"
// import conn from "./db.js"
// import pageRoute from "./routes/pageRoute.js"
// import photoRoute from "./routes/photoRoute.js"
// import userRoute from "./routes/userRoute.js"

// dotenv.config()

// conn()

// const app = express()
// const port = process.env.PORT


// app.set("view engine", "ejs")

// app.use(express.static('public'))
// app.use(express.json())
// app.use(express.urlencoded({extended: true}))

// app.use("/", pageRoute)
// app.use("/photos", photoRoute)
// app.use("/users", userRoute)


// app.listen(port, ()=> {
//     console.log(`Application running on port: ${port}`)
// })




//! 12.ders

// import express from "express"
// import dotenv from "dotenv"
// import conn from "./db.js"
// import cookieParser from "cookie-parser"
// import pageRoute from "./routes/pageRoute.js"
// import photoRoute from "./routes/photoRoute.js"
// import userRoute from "./routes/userRoute.js"
// import {checkUser} from "./middlewares/authMiddleware.js"

// dotenv.config()

// conn()

// const app = express()
// const port = process.env.PORT


// app.set("view engine", "ejs")

// app.use(express.static('public'))
// app.use(express.json())
// app.use(express.urlencoded({extended: true}))
// app.use(cookieParser())

// app.use("*", checkUser)
// app.use("/", pageRoute)
// app.use("/photos", photoRoute)
// app.use("/users", userRoute)


// app.listen(port, ()=> {
//     console.log(`Application running on port: ${port}`)
// })


//! 13

// import express from "express"
// import dotenv from "dotenv"
// import conn from "./db.js"
// import cookieParser from "cookie-parser"
// import pageRoute from "./routes/pageRoute.js"
// import photoRoute from "./routes/photoRoute.js"
// import userRoute from "./routes/userRoute.js"
// import {checkUser} from "./middlewares/authMiddleware.js"
// import fileUpload from "express-fileupload"
// import {v2 as cloudinary} from "cloudinary"

// dotenv.config()

// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.CLOUD_API_KEY,
//     api_secret: process.env.CLOUD_API_SECRET,

// })

// conn()

// const app = express()
// const port = process.env.PORT


// app.set("view engine", "ejs")

// app.use(express.static('public'))
// app.use(express.json())
// app.use(express.urlencoded({extended: true}))
// app.use(cookieParser())
// app.use(fileUpload({useTempFiles: true}))

// app.use("*", checkUser)
// app.use("/", pageRoute)
// app.use("/photos", photoRoute)
// app.use("/users", userRoute)


// app.listen(port, ()=> {
//     console.log(`Application running on port: ${port}`)
// })




//! 14

import express from "express"
import dotenv from "dotenv"
import conn from "./db.js"
import cookieParser from "cookie-parser"
import methodOverride from "method-override"
import pageRoute from "./routes/pageRoute.js"
import photoRoute from "./routes/photoRoute.js"
import userRoute from "./routes/userRoute.js"
import {checkUser} from "./middlewares/authMiddleware.js"
import fileUpload from "express-fileupload"
import {v2 as cloudinary} from "cloudinary"

dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,

})

// connection to the DB
conn()

const app = express()
const port = process.env.PORT

// ejs tamplate engine
app.set("view engine", "ejs")

// static files middleware
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(fileUpload({useTempFiles: true}))
app.use(methodOverride("_method", {
    methods: ["POST", "GET"]
}))

// routes
app.use("*", checkUser)
app.use("/", pageRoute)
app.use("/photos", photoRoute)
app.use("/users", userRoute)


app.listen(port, ()=> {
    console.log(`Application running on port: ${port}`)
})