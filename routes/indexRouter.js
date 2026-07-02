import { Router } from "express";

const indexRouter=Router();

indexRouter.get('/',(req,res)=>{
    res.send(`Homepage`);
})

export default indexRouter;