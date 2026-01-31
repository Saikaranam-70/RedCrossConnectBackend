const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const dotEnv = require('dotenv')
const multer = require('multer')
const path = require('path')
const Donor = require('../models/Donor')
const moment = require('moment')

dotEnv.config();
const secretKey = process.env.MY_NAME

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/'); // Destination folder where the uploaded images will be stored
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Generating a unique filename
    }
});

const upload = multer({ storage: storage });

const addUser = async(req, res)=>{
    const {email,name,mobilenumber, bloodgroup,country, state, city, dateOfLastDonation} = req.body;
    const profile = req.file ? req.file.filename : undefined;

    try {
        const user = await User.findOne({email})
        const userByEmail = await Donor.findOne({email})
        if(user){
            return res.status(400).json({message:"email already exists"})
        }
        const lastDonationDate = moment(dateOfLastDonation);
        const oneYearAgo = moment().subtract(1, 'year');
        const isEligible = lastDonationDate.isBefore(oneYearAgo);
        
        const usersSchema = new User({
            email, 
            name,
            mobilenumber,
            bloodgroup,
            country,
            state,
            dateOfLastDonation,
            isEligible,
            city,
            profile,
        })
        await usersSchema.save();
        
        res.status(200).json({success:"User Added successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json("Internal Server Error")
    }
}

const updateEligibility = async (req, res) => {
    const { userId } = req.params.userId;
    const { dateOfLastDonation } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        // Determine eligibility based on the date of last donation
        const lastDonationDate = moment(dateOfLastDonation);
        const oneYearAgo = moment().subtract(1, 'year');
        const isEligible = lastDonationDate.isBefore(oneYearAgo);

        user.dateOfLastDonation = dateOfLastDonation;
        user.isEligible = isEligible;

        await user.save();

        res.status(200).json({ success: "Eligibility updated successfully", user });
    } catch (error) {
        console.log(error);
        res.status(500).json("Internal Server Error");
    }
};

const loginUser = async(req, res)=>{
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email})
        const userPassword = await bcrypt.compare(password, user.password)
        if(!user || !userPassword){
            return res.status(400).json({message:"Enter a valid password or Email"})
        }
        const token = jwt.sign({userId :user._id}, secretKey, {expiresIn:'1hr'})

        const userId =user._id;
        const userName = user.name

        res.status(200).json({success:"Login success", token, userId, userName})
    } catch (error) {
        console.log(error)
        res.status(500).json("Internal Server Error")
    }
}
const getDonors = async(req, res)=>{
   const {country, state, city, bloodgroup} = req.body
   console.log("body", req.body)
    try {
        const donor = await User.find({country, state, city, bloodgroup})
        if(!donor){
            return res.status(400).json({message:"Donor not found"})
        }
        res.status(200).json({donor})
    } catch (error) {
        console.log(error)
        return res.status(500).json("Internal Server Error")
    }
}
const getUserById = async(req, res)=>{
    const userId = req.params.userId;
    try {
        const user = await User.findById(userId);
        if(!user){
            return res.status(400).json({message: "User not Found"})
        }
        res.status(200).json({user})
    } catch (error) {
        console.log(error)
        return res.status(500).json("Internal Server Error")
    }
}

const getUserByEmail = async(req, res)=>{
    const email = req.params.email;
    try{
        const user = await User.find({email})
        if(!user){
            return res.status(400).json({message: "User not Found"})
        }
        res.status(200).json({user})
    }
     catch (error) {
    console.log(error)
    return res.status(500).json("Internal Server Error")
}
}


const deleteDonorById = async(req, res)=>{
    const donorId = req.params.donorId;
    try {
        const user = await User.findByIdAndDelete(donorId);
        if(!user){
            return res.status(400).json({message: "donor not found"})
        }
        res.status(200).json("deleted successfully")
    } catch (error) {
        console.log(error)
        return res.status(500).json("Internal Server Error")
    }
}

module.exports ={addUser : [upload.single('profile'), addUser], loginUser, getDonors, getUserById, deleteDonorById, getUserByEmail, updateEligibility}


//mongoose -> database
//express -> routes handle
//bcrypt -> password hashing


//npm init -y
//npm i mongoose, express, bcrypt, body-parser, cors, 