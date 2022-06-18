const express = require('express'),
      app = express(),
      cookieParser = require('cookie-parser'),
    {MongoClient} = require('mongodb'),
    {compile} = require("ejs"),
    client = new MongoClient('mongodb+srv://qwerty:qwerty123@cluster0.j7jmx.mongodb.net/?retryWrites=true&w=majority'),
    url = 'mongodb+srv://qwerty:qwerty123@cluster0.j7jmx.mongodb.net/?retryWrites=true&w=majority',
    databasename = "test"




app.use(cookieParser('secret key'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

let y = ''

app.get('/get-cookie', (req, res) => {
    y = req.cookies.io
    console.log('Cookie: ', req.cookies)
    res.render('index')
})

app.get('/set-cookie', (req, res) => {
    res.cookie('token', '12345ABCDE')
    res.send('Set Cookie')
})

//set the template engine ejs
app.set('view engine', 'ejs')

//middlewares
app.use(express.static('public'))


//routes
app.get('/', (req, res) => {
	res.render('index')
})


server = app.listen(3000)
const io = require("socket.io")(server)

let i = Math.floor(Math.random() * (1000));
const nameForSession = "session" + i.toString()


const run_chat_part = async() =>{

    try{
        await client.connect()
        console.log("BD connected")

        //create collection in bd
        const usersAndMessages = client.db().collection(nameForSession)

        //listen on every connection
        io.on('connection', (socket) => {
            socket.broadcast = undefined;
            console.log('New user connected')

            //default username
            socket.username = "Anonymous"

            //listen on change_username
            socket.on('change_username', (data) => {
                socket.username = data.username
            })

            // let arrayWithMessages = []

            // MongoClient.connect(url).then((client) => {
            //     const connect = client.db(databasename).collection(nameForSession)
            //     connect.find().toArray(function(err, names) {
            //         if(!err) {
            //             arrayWithMessages = names
            //             for (let j = 0; j < arrayWithMessages.length; j++) {
            //                 console.log(names[j].message)
            //             }
            //
            //         }
            //     });
            // }).catch((err) => {
            //     // Printing the error message
            //     console.log(err.Message);
            // })

            //listen on new_message
            socket.on('new_message', (data) => {

                let date_ob = new Date();

                // current date
                // adjust 0 before single digit date
                let date = ("0" + date_ob.getDate()).slice(-2);

                // current month
                let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

                // current year
                let year = date_ob.getFullYear();

                // current hours
                let hours = date_ob.getHours();

                // current minutes
                let minutes = date_ob.getMinutes();

                // current seconds
                let seconds = date_ob.getSeconds();

                let dat = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;

                // for (const j in arrayWithMessages) {
                //     io.sockets.emit('new_message', {message : j.message, username : j.username, dat : j.datatime})
                // }


                // for (let k in arrayWithMessages) {
                //     for (let j = 0; j < arrayWithMessages.length; j++) {
                //         io.sockets.emit('new_message', {message : k[j].message, username : k[j].username, dat : k[j].datatime})
                //     }
                // }



                //broadcast the new message
                io.sockets.emit('new_message', {message : data.message, username : socket.username, dat : dat})


                //add message to bd
                usersAndMessages.insertOne({cookies: y, message: data.message, username: socket.username, datatime: dat})

            })

            //listen on typing
            socket.on('typing', (data) => {
                socket.broadcast.emit('typing', {username : socket.username})
            })
        })

    }
    catch (e){
        console.log("BD crashed" + e)
    }

}

run_chat_part()
