import { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";
import User from "../../models/User";
import { Resend } from "resend";
import { connectToDatabase } from "@/app/lib/mongodb";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method === "POST"){
        const { email } = req.body;

        await connectToDatabase();
        const user = await User.findOne({ email });

        if( !user ){
            return res.status(400).json({message: 'No account  found with that email'});
        }

        // generate reset token 
        const resetToken = crypto.randomBytes(32).toString('hex');
        const resetTokenExpiry = Date.now() + 3600000; // 1 hour from now

        user.resetToken = resetToken;
        user.resetTokenExpiry = resetTokenExpiry;
        await user.save();

        // send email via resend
        const resetLink = `${process.env.NEXTAUTH_URL}/reset-password?token=${resetToken}`

        try{
            await resend.emails.send({
                from: process.env.EMAIL_FROM!,
                to: email,
                subject: "Password Reset Request",
                text: `To reset your password, click the following link: ${resetLink}. This link will expire in 1 hour`
            });

            return res.status(200).json({message: "Error sending email."})
        } catch (error) {
            return res.status(500).json({message: "Error sending email."})
        }
} else {
    res.status(500).json({message: "Method not allowed"});
}
}