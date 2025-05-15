// the inports
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

const connection = mysql.createConnection({
    //local host in the data base
    host: 'localhost',
    user: 'root',
    password: 'root',
    //database folder name 
    database: 'portfolio order form'
});
connection.connect();

app.post('/form', (req, res) => {
    const nameForm = req.body.nameForm;
    const emailForm = req.body.emailForm;
    const phoneForm = req.body.phoneForm;
    const commentForm = req.body.commentForm;
        connection.query(
            // insert into portfolio is the file within the portfolio folder database
        "INSERT INTO portfolio (order_Name, order_Email, order_Number, order_Message) VALUES (?, ?, ?, ?)",
        [nameForm, emailForm, phoneForm, commentForm],
        function(err,  rows, fields) {
            if(err){
                console.error(err);
                // if there is an error send this
              return res.json({ status: 400, message: 'Did not receive form'});
            } 
            console.log('Rows is: ', rows);
            console.log('Fields is: ', fields);
            // if there isnt an error send this 
            res.json({ status: 200, message: 'Send Successfull'});
        }

    );
    
});

app.post('/custom', (req, res) => {
    //if there is only one variable in req.body we do not need to redeclare the variable at the end of the assignment.
    const name1 = req.body.name1;
    const email1 = req.body.email1;
    const cartData = req.body.cartData;
    console.log(cartData)
    for (let i = 0; i < cartData.length; i++) {
        connection.query(
            // insert into portfolio is the file within the portfolio folder database
        "INSERT INTO custom (name_1, email_1, name_Heading, description_Text, image_1, quantity_1) VALUES (?, ?, ?, ?, ?, ?)",
        // [i] is for looping through the index of the cartData loop. This post is sending an array of elements to the database
        [name1, email1, cartData[i].nameHeading, cartData[i].descriptionText, cartData[i].image, cartData[i].quantity],
        function(err,  rows, fields) {
            if(err){
                console.error(err);
                // if there is an error send this
            // return res.json({ status: 400, message: 'Did not receive form'});
            } 
            console.log('Rows is: ', rows);
            console.log('Fields is: ', fields);
            // if there isnt an error send this 
    }
    
);
}
res.json({ status: 200, message: 'Send Successfull'});
});






app.listen(port, () => console.log("Server is running"));