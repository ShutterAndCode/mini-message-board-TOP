import express from 'express'
import indexRouter from './routes/indexRouter.js';
import messageRouter from './routes/messageRouter.js';

const app=express();

const PORT=3000;

app.set("views","./views")
app.set("view engine","ejs");
app.use (express.urlencoded({extended:true}));
app.use(express.static("public"));

app.use(`/`,indexRouter);
app.use (`/new`, messageRouter);




app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
    
})