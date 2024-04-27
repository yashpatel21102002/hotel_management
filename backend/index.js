import express from 'express';
import router from './routes/food.js';


const app = express();

app.use(express.json())
app.use("/api", router);


app.listen(8080, () => {
    console.log("app is listening on port 8080")
})