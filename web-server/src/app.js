const path = require('path')
const express = require('express');
const hbs = require('hbs'); 
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const app = express();


// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.render('index',{
        title: "Weather App",
        name: "Deepali Narang"
    });
});

app.get('/about',(req,res)=>{
    res.render("about",{
        title:"About me",
        name:"Deepali Narang"
    });
});

app.get('/help',(req,res)=>{
    res.render('help',{
        message: "Help template!",
        title: "Help App",
        name:"Deepali Narang"
    });
})

/*app.get('',(req,res)=>{
    // res.send("Hello express!");
    res.send('<h2>Hello express in larger text!</h2>');
});

app.get('/help',(req,res)=>{
    // res.send("Help Page!");

    // res.send({
    //     name: "Deepali Narang",
    //     age: 27
    // });

    res.send([
        {name: "Deepali "},{name:"Shreya"}
    ]);
});

app.get('/about',(req,res)=>{
    // res.send("About Page!");

    res.send("<h2>About Page!</h2>");
});
*/

app.get('/weather',(req,res)=>{
    // res.send("Weather Page!");
    if(!req.query.address){
        return res.send({
            error: "You must provide an address."
        });
    }
    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
   
});

// app.get('/help/*',(req,res)=>{
//     res.send("<h2>Help article not found!</h2>");
// });

app.get('/help/*',(req,res)=>{
    res.render('404',{
        errorMsg: 'Help article not found!'
    });
});


// app.get('*',(req,res)=>{
//     res.send("<h2>My 404 Page!</h2>");
// });


app.get('*',(req,res)=>{
    res.render('404',{
        errorMsg: 'My 404 Page!'
    });
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000.");
});