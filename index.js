import express from 'express';
import { errorhandler, validate } from './ErrorHandling.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.post('/user',validate,(req,res)=>{
    console.log(req.body); 
    console.log("user created");
    
    res.send(`user created`);

     
})


app.listen(9300,()=>{
    console.log('Server is running on port 9300');
})
app.use(errorhandler)