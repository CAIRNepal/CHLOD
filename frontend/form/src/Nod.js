const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
app.use(cors());

const LogInCollection = require("./mongo.js");
const port = process.env.PORT || 4000; 


// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const templatePath = path.join(__dirname, 'pages');
const publicPath = path.join(__dirname, 'public');

app.set('views', templatePath);
app.use(express.static(publicPath));

app.get("/test", (req, res) => {
    console.log("Working");
    res.send("Test route reached");
});

app.post('/signup', async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;

        // Check if passwords match
        if (password !== confirmPassword) {
            return res.status(400).send("Passwords do not match");
        }

        // Check if email already exists
        // const existingUser = await LogInCollection.findOne({ email });
        // if (existingUser) {
        //     return res.status(400).send("Email already exists");
        // }

        // Create new user
        console.log(name, email, password)
        const newUser = new LogInCollection({ name, email, password });
        await newUser.save();
        console.log("User saved")
        return res.status(201).send("Signup successful");
    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(templatePath, 'login.js'));
});

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(username, password);
        // Check if user exists and password matches
        const user = await LogInCollection.findOne({ name:username });
        console.log(user);
        if (!user || user.password !== password) {
            return res.status(400).send("Incorrect username or password");
        }
        console.log()
        return res.status(200).send("Login successful");
    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// Login endpoint
app.post('/login', async (req, res) => {
    try {
        const { name, password } = req.body;

        // Check if user exists and password matches
        const user = await LogInCollection.findOne({ name });
        if (!user || user.password !== password) {
            return res.status(400).send("Incorrect username or password");
        }

        return res.status(200).send("Login successful");
    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});

// Server listening
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
