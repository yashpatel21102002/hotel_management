const express = require('express')
const mongoose = require('mongoose')

const app = express();



mongoose.connect(process.env.DATABASE_URL)


app.listen(8080, () => {
    console.log("app is listening on port 8080")
})