const userModel = require("../models/userModel.js");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const registerController = async(req,res) => {
    try {
        const existingUser = await userModel.findOne({email:req.body.email})
        //validation
        if(existingUser){
            return res.status(200).send({
                success:false,
                message:"User already exists"
            })
        }
        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword
        //rest data
        const user = new userModel(req.body);
        await user.save()
        return res.status(201).send({
            success:true,
            message:"User regeistered successfully",
            user,
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "Error registering API",
            error
        })
    }

};

//login call
const loginController = async (req,res) => {
    try {
        const User = await userModel.findOne({email:req.body.email})
        if(!User){
            return res.status(404).send({
                success:false,
                message:'Invalid Credentials'
            })
        }
        //compare password
        const comparePassword = await bcrypt.compare(req.body.password, User.password)
        if(!comparePassword){
            return res.status(500).send({
                success:false,
                message:'Invalid Credentials'

            })
        }
        const token = jwt.sign({userId:user._id},process.env.JWT_SECRET, {expiresIn:'1d'});
        return res.status(200).send({
            success:true,
            message:'Login Successfully',
            token,
            user,
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message: "Error logging in API",
            error,
        })
    }    
};


module.exports ={ registerController, loginController };