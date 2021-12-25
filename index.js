// var express = require('express');
// var app = express();
// var PORT = 3000;
  
// // Single routing
// var router = express.Router('./api/routes/route.js');
    
// router.get('/users', function (req, res, next) {
//     router.all();
//     rs="123"
//     res.send("hgf");
// })
  
// app.use(router);
  
// app.listen(PORT, function(err){
//     if (err) console.log(err);
//     console.log("Server listening on PORT", PORT);
// });
// var express = require('express');
// const app = express();

// var apiRoute = require('./api/routes/route.js');

// app.use(apiRoute);
// app.listen(3000);

//
var express = require('express');
const app = express();

var apiRoute = require('./api/routes/route.js');

app.use(apiRoute);
app.listen(3000)