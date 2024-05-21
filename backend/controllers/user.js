const User = require('../models/user');

const registerUser = async (req,res) =>{
    try {
        const {name,email,password,role}= req.body;
        const newUser = new User({name,email,password,role});
        await newUser.save();
        res.status(201).json({message:'User registerd successfully'});
    } catch (err) {
        res.status(400).json({error:err.message});
    }
};

const loginUser = async (req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email,password});
        if(!user){
            return res.status(400).json({message:"Invaild credentials"});

        }
        res.status(200).json({message:'User logged in successfully'});

    } catch (err) {
        res.status(400).json({error :err.message});
    }
};

module.exports = {registerUser,loginUser};

