import express from "express"
import * as photoController from "../controllers/photoController.js"

const router = express.Router()


router
    .route("/")
    .post(photoController.createPhoto)
    .get(photoController.getAllPhotos)

    
//! 8)    
router
    .route("/:id")
    .get(photoController.getAPhoto) 


router
    .route("/:id")
    .delete(photoController.deletePhoto) 

router
    .route("/:id")
    .put(photoController.updatePhoto)

export default router