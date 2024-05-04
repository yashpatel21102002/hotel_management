import express from 'express';
import router from './routes/food.js';
import cors from 'cors'


const app = express();


app.use(cors("*"))
app.use(express.json())
app.use("/api", router);



app.listen(8080, () => {
    console.log("app is listening on port 8080")
})