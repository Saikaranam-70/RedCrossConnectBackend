const express = require('express');
const { addUser, loginUser, getDonors, getUserById, deleteDonorById, getUserByEmail, updateEligibility } = require('../controllers/userController');
const verifyToken = require('../middlewears/verifyToken');
const path = require('path')

const router = express.Router();

router.post('/register', addUser)
router.get('/getUserByEmail/:email', getUserByEmail)
router.put('/updateEligibility/:userId', updateEligibility);
router.post('/login', loginUser)
router.post('/getDonors', getDonors)
router.get('/getUser/:userId', getUserById)
router.delete('/delete/user/:donorId', deleteDonorById)
router.get('/uploads/:imageName', (req, res)=>{
    const imageName =  req.params.imageName;
    res.setHeader('Content-Type', 'image/jpg')
    res.sendFile(path.join(__dirname, '..', 'uploads', imageName));
})

module.exports = router