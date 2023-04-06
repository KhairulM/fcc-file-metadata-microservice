var express = require('express');
var cors = require('cors');
require('dotenv').config()

var multer = require('multer');
var upload = multer({ dest: './public/data/uploads/' });

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), function (req, res) {
  res.json({
    'name': req.file?.originalname || null,
    'type': req.file?.mimetype || null,
    'size': req.file?.size || null
  });
});


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
