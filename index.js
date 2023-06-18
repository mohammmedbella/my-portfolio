const express = require('express');
const app = express()

app.set('view engine' , 'ejs')
app.use(express.static('public'))

app.get('/' , (req,res) => {
    res.render('index', {
        pageTitle : 'home Page',
    })
})


app.get('/about' , (req,res) => {
    res.render('about', {
        pageTitle : 'About me',
    })
})

app.get('/works' , (req,res) => {
    res.render('works', {
        pageTitle : 'Works',
    })
})

app.get('/contact' , (req,res) => {
    res.render('contact', {
        pageTitle : 'Contact me',
    })
})
app.listen(2000)
