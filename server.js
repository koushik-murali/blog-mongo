const express = require('express');
const app = express();
const article = require('./articles')
const images = require('./pictures')
const dotenv = require('dotenv');
const Mongoose = require('mongoose');
dotenv.config();
const cors = require('cors')

app.use(cors())
Mongoose.connect(process.env.CONSTRING, {useNewUrlParser: true, useUnifiedTopology: true,})

app.set('view engine', 'ejs')

app.get('/', async (req, res) =>{
    try{
        const articles = await article.find()
        res.send({ articles: articles})
    } catch(e)
    {
        console.log(e)
    }
    
} 
)
app.listen(process.env.PORT || 3000);