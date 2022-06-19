import Admin from "../models/admin.js";

export const getAdmin = async(req,res)=>{
    try{
        const admin = await Admin.findAll();
        res.json(admin)
    }catch(error){
        console.log({msg:"data tidak ditemukan"})
    }
};

export const postAdmin = async ( req, res)=>{
    const {name, username, password} = req.body;
    try{
        const admin = await Admin.create({
            name:name,
            username:username,
            password:password
        })
        res.json({msg:"data berhasil dimasukan "})
    }catch(error){
        console.log(error)
    }
    
    
}