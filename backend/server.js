const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const fileUpload = require('express-fileupload')

// put the HTML file containing your form in a directory named "public" (relative to where this script is located)
app.use(express.static(path.join(__dirname, '/public/')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/page/home.html');
});
app.get('/vegetables', (req, res) => {
    res.sendFile(__dirname + '/page/vegetables.html');
});
app.get('/conjunction', (req, res) => {
    res.sendFile(__dirname + '/page/conjunction.html');
});
app.get('/exercise', (req, res) => {
    res.sendFile(__dirname + '/page/exercise.html');
});
app.get('/signin', (req, res) => {
    res.sendFile(__dirname + '/page/signin.html');
});
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/page/login.html');
});


//uploadfile
app.use(fileUpload());
app.post('/upload', function (req, res) {
    if (!req.files.imgfile || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.imgfile;
    let uploadPath = __dirname + '/public/uploadImg/' + sampleFile.name;

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(uploadPath, function (err) {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!');
    });
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})