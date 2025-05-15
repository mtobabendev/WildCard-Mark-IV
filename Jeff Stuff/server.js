// the imports
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mysql = require('mysql');
const argon2 = require('argon2');
// dotenv.config();



const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());



// When we upload files, we're going to use our storage configuration
// const upload = multer({ storage: storage });

const connection = mysql.createConnection({
    // local host in the data base
    host: 'localhost',
    user: 'root',
    password: 'root',
    //database file name
    database: 'portfolio_order form'
});
connection.connect();

app.post('/form',  (req, res) => {
    const nameForm = req.body.nameForm;
    const emailForm = req.body.emailForm;
    const phoneForm = req.body.phoneForm;
    const commentForm = req.body.commentForm;
            connection.query(
                // insert into portfolio is the file within the portfolio folder database
            "INSERT INTO portfolio (order_Name, order_Email, order_Number, order_Message) VALUES (?, ?, ?, ?)",
            [nameForm, emailForm, phoneForm, commentForm],
            function(err, rows, fields) {
                if(err) {
                console.error(err);
                // if there is an error
                return res.json({ status: 400, message: 'Did not receive form'});
                }    
                console.log('Rows is: ', rows);
                console.log('Fields is:', fields);
                // if there isnt an error
                res.json({ status: 200, message: 'Sent Successfull'});
            }
        );

});


app.listen(port, () => console.log("Server is running"));

