
// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//     host:'smtp.gmail.com',
//     port: 587,
//     secure:false,
//     auth:{
//         user:'saimanikantakaranam682@gmail.com',
//         pass:'gpdn kwnq dprp wwqu'
//     }
// })
// let generater;

// const sendEmailNotification = async(req,res)=>{
//     const {senderEmail, receiverEmail, name, number} = req.body
//     try {

//        const mailOptions = {
//            from:senderEmail,
//            to:receiverEmail,
//            subject: 'Alert! Some One needs your Blood',
//            text:`Hey mr/ms.${name} needs Your blood maybe Its Emergency Please contact Him His Mobile number is ${number}`
//        }
//     transporter.sendMail(mailOptions, (error, info)=>{
//         if(error){
//             console.error(error);
//             return res.status(500).json({ error: 'Failed to send OTP to email.' });
//         }else{
//             console.error('Email sent: ', info.response);
//             return res.status(200).json({ message: 'Otp Sent successfully', emailOtp: generater });
//         }
//     })


//     } catch (error) {
//         console.log(error)
//         res.status(500).json("Internal server error")
//     }
// }


// module.exports = {sendEmailNotification};

const nodemailer = require('nodemailer');
const User = require('../models/User'); // Assuming you have the User model for updating isEligible

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'saimanikantakaranam682@gmail.com',
        pass: 'gpdn kwnq dprp wwqu',
    },
});

const sendEmailNotification = async (req, res) => {
    const { senderEmail, receiverEmail, name, number } = req.body;

    try {
        const mailOptions = {
            from: senderEmail,
            to: receiverEmail,
            subject: 'Alert! Someone needs your blood',
            html: `
                <p>Hey Mr./Ms. <strong>${name}</strong> needs your blood. It might be an emergency. Please contact them:</p>
                <p><strong>Mobile number:</strong> ${number}</p>
                <p>Are you willing to donate your blood?</p>
                <a href="${process.env.FRONTEND_URL}/respond?donorId=${receiverEmail}&response=yes" style="padding: 10px; background-color: green; color: white; text-decoration: none; margin-right: 10px;">Yes, I can donate</a>
                <a href="${process.env.FRONTEND_URL}/respond?donorId=${receiverEmail}&response=no" style="padding: 10px; background-color: red; color: white; text-decoration: none;">No, I cannot</a>
            `,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error);
                return res.status(500).json({ error: 'Failed to send email notification.' });
            } else {
                console.log('Email sent: ', info.response);
                return res.status(200).json({ message: 'Notification email sent successfully.' });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json('Internal server error');
    }
};

const handleDonorResponse = async (req, res) => {
    const { receiverEmail, response } = req.query;

    try {
        const donor = await User.findOne(receiverEmail);
        if (!donor) {
            return res.status(404).json({ error: 'Donor not found' });
        }

        if (response === 'yes') {
            // Notify the requester that the donor is ready to donate
            const mailOptions = {
                from: 'saimanikantakaranam682@gmail.com',
                to: donor.email, // Donor email
                subject: 'Donation Confirmation',
                text: `The donor has agreed to donate blood. Please contact them directly.`,
            };

            transporter.sendMail(mailOptions, async (error, info) => {
                if (error) {
                    console.error(error);
                    return res.status(500).json({ error: 'Failed to send confirmation email.' });
                }

                // Update donor's eligibility
                donor.isEligible = false;
                await donor.save();

                console.log('Confirmation email sent: ', info.response);
                return res.status(200).json({ message: 'Donor confirmed and updated successfully.' });
            });
        } else if (response === 'no') {
            return res.status(200).json({ message: 'Donor declined the request.' });
        } else {
            return res.status(400).json({ error: 'Invalid response.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json('Internal server error');
    }
};

module.exports = { sendEmailNotification, handleDonorResponse };
