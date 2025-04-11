const express = require('express')
const app = express()
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
const port = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV;

app.set("env", process.env);
global.NODE_ENV = app.get("env");

console.log(`Your env is ${process.env.NODE_ENV}`);
console.log(`Your PORT is ${process.env.PORT}`);

const server = require('http').createServer(app);

//middleware
app.use(cors());
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ limit: "150mb",  extended: false }));
app.use(bodyParser.json({limit: "150mb"}));


//checking routes
app.get('/check', (req, res) => {
  res.send(`API is working fine! SERVER ${process.env.NODE_ENV} and PORT ${process.env.PORT}`);
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

//importing routes
app.use('/api/v1', require('./routes/v1'));

//setting up custom error message for routes
app.use((req, res, next) => {
  const error = new Error('This APIs does not exist');
  error.status = 404;
  next(error);
});

//Error handler function`
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

//cors
// app.all('*', function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", '*');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
//   if (req.method == 'OPTIONS') {
//     res.status(200).end();
//   } else {
//     next();
//   }
// });

//server calling
server.listen(port, () => {
  console.log(`Server is running at:${port} and env : ${NODE_ENV}`)
});

