
import User from "../models/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import Photo from "../models/photoModel.js";

//! 9)
//! user oluşturuyo
const createUser = async (req,res) => {
    
    try{
        const user = await User.create(req.body)
        res.status(201).json({user: user._id})
    }catch(error){
        console.log("ERROR", error)

        let errors2 = {}

        if(error.code === 11000){
            errors2.email = "The email is already registered"
        }

        if(error.name === "ValidationError"){
            Object.keys(error.errors).forEach((key) => {
                errors2[key] = error.errors[key].message
            })
        }

        console.log("ERRORS2::::", errors2)

        res.status(400).json(errors2)
    }
    
}


const loginUser = async (req,res) => {
    try {
        const {username, password} = req.body

        const user = await User.findOne({username})
        let same = false

        if(user){
           same = await bcrypt.compare(password, user.password)
        }else{
            return res.status(401).json({
                succeded: false,
                error: "There is no such user"
            })
        }

        if(same){
            const token = createToken(user._id)
            res.cookie("jsonwebtoken",token, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24
            })
            res.redirect("/users/dashboard")
            
        }else{
            res.status(401).json({
                succeded: false,
                error: "PASSWORD IS WRONG"
            })
        }


    } catch (error) {
        res.status(500).json({
            succeded: false,
            error,
        })
    }
}


const createToken = (userId) => {
    return jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "1d",
    })
}

const getDashboardPage =  async (req,res) => {
    const photos = await Photo.find({user: res.locals.user._id})
    const user = await User.findById({_id: res.locals.user._id}).populate(["followers","followings"])
    res.render("dashboard", {
        link: "dashboard",
        photos,
        user
    })
}

const getAllUsers = async (req,res) => {
    try {
        const users = await User.find({ _id: {$ne: res.locals.user._id}})
        res.status(200).render("users", {
            users,
            link: "users",
        })
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error,
        })
    }
}


const getAUser = async (req,res) => {
    try {
        const user = await User.findById({_id: req.params.id})

        const inFollowers = user.followers.some((follower)=>{
            return follower.equals(res.locals.user._id)
        })

        const photos = await Photo.find({user: req.params.id})
        //!aşağıdakiyle yukardaki aynı şey demek. yukarıda req.params.id'yi , const user objesinin id'sine atıyoruz yani aşağıda ister req.params.id  yaz ya da 
        //! bu user objesine atadığımız id'yi user üzerinden çağır aynı şey user._id 'ye atadık zaten req.params.id'yi aynı şey o yüzden.
        //const photos = await Photo.find({user: user._id})
        res.status(200).render("user", {
            user,
            photos,
            link: "users",
            inFollowers,
        })
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error,
        })
    }
}


const follow = async (req,res) => {
    try {

        let user = await User.findByIdAndUpdate(
            {_id: req.params.id},
            {
                $push: {followers: res.locals.user._id}
            },
            {new: true}
        )
        
        user = await User.findByIdAndUpdate(
            {_id: res.locals.user._id},
            {
                $push: {followings: req.params.id},
            },
            {new: true}
        )
        
        res.status(200).redirect(`/users/${req.params.id}`)    

        // res.status(200).json({
        //     succeded: true,
        //     user
        // })

    } catch (error) {
        res.status(500).json({
            succeded: false,
            error,
        })
    }
}



const unfollow = async (req,res) => {
    try {

        let user = await User.findByIdAndUpdate(
            {_id: req.params.id},
            {
                $pull: {followers: res.locals.user._id}
            },
            {new: true}
        )
        
        user = await User.findByIdAndUpdate(
            {_id: res.locals.user._id},
            {
                $pull: {followings: req.params.id},
            },
            {new: true}
        )
        
        res.status(200).redirect(`/users/${req.params.id}`)    

        // res.status(200).json({
        //     succeded: true,
        //     user
        // })

    } catch (error) {
        res.status(500).json({
            succeded: false,
            error,
        })
    }
}

export {createUser, loginUser, getDashboardPage, getAllUsers, getAUser, follow, unfollow}