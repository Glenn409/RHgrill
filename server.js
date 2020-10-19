const express = reuqire("express")
const app = express()
const path = require('path')

const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')))

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('*',function (req, res) {
    res.redirect('/');
});


app.listen(port, () => console.log(`App listening at http://localhost:${port}`))5