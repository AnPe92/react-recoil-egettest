const express = require('express')
const app = express();
const port = 8123;
const cors = require('cors')
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());

let id = 0;

class User {
    constructor(username, password) {
        this.id = id++;
        this.username = username;
        this.password = password;

    }
}



app.put('/login/user', (request, res) => {

    console.log(request.body.username)
    // let username = request.body.username;
    // let password = request.body.password;

    // let user = new User(username, password)

    // console.log(user, " <---user")

    // if (username === 'admin' && password === 'admin123') {
    //     res.send('Succes')
    // } else {
    //     res.send('failFish')
    // }

})

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})