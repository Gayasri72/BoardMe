import { Request,Response } from "express";
import User from "../models/user";

const createCurrentUser = async(req:Request,res:Response) => {

    try{
        const{autherId} = req.body;
        const existingUser = await User.findOne({autherId});

        if(existingUser)
        {
            return res.status(200).send();
        }

        const newUser = new User(req.body);
        await newUser.save();

        res.status(201).json(newUser.toObject());
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Error creating user"});
    }
};

export default{
    createCurrentUser,
};