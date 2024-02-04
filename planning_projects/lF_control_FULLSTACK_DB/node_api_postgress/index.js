const express = require('express')
const structureRouter = require('./routes/structure-routes')
const fileUpload = require('express-fileupload');

const PORT = process.env.PORT || 5000

const app = express()
const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.use(fileUpload());
app.use(express.json()) // для того чтобы express мог обработать json строку

app.use('/api', structureRouter)
app.use('/upload', express.static('../upload'));

app.use('/', express.static('./'));
app.use('/js', express.static('./js'));

app.listen(app.get('port'));

app.listen(PORT, () => console.log(`server started on port ${PORT}`))
