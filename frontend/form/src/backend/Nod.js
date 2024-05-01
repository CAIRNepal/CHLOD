const express = require("express");
const path = require("path");
const router = express.Router();
const cors = require("cors");
const app = express();
app.use(cors());



const LogInCollection = require("./mongo.js");
const port = process.env.PORT || 3000;

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const templatePath = path.join(__dirname, 'pages');
const publicPath = path.join(__dirname, 'public');


app.set('views', templatePath);
app.use(express.static(publicPath));

app.get('/signup', (req, res) => {
    res.sendFile(path.join(templatePath, 'signup.js'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(templatePath, 'login.js'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});





app.post('/signup', async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;

       
        if (password !== confirmPassword) {
            return res.status(400).send("Passwords do not match");
        } 
      


         const checking = await LogInCollection.findOne({ name });

        if (checking) {
            return res.send("User details already exist.");
        } else {
            const newUser = new LogInCollection({ name,email, password });
            await newUser.save();
            return res.status(201).send("Signup successful");
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});


app.post('/login', async (req, res) => {
    try {
        const check = await LogInCollection.findOne({ name: req.body.name });

        if (check && check.password === req.body.password) {
            res.status(201).send("Login successful");
        } else {
            res.send("Incorrect username or password.");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

// Server listening
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
